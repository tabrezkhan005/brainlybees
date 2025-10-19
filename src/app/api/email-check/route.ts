import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('🔧 Testing email configuration...');
    
    // Check environment variables
    const config = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? '✅ SET' : '❌ NOT SET',
      from: process.env.SMTP_FROM,
      to: process.env.CONSULTATION_EMAIL
    };
    
    console.log('📋 Configuration:', config);

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({
        success: false,
        error: 'SMTP credentials not configured',
        config
      }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test SMTP connection
    console.log('🔗 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful');

    // Send a simple test email to yourself
    console.log('📧 Sending test email...');
    const testResult = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'brainlybeesglobal@gmail.com',
      to: process.env.CONSULTATION_EMAIL || 'brainlybeesglobal@gmail.com',
      subject: '🧪 Email Test - BrainlyBees',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f0f9ff;">
          <h2 style="color: #1e40af;">✅ Email Test Successful!</h2>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>From:</strong> ${process.env.SMTP_FROM}</p>
          <p><strong>To:</strong> ${process.env.CONSULTATION_EMAIL}</p>
          <p style="color: #059669;">If you're reading this, your email configuration is working correctly!</p>
        </div>
      `,
      text: `
Email Test Successful!
Timestamp: ${new Date().toLocaleString()}
From: ${process.env.SMTP_FROM}
To: ${process.env.CONSULTATION_EMAIL}

If you're reading this, your email configuration is working correctly!
      `,
    });
    
    console.log('✅ Test email sent:', testResult.messageId);

    return NextResponse.json({
      success: true,
      message: 'Email test successful! Check your inbox.',
      messageId: testResult.messageId,
      config: {
        ...config,
        pass: config.pass
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Email test failed:', error);
    
    let errorDetails = 'Unknown error';
    if (error instanceof Error) {
      errorDetails = error.message;
    }
    
    return NextResponse.json({
      success: false,
      error: 'Email test failed',
      details: errorDetails,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}