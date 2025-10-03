import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('=== CONSULTATION DEBUG START ===');
    
    // Check if we can read the request body
    const body = await request.json();
    console.log('Request body received:', body);
    
    const { name, age, contactNumber, email, description } = body;
    
    // Validate required fields
    if (!name || !age || !contactNumber || !email || !description) {
      console.log('Validation failed - missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    console.log('All fields validated successfully');
    
    // Check environment variables
    console.log('Environment variables check:');
    console.log('SMTP_HOST:', process.env.SMTP_HOST ? 'SET' : 'NOT SET');
    console.log('SMTP_PORT:', process.env.SMTP_PORT ? 'SET' : 'NOT SET');
    console.log('SMTP_USER:', process.env.SMTP_USER ? 'SET' : 'NOT SET');
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'SET' : 'NOT SET');
    console.log('CONSULTATION_EMAIL:', process.env.CONSULTATION_EMAIL ? 'SET' : 'NOT SET');
    
    // For now, return success without sending email
    console.log('=== CONSULTATION DEBUG END ===');
    
    return NextResponse.json(
      { 
        message: 'Debug mode: Form data received successfully!',
        receivedData: {
          name,
          age,
          contactNumber,
          email,
          description
        },
        environmentCheck: {
          smtp_host: process.env.SMTP_HOST ? 'SET' : 'NOT SET',
          smtp_user: process.env.SMTP_USER ? 'SET' : 'NOT SET',
          smtp_pass: process.env.SMTP_PASS ? 'SET' : 'NOT SET',
          consultation_email: process.env.CONSULTATION_EMAIL ? 'SET' : 'NOT SET'
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Consultation form error:', error);
    return NextResponse.json(
      { 
        error: 'Debug mode: Form processing failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}