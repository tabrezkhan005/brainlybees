import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    await transporter.verify();

    // Send test email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"BrainlyBees Test" <noreply@brainlybees.com>',
      to: process.env.CONSULTATION_EMAIL || 'BrainlyBeesGlobal@gmail.com',
      subject: 'Test Email - BrainlyBees Consultation Form',
      html: `
        <h2>Email Configuration Test</h2>
        <p>✅ If you receive this email, your consultation form is working correctly!</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> BrainlyBees Test System</p>
      `,
      text: `Email Configuration Test - If you receive this email, your consultation form is working correctly! Timestamp: ${new Date().toLocaleString()}`,
    });

    return NextResponse.json(
      {
        message: 'Test email sent successfully!',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email test failed:', error);
    return NextResponse.json(
      {
        error: 'Email test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
