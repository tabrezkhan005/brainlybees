import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    console.log('Testing email configuration...');
    
    // Log environment variables (without showing the password)
    console.log('Environment variables:', {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'NOT SET',
      SMTP_FROM: process.env.SMTP_FROM,
      CONSULTATION_EMAIL: process.env.CONSULTATION_EMAIL
    });

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
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Send test email to BrainlyBees
    console.log('Sending test email to BrainlyBees...');
    const testEmailResult = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'BrainlyBeesGlobal@gmail.com',
      to: process.env.CONSULTATION_EMAIL || 'BrainlyBeesGlobal@gmail.com',
      subject: 'Test Email - BrainlyBees Consultation Form',
      html: `
        <h2>Email Configuration Test</h2>
        <p>✅ If you receive this email, your consultation form is working correctly!</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${process.env.SMTP_FROM}</p>
        <p><strong>To:</strong> ${process.env.CONSULTATION_EMAIL}</p>
        <p><strong>SMTP User:</strong> ${process.env.SMTP_USER}</p>
      `,
      text: `
Email Configuration Test

✅ If you receive this email, your consultation form is working correctly!

Timestamp: ${new Date().toLocaleString()}
From: ${process.env.SMTP_FROM}
To: ${process.env.CONSULTATION_EMAIL}
SMTP User: ${process.env.SMTP_USER}
      `,
    });
    
    console.log('Test email sent successfully:', testEmailResult.messageId);

    return NextResponse.json(
      {
        success: true,
        message: 'Test email sent successfully!',
        messageId: testEmailResult.messageId,
        timestamp: new Date().toISOString(),
        configuration: {
          smtp_host: process.env.SMTP_HOST,
          smtp_port: process.env.SMTP_PORT,
          smtp_user: process.env.SMTP_USER,
          smtp_from: process.env.SMTP_FROM,
          consultation_email: process.env.CONSULTATION_EMAIL
        }
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
