import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional(),
  message: z.string().min(20, 'Message must be at least 20 characters').max(1000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // In a real implementation, you would:
    // 1. Save to database
    // 2. Send email notification using SendGrid, Resend, or similar
    // 3. Log the contact attempt
    
    // For now, we'll simulate processing
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Log the contact form submission (in production, use proper logging)
    console.log('Contact form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      messageLength: validatedData.message.length,
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you shortly!',
      },
      { status: 200 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.issues,
        },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'There was an error processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}