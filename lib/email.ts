import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

interface ContactFormData {
  name: string
  email: string
  projectType: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Store the contact form submission in Supabase
    const { error: dbError } = await supabase.from("contact_submissions").insert([
      {
        name: data.name,
        email: data.email,
        project_type: data.projectType,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ])

    if (dbError) {
      console.error("Database error:", dbError)
      throw new Error("Failed to store contact submission")
    }

    // Send email using Supabase Edge Function (you'll need to create this)
    const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
      body: {
        to: "hi@ventryx.xyz",
        subject: `New Contact Form Submission - ${data.projectType}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Project Type:</strong> ${data.projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      },
    })

    if (emailError) {
      console.error("Email error:", emailError)
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    throw error
  }
}
