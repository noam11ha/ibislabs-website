import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "IbisLabs — AI-Powered IBS Management",
  description:
    "IbisLabs helps you identify your IBS type, discover your personal triggers, and find personalized relief. Take our free IBS quiz and join the waitlist.",
};

const stats = [
  { value: "1 in 7", label: "adults worldwide have IBS" },
  { value: "4 years", label: "average time to diagnosis" },
  { value: "73%", label: "improvement with personalized care" },
];

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Identify Your IBS Type",
    description: "Our research-backed quiz determines if you have IBS-C, IBS-D, IBS-M, or IBS-U — in under 3 minutes.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI-Powered Trigger Analysis",
    description: "Log meals, stress, and symptoms to discover your unique patterns. Our AI identifies correlations you would never spot manually.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Personalized Protocols",
    description: "Get a custom management plan tailored to your IBS subtype, triggers, lifestyle, and treatment goals.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Track Progress Over Time",
    description: "Visualize your symptom trends, see what is working, and share meaningful reports with your gastroenterologist.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Take the IBS Quiz",
    description: "Answer 8 evidence-based questions to identify your IBS subtype and understand the root patterns driving your symptoms.",
  },
  {
    step: "02",
    title: "Log Daily & Discover Triggers",
    description: "Track meals, stress, sleep, and symptoms in under 60 seconds per day. Our AI does the pattern recognition for you.",
  },
  {
    step: "03",
    title: "Follow Your Personalized Plan",
    description: "Get actionable, IBS-type-specific recommendations for diet, lifestyle, and treatment options that fit your life.",
  },
];

const testimonials = [
  {
    quote: "After years of conflicting advice, IbisLabs was the first thing that helped me understand my IBS-D triggers. My symptom-free days went from 2 a week to almost every day.",
    name: "Sarah M.",
    detail: "Living with IBS-D for 6 years",
    avatar: "S",
  },
  {
    quote: "I did not even know IBS-M was a thing. The quiz nailed my subtype perfectly and the personalized protocol changed my life.",
    name: "James T.",
    detail: "Diagnosed with IBS-M",
    avatar: "J",
  },
  {
    quote: "The trigger tracking feature is what makes IbisLabs different. I finally know which foods and stress patterns are wrecking my gut.",
    name: "Priya K.",
    detail: "Managing IBS-C",
    avatar: "P",
  },
];

export default function HomePage() {
  return (
    <div className="pt-[68px]">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0F] dark-grid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#00D4FF]/25 bg-[#00D4FF]/5 text-[#00D4FF] rounded-md px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            Now accepting waitlist applications
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-black text-white leading-[1.05] tracking-[-0.04em] mb-6">
            Finally understand
            <span className="block">
              your{" "}
              <span style={{ color: "#00D4FF" }}>IBS.</span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            IbisLabs is the AI-powered platform that identifies your IBS type,
            discovers your personal triggers, and builds a personalized protocol
            for lasting relief.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <WaitlistForm variant="hero" />
          </div>

          <Link
            href="/quiz"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium"
          >
            Or take the free IBS type quiz first
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* ── Stats — enhanced ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-24 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="dark-card-hover relative bg-white/[0.04] border border-white/[0.08] rounded-lg p-7 text-center overflow-hidden cursor-default"
              >
                {/* Top gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/70 to-transparent" />
                <div className="text-3xl font-black tracking-tight mb-1.5 text-gradient-accent">
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES — dark, premium ──────────────────────────── */}
      <section className="py-32 bg-[#0C0C13] dark-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-5">
              Platform
            </p>
            <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
              Everything you need
              <br />to manage IBS
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Built with gastroenterologists and patients. Clinical evidence
              meets AI to give you tools that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="dark-card-hover relative bg-white/[0.03] border border-white/[0.07] rounded-lg p-8 overflow-hidden cursor-default group"
              >
                {/* Corner number */}
                <span className="absolute top-6 right-6 text-[11px] font-black text-zinc-700 tabular-nums">
                  0{i + 1}
                </span>
                {/* Accent top line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/25 to-transparent" />

                {/* Icon container */}
                <div className="w-11 h-11 rounded-md bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center mb-7 group-hover:bg-[#00D4FF]/15 group-hover:border-[#00D4FF]/35 transition-colors">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-black text-white tracking-tight mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — enhanced ───────────────────────────── */}
      <section className="py-32 bg-[#0A0A0F] dark-grid">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-5">
                How it works
              </p>
              <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Three steps
                <br />to relief
              </h2>
            </div>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#00D4FF] transition-colors text-sm font-bold uppercase tracking-widest shrink-0"
            >
              Start now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {howItWorks.map((step, i) => (
              <div
                key={step.step}
                className="dark-card-hover relative bg-white/[0.03] border border-white/[0.07] rounded-lg p-8 overflow-hidden cursor-default"
              >
                {/* Top accent border */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" />

                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm border"
                    style={{
                      color: "#00D4FF",
                      borderColor: "rgba(0,212,255,0.2)",
                      background: "rgba(0,212,255,0.06)",
                    }}
                  >
                    Step {i + 1}
                  </span>
                  {i < howItWorks.length - 1 && (
                    <svg className="hidden md:block w-4 h-4 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>

                {/* Large gradient step number */}
                <div className="text-[72px] font-black leading-none mb-5 tracking-tight text-gradient-accent" style={{ opacity: 0.35 }}>
                  {step.step}
                </div>

                <h3 className="text-xl font-black text-white tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIZ CTA ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-lg p-12 text-center"
            style={{
              background: "#0A0A0F",
              border: "1px solid rgba(0,212,255,0.2)",
              boxShadow: "0 0 60px rgba(0,212,255,0.07), inset 0 0 60px rgba(0,212,255,0.03)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-6">
              Free · 3 minutes · Instant results
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Which type of IBS
              <br />do you have?
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
              IBS-C, IBS-D, IBS-M, and IBS-U each require a different approach.
              Our quiz identifies yours.
            </p>
            <Link
              href="/quiz"
              className="inline-block bg-[#00D4FF] text-[#0A0A0F] px-10 py-4 rounded-md font-black text-base hover:bg-[#00BFEB] active:scale-[0.99] transition-all glow-accent tracking-tight"
            >
              Take the Free IBS Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-4">
              Early access
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Real people, real relief
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-zinc-50 border border-zinc-100 rounded-lg p-7"
              >
                <div className="flex mb-5 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-zinc-900 text-[#00D4FF] font-black text-xs flex items-center justify-center flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm tracking-tight">{t.name}</p>
                    <p className="text-zinc-400 text-xs">{t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────────── */}
      <section className="py-28 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-4">
                Knowledge base
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
                Learn about IBS
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1.5 text-zinc-900 font-bold text-sm hover:text-[#00D4FF] transition-colors uppercase tracking-wider"
            >
              All articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-32 bg-[#0A0A0F] dark-grid">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00D4FF]/4 rounded-full blur-3xl" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-6">
            Early access
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Take control of your IBS.
          </h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-md mx-auto">
            Join thousands on our waitlist for early access to the first truly
            personalized IBS management platform.
          </p>
          <div className="flex flex-col items-center gap-4">
            <WaitlistForm variant="hero" />
            <p className="text-zinc-600 text-sm">
              Free for early adopters · No spam · Unsubscribe anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
