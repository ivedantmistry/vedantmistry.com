import { Resend } from 'resend';
import EmailTemplate from '../../../components/EmailTemplate';

export async function POST(request) {
  // Initialize Resend inside the request handler
  const resend = new Resend(process.env.RESEND_API_KEY);

  let data;
  try {
    data = await request.json();
  } catch (e) {
    return Response.json({ message: e.message }, { status: 500 });
  }

  const emailTemplate = <EmailTemplate {...data} />;

  try {
    const { error } = await resend.emails.send({
      from: 'vedantmistry.com <website@vedantmistry.com>',
      to: 'hi@vedantmistry.com',
      replyTo: data.email,
      subject: `${data.name} - via vedantmistry.com`,
      react: emailTemplate
    });

    if (error) {
      return Response.json({ message: error.message }, { status: 400 });
    }

    return Response.json({ message: 'Email sent' });
  } catch (e) {
    return Response.json({ message: e.message }, { status: 500 });
  }
}