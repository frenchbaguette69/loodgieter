import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone = '', message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Naam, e-mail en bericht zijn verplicht.' }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT = '465', SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: 'E-mail configuratie ontbreekt. Controleer SMTP_HOST, SMTP_USER en SMTP_PASS.' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const to = SMTP_TO || SMTP_FROM || SMTP_USER;
    const from = SMTP_FROM || SMTP_USER;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Nieuw bericht via website - ${name}`,
      text: `
Naam: ${name}
E-mail: ${email}
Telefoon: ${phone}

Bericht:
${message}
      `.trim(),
      html: `
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone || '-'}</p>
        <p><strong>Bericht:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact API error', error);
    return NextResponse.json({ error: 'Versturen mislukt. Probeer het opnieuw.' }, { status: 500 });
  }
}
