import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, age, contactNumber, email, description } = body;

    // Validate required fields
    if (!name || !age || !contactNumber || !email || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Convert customer email to lowercase for consistency
    const customerEmail = email.toLowerCase().trim();

    // Create simplified, reliable email transporter
    console.log('🔧 Setting up email transporter...');
    console.log('📋 Email config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      from: process.env.SMTP_FROM,
      to: process.env.CONSULTATION_EMAIL
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail service for simplicity
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test SMTP connection with timeout
    console.log('🔗 Testing SMTP connection...');
    try {
      await transporter.verify();
      console.log('✅ SMTP connection successful');
    } catch (smtpError) {
      console.error('❌ SMTP connection failed:', smtpError);
      throw new Error(`SMTP connection failed: ${smtpError}`);
    }

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Consultation Request</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">BrainlyBees Education Platform</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #2d3748; margin-bottom: 20px; font-size: 24px;">Student Information</h2>
          
          <div style="margin-bottom: 20px;">
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #4a5568; width: 150px; display: inline-block;">Name:</strong>
              <span style="color: #2d3748;">${name}</span>
            </div>
            
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #4a5568; width: 150px; display: inline-block;">Age:</strong>
              <span style="color: #2d3748;">${age} years old</span>
            </div>
            
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #4a5568; width: 150px; display: inline-block;">Contact Number:</strong>
              <span style="color: #2d3748;">${contactNumber}</span>
            </div>
            
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #4a5568; width: 150px; display: inline-block;">Email:</strong>
              <span style="color: #2d3748;">${customerEmail}</span>
            </div>
          </div>
          
          <div style="margin-top: 25px;">
            <h3 style="color: #2d3748; margin-bottom: 10px;">Description:</h3>
            <div style="background-color: #f7fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea;">
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">${description}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #edf2f7; border-radius: 8px;">
            <p style="margin: 0; color: #4a5568; font-size: 14px; text-align: center;">
              <strong>Action Required:</strong> Please respond to this consultation request within 24 hours.
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #718096; font-size: 12px;">
          <p>This email was sent from BrainlyBees consultation form on ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    `;

    // Prepare confirmation email HTML
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You!</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">Your consultation request has been received</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #2d3748; margin-bottom: 20px;">Hi ${name},</h2>
          
          <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in BrainlyBees! We have received your consultation request and our education experts will review it shortly.
          </p>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-bottom: 15px;">What happens next?</h3>
            <ul style="color: #4a5568; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li>Our team will review your request within 2 hours</li>
              <li>We'll contact you via phone or email to schedule your consultation</li>
              <li>During the consultation, we'll discuss your learning goals and recommend the best program</li>
              <li>You'll receive a personalized learning plan tailored to your needs</li>
            </ul>
          </div>
          
          <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px;">
            If you have any urgent questions or need to make changes to your request, please don't hesitate to contact us directly via WhatsApp at <strong>+91 8979245215</strong>.
          </p>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://wa.me/918979245215" style="background-color: #48bb78; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #718096; font-size: 12px;">
          <p>Best regards,<br>The BrainlyBees Team</p>
        </div>
      </div>
    `;

    try {
      console.log('🚀 Sending emails...');
      
      // 1. Send email to BrainlyBees (you) first
      console.log('📧 Sending consultation email to owner...');
      const ownerEmailResult = await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.CONSULTATION_EMAIL,
        subject: `🔥 URGENT: New Consultation Request from ${name}`,
        html: htmlContent,
        text: `
URGENT: New Consultation Request

Name: ${name}
Age: ${age}
Contact Number: ${contactNumber}
Email: ${customerEmail}

Description:
${description}

Submitted on: ${new Date().toLocaleString()}
        `,
      });
      console.log('✅ Owner email sent successfully!', ownerEmailResult.messageId);

      // 2. Send confirmation email to customer
      console.log('📧 Sending confirmation email to customer...');
      const customerEmailResult = await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: customerEmail,
        subject: '✅ Consultation Request Received - BrainlyBees',
        html: confirmationHtml,
        text: `
Hi ${name},

Thank you for your consultation request! We have received your information and will contact you within 2 hours to schedule your consultation.

If you have any urgent questions, please contact us on WhatsApp: +91 8979245215

Best regards,
The BrainlyBees Team
        `,
      });
      console.log('✅ Customer email sent successfully!', customerEmailResult.messageId);

    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
      
      // Type-safe error handling
      const errorDetails: any = {};
      if (emailError instanceof Error) {
        errorDetails.message = emailError.message;
        errorDetails.name = emailError.name;
      }
      if (typeof emailError === 'object' && emailError !== null) {
        errorDetails.code = (emailError as any).code;
        errorDetails.response = (emailError as any).response;
      }
      
      console.error('Error details:', errorDetails);
      throw emailError;
    }

    return NextResponse.json(
      { 
        message: 'Consultation request sent successfully!',
        details: 'Both emails delivered instantly! Check your inbox now.',
        deliveryTime: 'Immediate delivery (within 30 seconds)',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Complete error sending consultation request:', error);
    
    // More specific error handling for common Gmail issues
    let errorMessage = 'Failed to send consultation request';
    if (error instanceof Error) {
      console.error('🔍 Detailed error analysis:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      
      if (error.message.includes('Invalid login') || error.message.includes('535')) {
        errorMessage = '🔐 Email authentication failed. Please verify your Gmail app password is correct and 2FA is enabled.';
      } else if (error.message.includes('ENOTFOUND') || error.message.includes('ETIMEDOUT')) {
        errorMessage = '🌐 Network connection failed. Please check your internet connection.';
      } else if (error.message.includes('550')) {
        errorMessage = '📧 Email rejected by Gmail. Check if sender email is verified.';
      } else if (error.message.includes('SMTP')) {
        errorMessage = `📨 SMTP Error: ${error.message}`;
      } else {
        errorMessage = `❌ Unexpected error: ${error.message}`;
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        timestamp: new Date().toISOString(),
        details: 'Please try again or contact support via WhatsApp.'
      },
      { status: 500 }
    );
  }
}