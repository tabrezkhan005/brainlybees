import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  console.log('🔍 Test API called at:', new Date().toISOString());
  
  return NextResponse.json({
    success: true,
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    environment: {
      smtp_user: process.env.SMTP_USER ? 'SET' : 'NOT SET',
      smtp_pass: process.env.SMTP_PASS ? 'SET' : 'NOT SET',
      smtp_from: process.env.SMTP_FROM ? 'SET' : 'NOT SET',
      consultation_email: process.env.CONSULTATION_EMAIL ? 'SET' : 'NOT SET'
    }
  });
}

export async function POST() {
  console.log('🔍 Test POST API called at:', new Date().toISOString());
  
  return NextResponse.json({
    success: true,
    message: 'POST API is working!',
    timestamp: new Date().toISOString()
  });
}