"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/85 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-[#00D4FF] flex items-center justify-center">
              <svg
                className="w-4 h-4 text-[#0A0A0F]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <span className="text-[17px] font-bold tracking-tight text-white">
              ibis<span className="text-[#00D4FF]">labs</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-zinc-400 hover:text-white font-medium transition-colors text-sm tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/quiz"
              className="text-zinc-400 hover:text-white font-medium transition-colors text-sm tracking-wide"
            >
              IBS Quiz
            </Link>
            <Link
              href="/blog"
              className="text-zinc-400 hover:text-white font-medium transition-colors text-sm tracking-wide"
            >
              Blog
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/waitlist"
              className="bg-[#00D4FF] text-[#0A0A0F] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#00BFEB] transition-colors glow-accent-sm"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white"
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
            <Link
              href="/"
              className="block text-zinc-400 hover:text-white font-medium py-2.5 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/quiz"
              className="block text-zinc-400 hover:text-white font-medium py-2.5 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              IBS Quiz
            </Link>
            <Link
              href="/blog"
              className="block text-zinc-400 hover:text-white font-medium py-2.5 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-2">
              <Link
                href="/waitlist"
                className="block bg-[#00D4FF] text-[#0A0A0F] px-4 py-2.5 rounded-md text-sm font-bold text-center"
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
