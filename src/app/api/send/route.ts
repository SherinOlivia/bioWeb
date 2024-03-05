import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import { ReactNode } from 'react'; // Import ReactNode from 'react'
import { renderToString } from 'react-dom/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const emailContent: ReactNode = EmailTemplate({ firstName: 'John' }); // Type assertion to ReactNode
    const textVersionContent: string = renderToString(emailContent);
    const data = await resend.emails.send({
      from: 'Roo <solivia198@gmail.com>',
      to: ['sochronicle@gmail.com'],
      subject: 'Hello world',
      react: emailContent,
      text: textVersionContent,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
