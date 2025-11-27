import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    // Create email content
    const emailContent = Object.entries(formData)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}: ${value.join(", ")}`;
        }
        return `${key}: ${value}`;
      })
      .join("\n");

    const subject = `New ${formType} Form Submission - Datanerdz AI`;
    
    // For now, using mailto: approach
    // In production, you should use a service like Resend, SendGrid, or Nodemailer
    const mailtoLink = `mailto:contact@datanerdzai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;

    // TODO: Replace with actual email service like Resend
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'noreply@datanerdzai.com',
    //   to: 'contact@datanerdzai.com',
    //   subject: subject,
    //   text: emailContent,
    // });

    // For now, return success and the email content
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully. We'll contact you soon!",
      mailto: mailtoLink,
      data: formData,
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}
