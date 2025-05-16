import { NextResponse } from "next/server"
import { z } from "zod"

// Define schema for request validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    // Parse and validate the request body
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      // Return validation errors
      return NextResponse.json({ error: "Validation failed", details: result.error.format() }, { status: 400 })
    }

    // Process the validated data
    const { name, email, phone, projectType, message } = result.data

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM, etc.

    // For demo purposes, we'll just log and return success
    console.log("Contact form submission:", result.data)

    // Return success response
    return NextResponse.json({ success: true, message: "Contact request received" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact request:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
