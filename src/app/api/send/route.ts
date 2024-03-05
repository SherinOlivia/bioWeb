import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import { ReactNode } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL as string

// interface EmailRequestBody {
//   email: string;
//   subject: string;
//   message: string;
// }



export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, subject, message } = await req.body as { email: string, subject: string, message: string };
  try {
    const emailContent: ReactNode = EmailTemplate({ subject, message });
    const textVersionContent = emailContent as string;
    
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: emailContent,
      text: textVersionContent,
    });
    if (!data) {
      return NextResponse.json("fail");
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

