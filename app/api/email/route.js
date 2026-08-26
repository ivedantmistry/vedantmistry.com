import { Resend } from 'resend';

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await request.json();

    const { data: resendData, error } = await resend.emails.send({
      from: 'vedantmistry.com <website@vedantmistry.com>',
      to: ['hi@vedantmistry.com'],
      replyTo: data.email,
      subject: `${data.name} - via vedantmistry.com`,
      html: `
        <div>
          <h2>New message from ${data.name}</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      `
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