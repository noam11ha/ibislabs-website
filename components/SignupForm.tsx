"use client";

import { useState } from "react";

const DEFAULT_NOTE = "Launch news only. Unsubscribe any time.";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);
  const [note, setNote] = useState(DEFAULT_NOTE);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem("email") as HTMLInputElement;
    if (!email.trim() || !input.validity.valid) {
      setNote("Enter a valid email, like name@email.com.");
      input.focus();
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setNote("You’re on the list. We’ll email you when we launch.");
        setEmail("");
      } else {
        setNote(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setNote("Couldn’t reach us. Check your connection and try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="signup" noValidate onSubmit={onSubmit}>
      <label htmlFor="email-top">Leave your email and we’ll tell you when we launch.</label>
      <div className="field">
        <input
          id="email-top"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={saving}>{saving ? "Saving" : "Notify me"}</button>
      </div>
      <p className="note" role="status">{note}</p>
    </form>
  );
}
