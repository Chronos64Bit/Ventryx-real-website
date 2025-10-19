import { type NextRequest, NextResponse } from "next/server"

interface VerificationRequest {
  token: string
  userId: string
  guildId?: string
  username?: string
  discriminator?: string
  avatar?: string
  webhookUrl?: string
}

interface VerificationResponse {
  success: boolean
  message: string
  data?: {
    userId: string
    verifiedAt: string
    ip: string
  }
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<VerificationResponse>> {
  try {
    const body: VerificationRequest = await request.json()
    const { token, userId, guildId, username, discriminator, avatar, webhookUrl } = body

    // Validate required fields
    if (!token || !userId) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: token and userId", message: "Invalid request" },
        { status: 400 },
      )
    }

    // Get user's IP address with multiple fallbacks
    const forwarded = request.headers.get("x-forwarded-for")
    const realIp = request.headers.get("x-real-ip")
    const cfConnectingIp = request.headers.get("cf-connecting-ip")

    const ip = cfConnectingIp || (forwarded ? forwarded.split(",")[0].trim() : realIp) || "unknown"

    // Get additional metadata
    const userAgent = request.headers.get("user-agent") || "unknown"
    const timestamp = new Date()

    // Validate token format (basic validation)
    if (!isValidToken(token)) {
      return NextResponse.json(
        { success: false, error: "Invalid token format", message: "Verification failed" },
        { status: 401 },
      )
    }

    // Prepare data for Discord webhook
    const discordData = {
      userId,
      username: username || "Unknown",
      discriminator: discriminator || "0000",
      avatar,
      ip,
      userAgent,
      timestamp: timestamp.toISOString(),
      guildId,
    }

    // Send to Discord webhook if provided
    if (webhookUrl) {
      try {
        await sendDiscordWebhook(webhookUrl, discordData)
      } catch (webhookError) {
        console.error("Webhook error:", webhookError)
        // Don't fail the verification if webhook fails
      }
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: "Verification completed successfully!",
      data: {
        userId,
        verifiedAt: timestamp.toISOString(),
        ip,
      },
    })
  } catch (error) {
    console.error("Verification API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        message: "Verification failed due to a server error",
      },
      { status: 500 },
    )
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: "Method not allowed. Use POST for verification." }, { status: 405 })
}

// Helper function to validate token format
function isValidToken(token: string): boolean {
  if (!token || token.length < 10 || token.length > 255) {
    return false
  }
  return true
}

// Helper function to send Discord webhook
async function sendDiscordWebhook(webhookUrl: string, data: any): Promise<void> {
  const embed = {
    title: "🔐 New User Verification",
    color: 0x5865f2,
    fields: [
      {
        name: "User",
        value: `<@${data.userId}> (${data.username}#${data.discriminator})`,
        inline: true,
      },
      {
        name: "IP Address",
        value: `\`${data.ip}\``,
        inline: true,
      },
      {
        name: "User Agent",
        value: `\`${data.userAgent.substring(0, 100)}${data.userAgent.length > 100 ? "..." : ""}\``,
        inline: false,
      },
      {
        name: "Timestamp",
        value: `<t:${Math.floor(new Date(data.timestamp).getTime() / 1000)}:F>`,
        inline: true,
      },
    ],
    thumbnail: data.avatar
      ? {
          url: `https://cdn.discordapp.com/avatars/${data.userId}/${data.avatar}.png`,
        }
      : undefined,
    footer: {
      text: "Ventryx Verification System",
      icon_url: "https://ventryx.xyz/ventryx-logo.png",
    },
    timestamp: data.timestamp,
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [embed],
    }),
  })
}
