import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let email: string;

  try {
    const body = await req.json();
    email = (body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.WAITLIST_NOTIFICATION_EMAIL;
  if (!apiKey || !notificationEmail) {
    console.error("Waitlist email service is not configured.");
    return NextResponse.json(
      { error: "Waitlist service is temporarily unavailable." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Ibis Labs Waitlist <onboarding@ibislabs.io>",
      to: notificationEmail,
      subject: "New Ibis Labs waitlist signup",
      text: `A new user joined the Ibis Labs waitlist.\n\nEmail: ${email}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again later." },
      { status: 500 }
    );
  }
}
