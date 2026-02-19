"use client";

import { useState } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "inline" | "full";
}

export default function WaitlistForm({ variant = "inline" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    await new Promise((res) => setTimeout(res, 1000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-12 h-12 rounded-md bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[#00D4FF]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-white text-lg tracking-tight">You&apos;re on the list.</p>
          <p className="text-zinc-400 text-sm mt-1">
            We&apos;ll notify you when IbisLabs launches. Check your inbox.
          </p>
        </div>
      </div>
    );
  }

  if (variant === "full") {
    return (
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <label htmlFor="email-full" className="block text-sm font-semibold text-zinc-700 mb-1.5 tracking-tight">
            Email address
          </label>
          <input
            id="email-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-md border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent transition text-sm"
            required
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#0A0A0F] text-white py-3 rounded-md font-bold text-sm hover:bg-zinc-800 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed tracking-tight"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Joining...
            </span>
          ) : (
            "Join the Waitlist"
          )}
        </button>
        <p className="text-xs text-zinc-400 text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  // Hero / inline variant — designed for dark backgrounds
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (errorMessage) setErrorMessage("");
        }}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-md border border-white/10 bg-white/8 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent transition text-sm"
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#00D4FF] text-[#0A0A0F] px-6 py-3 rounded-md font-bold text-sm hover:bg-[#00BFEB] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap glow-accent-sm"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {errorMessage && (
        <p className="text-red-400 text-xs mt-1 w-full">{errorMessage}</p>
      )}
    </form>
  );
}
