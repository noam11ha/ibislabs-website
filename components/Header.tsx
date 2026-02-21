"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/85 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity" style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>
            <span style={{ color: "white" }}>Ibis</span><span style={{ color: "#00D4FF" }}>Labs</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {[
              { href: "/", label: "Home" },
              { href: "/quiz", label: "IBS Quiz" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-link text-zinc-400 text-sm font-medium tracking-wide transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA with pulsing glow */}
          <div className="hidden md:flex items-center">
            <Link
              href="/waitlist"
              className="btn-glow-pulse bg-[#00D4FF] text-[#0A0A0F] px-5 py-2.5 rounded-md text-sm font-black hover:bg-[#00BFEB] active:scale-[0.98] transition-colors tracking-tight"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/[0.06] py-4 space-y-1">
            {[
              { href: "/", label: "Home" },
              { href: "/quiz", label: "IBS Quiz" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-zinc-400 hover:text-white font-medium py-2.5 text-sm transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/waitlist"
                className="block bg-[#00D4FF] text-[#0A0A0F] px-4 py-2.5 rounded-md text-sm font-black text-center"
                onClick={() => setMenuOpen(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
