import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log('API Route called - checking API key:', process.env.RESEND_API_KEY ? 'Key exists' : 'Key missing');
    
    const { name, email, phone, message, formType } = await request.json();
    
    console.log('Form data received:', { name, email, phone, formType });

    // Determine subject based on form type
    let subject = 'New Contact Form Submission - Datanerdz AI';
    if (formType === 'mentor') {
      subject = 'New Mentor Application - Datanerdz AI';
    } else if (formType === 'student') {
      subject = 'New Student Sign-Up - Datanerdz AI';
    } else if (formType === 'client') {
      subject = 'New Client Enquiry - Datanerdz AI';
    }

    console.log('Attempting to send email with subject:', subject);

    const { data, error } = await resend.emails.send({
      from: 'Datanerdz AI <onboarding@resend.dev>',
      to: 'hkhemanth1324@gmail.com', // Only verified email for now
      replyTo: 'shanthinishanu24@gmail.com', // Reply goes to this email
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0066FF, #00CCFF); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0066FF; }
              .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">${subject}</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone / WhatsApp:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email', 
      details: error.message 
    }, { status: 500 });
  }
}
