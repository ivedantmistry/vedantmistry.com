import { Resend } from 'resend';
import EmailTemplate from '../../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    const { data: resendData, error } = await resend.emails.send({
      from: 'vedantmistry.com <website@vedantmistry.com>',
      to: ['hi@vedantmistry.com'],
      replyTo: data.email,
      subject: `${data.name} - via vedantmistry.com`,

      react: EmailTemplate(data)
    });

    if (error) {
      console.error('Resend API Error:', error);
      return Response.json({ message: error.message }, { status: 400 });
    }

    return Response.json({ message: 'Email sent', id: resendData?.id });

  } catch (error) {
    console.error('Server Route Error:', error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}