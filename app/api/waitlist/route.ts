import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/;

export async function POST(req: NextRequest) {
  let email: string;

  try {
    const body = await req.json();
    email = String(body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 400 });
  }

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Enter a valid email, like name@email.com." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Sign-ups are briefly unavailable. Please try again later." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Ibis Labs Waitlist <onboarding@ibislabs.io>",
      to: "noam11ha.apple@gmail.com",
      subject: `New waitlist signup: ${email}`,
      text: `A new person joined the Ibis Labs waitlist.\n\nEmail: ${email}`,
    });
    if (error) throw error;

    // Optional: also save the contact to a Resend audience when RESEND_AUDIENCE_ID is set.
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts
        .create({ email, audienceId: process.env.RESEND_AUDIENCE_ID, unsubscribed: false })
        .catch((err) => console.error("Resend contact error:", err));
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Couldn’t save your email. Please try again later." }, { status: 500 });
  }
}
