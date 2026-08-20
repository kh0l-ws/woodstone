import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Chybí povinné údaje." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Wood&Stone web <onboarding@resend.dev>", // dočasně, viz poznámka výše
      to: "zrnkhk24vv@privaterelay.appleid.com",
      replyTo: email,
      subject: `Nová poptávka od ${name}`,
      text: `
Jméno: ${name}
Telefon: ${phone}
E-mail: ${email}

Zpráva:
${message || "(bez zprávy)"}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Chyba při odesílání e-mailu:", error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu." },
      { status: 500 }
    );
  }
}