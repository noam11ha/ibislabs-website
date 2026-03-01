"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Transparent only on homepage before scrolling
  const transparent = isHome && !scrolled;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/quiz", label: "IBS Quiz" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-b border-white/10"
          : "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E4DC]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
            style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}
          >
            <span style={{ color: transparent ? "#ffffff" : "#1C1C1A" }}>Ibis</span>
            <span style={{ color: transparent ? "rgba(255,255,255,0.7)" : "#4A7C59" }}>Labs</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                  transparent
                    ? "text-white/80 nav-link-white"
                    : "text-[#6B6B67]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/waitlist"
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] ${
                transparent
                  ? "border border-white/55 text-white hover:bg-white/10"
                  : "bg-[#4A7C59] text-white hover:bg-[#3d6b4a]"
              }`}
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              transparent ? "text-white" : "text-[#6B6B67] hover:text-[#1C1C1A]"
            }`}
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
          <div
            className={`md:hidden border-t py-4 space-y-1 ${
              transparent
                ? "border-white/15 bg-[#3A6B48]"
                : "border-[#E8E4DC] bg-[#FAF7F2]"
            }`}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block font-medium py-2.5 text-sm transition-colors ${
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "text-[#6B6B67] hover:text-[#1C1C1A]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/waitlist"
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold text-center ${
                  transparent
                    ? "border border-white/55 text-white"
                    : "bg-[#4A7C59] text-white"
                }`}
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
