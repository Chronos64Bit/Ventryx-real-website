import { type NextRequest, NextResponse } from "next/server"
import mysql from "mysql2/promise"

// Database configuration
const dbConfig = {
  host: "db2.sillydevelopment.co.uk",
  port: 3306,
  user: "u54632_2q5tLXWJyk",
  password: "@P=uZd8d+pWMmkUGHHuOWJ1",
  database: "s54632_vntx-IP-logs",
  ssl: false,
}

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
    id: number
  }
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<VerificationResponse>> {
  let connection: mysql.Connection | null = null

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
    const referer = request.headers.get("referer") || "direct"
    const timestamp = new Date()

    // Validate token format (basic validation - customize as needed)
    if (!isValidToken(token)) {
      return NextResponse.json(
        { success: false, error: "Invalid token format", message: "Verification failed" },
        { status: 401 },
      )
    }

    // Connect to MySQL database
    connection = await mysql.createConnection(dbConfig)

    // Check if user is already verified (optional)
    const [existingRows] = await connection.execute(
      "SELECT id FROM verifications WHERE discord_user_id = ? ORDER BY created_at DESC LIMIT 1",
      [userId],
    )

    // Insert verification record
    const [result] = await connection.execute(
      `INSERT INTO verifications 
       (discord_user_id, verification_token, ip_address, user_agent, referer, 
        guild_id, username, discriminator, avatar, verified_at, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        token,
        ip,
        userAgent,
        referer,
        guildId || null,
        username || null,
        discriminator || null,
        avatar || null,
        timestamp,
        "verified",
      ],
    )

    const insertResult = result as mysql.ResultSetHeader
    const verificationId = insertResult.insertId

    // Prepare data for Discord webhook/bot
    const discordData = {
      userId,
      username: username || "Unknown",
      discriminator: discriminator || "0000",
      avatar,
      ip,
      userAgent,
      timestamp: timestamp.toISOString(),
      verificationId,
      guildId,
      isNewUser: (existingRows as any[]).length === 0,
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
        id: verificationId,
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
  } finally {
    if (connection) {
      await connection.end()
    }
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: "Method not allowed. Use POST for verification." }, { status: 405 })
}

// Helper function to validate token format
function isValidToken(token: string): boolean {
  // Basic token validation - customize based on your token format
  if (!token || token.length < 10 || token.length > 255) {
    return false
  }

  // Add your specific token validation logic here
  // For example: check if it's a valid JWT, has correct format, etc.
  return true
}

// Helper function to send Discord webhook
async function sendDiscordWebhook(webhookUrl: string, data: any): Promise<void> {
  const embed = {
    title: "🔐 New User Verification",
    color: 0x5865f2, // Discord blurple
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
        name: "Status",
        value: data.isNewUser ? "🆕 First verification" : "🔄 Re-verification",
        inline: true,
      },
      {
        name: "User Agent",
        value: `\`${data.userAgent.substring(0, 100)}${data.userAgent.length > 100 ? "..." : ""}\``,
        inline: false,
      },
      {
        name: "Verification ID",
        value: `\`${data.verificationId}\``,
        inline: true,
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
