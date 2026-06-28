import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, lastName, telephone, email, service, message } =
    (await req.json()) as {
      firstName: string;
      lastName: string;
      telephone: string;
      email: string;
      service: string;
      message: string;
    };

  const html = `
    <div style="font-family:sans-serif;max-width:600px;color:#111">
      <h2 style="color:#BE7B2C">New Inquiry — Noon Consultants</h2>
      <table cellpadding="8" style="width:100%;border-collapse:collapse">
        <tr><td style="color:#666;width:140px">Name</td><td><strong>${firstName} ${lastName}</strong></td></tr>
        <tr><td style="color:#666">Email</td><td>${email}</td></tr>
        <tr><td style="color:#666">Phone</td><td>${telephone}</td></tr>
        <tr><td style="color:#666">Service</td><td>${service || "—"}</td></tr>
      </table>
      <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>
      <p style="color:#666;margin-bottom:4px">Message</p>
      <p style="white-space:pre-wrap">${message}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: `New Inquiry ${service || "N/A"} <onboarding@resend.dev>`,
      to: "info@nnc.sa",
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html,
    });

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email." },
      { status: 500 },
    );
  }
}
