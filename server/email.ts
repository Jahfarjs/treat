import nodemailer from "nodemailer";
import type { ContactFormData } from "@shared/schema";

export async function sendContactEmail(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "treatcater@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #c2621e; margin-bottom: 20px; font-family: Georgia, serif;">New Contact Form Submission</h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Name:</strong>
          <p style="margin: 5px 0; color: #666;">${data.name}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Email:</strong>
          <p style="margin: 5px 0; color: #666;">${data.email}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Phone:</strong>
          <p style="margin: 5px 0; color: #666;">${data.phone}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Event Type:</strong>
          <p style="margin: 5px 0; color: #666;">${data.eventType}</p>
        </div>
        
        ${data.eventDate ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Event Date:</strong>
            <p style="margin: 5px 0; color: #666;">${data.eventDate}</p>
          </div>
        ` : ''}
        
        ${data.guestCount ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Guest Count:</strong>
            <p style="margin: 5px 0; color: #666;">${data.guestCount}</p>
          </div>
        ` : ''}
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Message:</strong>
          <p style="margin: 5px 0; color: #666; line-height: 1.6;">${data.message}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          This email was sent from the Treat Caters & Events website contact form.
        </p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Treat Caters Website" <${process.env.EMAIL_USER || "treatcater@gmail.com"}>`,
    to: "treatcater@gmail.com",
    replyTo: data.email,
    subject: `New ${data.eventType} Event Inquiry from ${data.name}`,
    html: htmlContent,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Event Type: ${data.eventType}
${data.eventDate ? `Event Date: ${data.eventDate}` : ''}
${data.guestCount ? `Guest Count: ${data.guestCount}` : ''}

Message:
${data.message}
    `.trim(),
  };

  await transporter.sendMail(mailOptions);
}
