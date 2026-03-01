"use client";

import { useState } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "inline" | "full" | "cta" | "hero-green";
}

export default function WaitlistForm({ variant = "inline" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const isOnDark = variant === "cta" || variant === "hero-green";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isOnDark ? "bg-white/20 border border-white/40" : "bg-[#4A7C59]/15 border border-[#4A7C59]/30"}`}>
          <svg
            className={`w-6 h-6 ${isOnDark ? "text-white" : "text-[#4A7C59]"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div>
          <p className={`font-bold text-lg tracking-tight ${isOnDark ? "text-white" : "text-[#1C1C1A]"}`}>You&apos;re on the list.</p>
          <p className={`text-sm mt-1 ${isOnDark ? "text-white/70" : "text-[#6B6B67]"}`}>
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
          <label htmlFor="email-full" className="block text-sm font-semibold text-[#6B6B67] mb-1.5 tracking-tight">
            Email address
          </label>
          <input
            id="email-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-[#E8E4DC] bg-white text-[#1C1C1A] placeholder:text-[#6B6B67]/60 focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent transition text-sm"
            required
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#4A7C59] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#3d6b4a] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed tracking-tight"
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
        <p className="text-xs text-[#6B6B67] text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  // hero-green variant — pill-shaped, white input, charcoal button
  if (variant === "hero-green") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") { setStatus("idle"); setErrorMessage(""); }
          }}
          placeholder="Enter your email"
          className="flex-1 px-5 py-3.5 rounded-full bg-white text-[#1C1C1A] placeholder:text-[#6B6B67]/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition text-sm shadow-sm border-0"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#1C1C1A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-black active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
        {errorMessage && (
          <p className="text-red-400 text-xs mt-1 w-full">{errorMessage}</p>
        )}
      </form>
    );
  }

  // Hero / inline / cta variant — horizontal email + button layout
  const btnClass = isOnDark
    ? "bg-white text-[#4A7C59] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#FAF7F2] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
    : "bg-[#4A7C59] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#3d6b4a] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") { setStatus("idle"); setErrorMessage(""); }
        }}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-xl border border-[#E8E4DC] bg-white text-[#1C1C1A] placeholder:text-[#6B6B67]/60 focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent transition text-sm"
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={btnClass}
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1 w-full">{errorMessage}</p>
      )}
    </form>
  );
}
