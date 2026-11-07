import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/;

// Resend segment that holds everyone on the Foundation Fiber waitlist.
const WAITLIST_SEGMENT_ID = process.env.RESEND_SEGMENT_ID ?? "86489ea4-c3d3-4c19-8c4b-8b724b14941b";
const OWNER_INBOX = "noam11ha.apple@gmail.com";
const FROM = "Ibis Labs <hello@ibislabs.io>";
const REPLY_TO = "support@ibislabs.io";

const confirmationText = `You're on the list.

Thanks for joining the Ibis Labs waitlist. Foundation Fiber is launching soon, and you'll be among the first to know when it's available.

Ibis Labs
ibislabs.io

You're getting this email because this address was signed up at ibislabs.io. If that wasn't you, or you'd like to be removed, just reply to this email.`;

const confirmationHtml = `<!doctype html>
<html><body style="margin:0;padding:0;background:#0d0e0f;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0d0e0f;background-image:linear-gradient(180deg,#0d0e0f,#2b201a);">
<tr><td align="center" style="padding:48px 20px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;font-family:'Work Sans','Helvetica Neue',Arial,sans-serif;color:#f1e9df;">
<tr><td style="font-size:13px;font-weight:600;letter-spacing:2px;padding-bottom:40px;">IBIS LABS</td></tr>
<tr><td style="font-size:36px;line-height:1.1;font-weight:400;letter-spacing:-1px;padding-bottom:20px;">You’re on the list.</td></tr>
<tr><td style="padding-bottom:24px;"><div style="width:44px;height:2px;background:#c8201b;line-height:2px;font-size:0;">&nbsp;</div></td></tr>
<tr><td style="font-size:16px;line-height:1.6;color:#dcc9b8;padding-bottom:32px;">Thanks for joining the Ibis Labs waitlist. Foundation Fiber is launching soon, and you’ll be among the first to know when it’s available.</td></tr>
<tr><td style="padding-bottom:40px;"><img src="https://ibislabs.io/product.jpg" width="520" alt="Foundation Fiber pouch and stick pack" style="display:block;width:100%;max-width:520px;height:auto;border-radius:16px;border:0;"></td></tr>
<tr><td style="font-size:12px;line-height:1.6;color:#ad8a74;border-top:1px solid #3d2d24;padding-top:20px;">You’re getting this email because this address was signed up at ibislabs.io. If that wasn’t you, or you’d like to be removed, just reply to this email.</td></tr>
</table></td></tr></table></body></html>`;

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

  // 1. Save the person to the waitlist segment. An existing contact comes back as an error,
  //    which we treat as "already on the list" so they don't get a second welcome email.
  const contact = await resend.contacts.create({
    email,
    unsubscribed: false,
    segments: [{ id: WAITLIST_SEGMENT_ID }],
  });
  const isNew = !contact.error;
  if (contact.error) console.warn("Resend contact not created:", contact.error);

  // 2. Tell the owner, and 3. welcome new sign-ups. Both run together.
  const [owner, welcome] = await Promise.all([
    resend.emails.send({
      from: "Ibis Labs Waitlist <onboarding@ibislabs.io>",
      to: OWNER_INBOX,
      subject: `New waitlist signup: ${email}`,
      text: `A new person joined the Ibis Labs waitlist.\n\nEmail: ${email}\nNew contact: ${isNew ? "yes" : "no (already on the list)"}`,
    }),
    isNew
      ? resend.emails.send({
          from: FROM,
          to: email,
          replyTo: REPLY_TO,
          subject: "You’re on the list",
          text: confirmationText,
          html: confirmationHtml,
        })
      : Promise.resolve({ data: null, error: null }),
  ]);
  if (owner.error) console.error("Owner notification failed:", owner.error);
  if (welcome.error) console.error("Welcome email failed:", welcome.error);

  // Success as long as the sign-up was recorded somewhere.
  if (isNew || !owner.error) {
    return NextResponse.json({ success: true }, { status: 200 });
  }
  return NextResponse.json({ error: "Couldn’t save your email. Please try again later." }, { status: 500 });
}
