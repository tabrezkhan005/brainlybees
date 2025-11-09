import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    console.log('📧 API Route called - send-consultation');

    const body = await request.json();
    console.log('📝 Request body received:', body);

    const { name, age, contactNumber, email, description } = body;

    // Validate required fields
    if (!name || !age || !contactNumber || !email || !description) {
      console.log('❌ Validation failed - missing fields');
      return NextResponse.json(
        { error: 'All fields are required', missing: { name: !name, age: !age, contactNumber: !contactNumber, email: !email, description: !description } },
        { status: 400 }
      );
    }

    console.log('✅ All fields validated successfully');

    // Create email transporter (configure with your email service)
    console.log('🔧 Creating email transporter...');
    console.log('📧 SMTP Config:', {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || '587',
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? '***hidden***' : 'NOT SET'
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your email password or app password
      },
    });

    console.log('✅ Email transporter created successfully');

    // Email content for KidCube Global team
    const teamEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">📚 New Consultation Request</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">KidCube Global Education Platform</p>
        </div>

        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #2d3748; margin-bottom: 20px; font-size: 24px;">👤 Student Information</h2>

          <div style="margin-bottom: 20px;">
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #4a5568; width: 150px; display: inline-block;">Name:</strong>
              <span style="color: #2d3748;">${name}</span>
            </div>
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #4a5568; width: 150px; display: inline-block;">Age:</strong>
              <span style="color: #2d3748;">${age} years</span>
            </div>
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #4a5568; width: 150px; display: inline-block;">Contact Number:</strong>
              <span style="color: #2d3748;">${contactNumber}</span>
            </div>
            <div style="display: flex; margin-bottom: 20px;">
              <strong style="color: #4a5568; width: 150px; display: inline-block;">Email:</strong>
              <span style="color: #2d3748;">${email}</span>
            </div>
          </div>

          <h3 style="color: #2d3748; margin-bottom: 15px; font-size: 20px;">📝 Description</h3>
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
            <p style="color: #4a5568; line-height: 1.6; margin: 0;">${description}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #edf2f7; border-radius: 8px;">
            <h4 style="color: #2d3748; margin-bottom: 10px;">📞 Next Steps:</h4>
            <ul style="color: #4a5568; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Contact the parent within 24 hours</li>
              <li>Schedule a free consultation call</li>
              <li>Assess student's learning needs</li>
              <li>Recommend suitable programs</li>
            </ul>
          </div>

          <div style="margin-top: 20px; text-align: center; padding: 15px; background-color: #f0fff4; border-radius: 8px; border: 1px solid #9ae6b4;">
            <p style="color: #2f855a; font-weight: bold; margin: 0;">✅ High Priority - New Lead</p>
          </div>
        </div>
      </div>
    `;

    // Email content for parent confirmation
    const parentEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Thank You!</h1>
          <p style="color: #ffe0e0; margin: 10px 0 0 0; font-size: 16px;">KidCube Global Education Platform</p>
        </div>

        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #2d3748; margin-bottom: 20px;">Dear ${name}'s Parent,</h2>

          <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in KidCube Global! We've received your consultation request and our education experts are excited to help your child succeed.
          </p>

          <div style="background-color: #fff5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b6b; margin-bottom: 20px;">
            <h3 style="color: #2d3748; margin-bottom: 15px;">📋 Your Request Summary:</h3>
            <ul style="color: #4a5568; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li><strong>Student:</strong> ${name} (${age} years)</li>
              <li><strong>Contact:</strong> ${contactNumber}</li>
              <li><strong>Email:</strong> ${email}</li>
            </ul>
          </div>

          <div style="background-color: #f0fff4; padding: 20px; border-radius: 8px; border-left: 4px solid #48bb78; margin-bottom: 20px;">
            <h3 style="color: #2d3748; margin-bottom: 15px;">⏰ What Happens Next:</h3>
            <ul style="color: #4a5568; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Our team will contact you within <strong>24 hours</strong></li>
              <li>We'll schedule a <strong>free consultation call</strong></li>
              <li>We'll assess your child's learning needs</li>
              <li>We'll recommend the best programs for your child</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #4a5568; margin-bottom: 15px;">Questions? Contact us anytime:</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
              <a href="https://wa.me/919837998535" style="background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                📱 WhatsApp Us
              </a>
              <a href="mailto:kidcubeglobal@gmail.com" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                📧 Email Us
              </a>
            </div>
          </div>

          <div style="margin-top: 30px; padding: 15px; background-color: #edf2f7; border-radius: 8px; text-align: center;">
            <p style="color: #4a5568; font-size: 14px; margin: 0;">
              <strong>KidCube Global Team</strong><br>
              Making Learning Fun & Effective for Kids! 🌟
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to KidCube Global team
    console.log('📤 Sending email to KidCube Global team...');
    const teamEmailResult = await transporter.sendMail({
      from: process.env.SMTP_FROM || '"KidCube Global Consultation" <kidcubeglobal@gmail.com>',
      to: process.env.CONSULTATION_EMAIL || 'kidcubeglobal@gmail.com',
      subject: `📚 New Consultation Request - ${name} (${age} years)`,
      html: teamEmailContent,
      text: `
New Consultation Request - KidCube Global

Student: ${name} (${age} years)
Contact: ${contactNumber}
Email: ${email}

Description:
${description}

Please contact within 24 hours.
      `,
    });
    console.log('✅ Team email sent successfully:', teamEmailResult.messageId);

    // Send confirmation email to parent
    console.log('📤 Sending confirmation email to parent...');
    const parentEmailResult = await transporter.sendMail({
      from: process.env.SMTP_FROM || '"KidCube Global Team" <kidcubeglobal@gmail.com>',
      to: email,
      subject: `🎉 Thank You! Consultation Request Received - KidCube Global`,
      html: parentEmailContent,
      text: `
Thank you for your consultation request!

Dear ${name}'s Parent,

We've received your request and our education experts will contact you within 24 hours to schedule your free consultation.

Student: ${name} (${age} years)
Contact: ${contactNumber}

What happens next:
- Our team will contact you within 24 hours
- We'll schedule a free consultation call
- We'll assess your child's learning needs
- We'll recommend the best programs

Questions? Contact us:
WhatsApp: https://wa.me/919837998535
Email: kidcubeglobal@gmail.com

KidCube Global Team
      `,
    });
    console.log('✅ Parent email sent successfully:', parentEmailResult.messageId);

    console.log('🎉 All emails sent successfully!');
    return NextResponse.json(
      {
        message: 'Consultation request submitted successfully!',
        success: true,
        timestamp: new Date().toISOString(),
        teamEmailId: teamEmailResult.messageId,
        parentEmailId: parentEmailResult.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Consultation form error:', error);
    console.error('❌ Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined
    });

    return NextResponse.json(
      {
        error: 'Failed to submit consultation request',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
