import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    let requestBody = '';
    for await (const chunk of req.body) {
      requestBody += chunk.toString();
    }
    const { email, subject, message } = JSON.parse(requestBody);
    // console.log(email, subject, message);

    const emailContent = EmailTemplate({ subject, message });

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: emailContent,
      text: ""
    });

    if (!data) {
      return NextResponse.json("fail");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' });
  }
}
