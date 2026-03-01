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
  { value: "11 years", label: "average time to find effective IBS relief" },
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
    <div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-grain overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>

        {/* 1 + 2: Label & Headline */}
        <div
          className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8"
          style={{ paddingTop: "140px", paddingBottom: "8px" }}
        >
          <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[0.22em] mb-7">
            Personalized IBS Care
          </p>
          <h1
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-[58px] sm:text-[74px] lg:text-[84px] font-bold text-white leading-[1.05] tracking-tight"
          >
            Your gut, finally<br />understood.
          </h1>
        </div>

        {/* 3: Person image — explicit vh height, feet flush at bottom */}
        <div className="flex flex-1 items-end justify-center overflow-hidden">
          <img
            src="/person-man.png"
            alt=""
            style={{
              height: "50vh",
              width: "auto",
              maxWidth: "none",
              display: "block",
              flexShrink: 0,
            }}
          />
        </div>

        {/* 4: Form & microcopy */}
        <div
          className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8"
          style={{ paddingTop: "28px", paddingBottom: "56px" }}
        >
          <WaitlistForm variant="hero-green" />
          <div className="mt-5 flex items-center gap-4">
            <p className="text-white/45 text-xs">No spam. Unsubscribe anytime.</p>
            <span className="text-white/25 text-xs">·</span>
            <Link
              href="/quiz"
              className="text-white/55 hover:text-white/85 transition-colors text-xs underline underline-offset-2"
            >
              Or take the free IBS quiz
            </Link>
          </div>
        </div>

      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="warm-card-hover bg-white border border-[#E8E4DC] rounded-2xl p-7 text-center shadow-sm cursor-default"
              >
                <div className="text-3xl font-bold tracking-tight mb-1.5" style={{ color: "#4A7C59" }}>
                  {stat.value}
                </div>
                <div className="text-[#6B6B67] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section className="py-32 bg-[#EEF2EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-5">
              Platform
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-5xl sm:text-6xl font-bold text-[#1C1C1A] tracking-tight leading-[1.05] mb-5"
            >
              Everything you need
              <br />to manage IBS
            </h2>
            <p className="text-[#6B6B67] text-lg leading-relaxed">
              Built with gastroenterologists and patients. Clinical evidence
              meets AI to give you tools that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="warm-card-hover relative bg-white border border-[#E8E4DC] rounded-2xl p-8 shadow-sm cursor-default"
              >
                <span className="absolute top-6 right-6 text-[11px] font-semibold text-[#6B6B67]/40 tabular-nums">
                  0{i + 1}
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#4A7C59]/10 text-[#4A7C59] flex items-center justify-center mb-7">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1A] tracking-tight mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-[#6B6B67] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-32 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-5">
                How it works
              </p>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-5xl sm:text-6xl font-bold text-[#1C1C1A] tracking-tight leading-[1.05]"
              >
                Three steps
                <br />to relief
              </h2>
            </div>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 text-[#6B6B67] hover:text-[#4A7C59] transition-colors text-sm font-semibold uppercase tracking-widest shrink-0"
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
                className="warm-card-hover relative bg-white border border-[#E8E4DC] rounded-2xl p-8 shadow-sm cursor-default"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border"
                    style={{
                      color: "#4A7C59",
                      borderColor: "rgba(74,124,89,0.2)",
                      background: "rgba(74,124,89,0.06)",
                    }}
                  >
                    Step {i + 1}
                  </span>
                  {i < howItWorks.length - 1 && (
                    <svg className="hidden md:block w-4 h-4 text-[#E8E4DC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>

                {/* Large step number */}
                <div
                  className="text-[72px] font-bold leading-none mb-5 tracking-tight"
                  style={{ color: "#4A7C59", opacity: 0.15, fontFamily: "var(--font-playfair)" }}
                >
                  {step.step}
                </div>

                <h3 className="text-xl font-bold text-[#1C1C1A] tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B6B67] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIZ CTA ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#EEF2EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-12 text-center"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8E4DC",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-6">
              Free · 3 minutes · Instant results
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl sm:text-5xl font-bold text-[#1C1C1A] tracking-tight leading-tight mb-4"
            >
              Which type of IBS
              <br />do you have?
            </h2>
            <p className="text-[#6B6B67] max-w-md mx-auto mb-10 leading-relaxed">
              IBS-C, IBS-D, IBS-M, and IBS-U each require a different approach.
              Our quiz identifies yours.
            </p>
            <Link
              href="/quiz"
              className="inline-block bg-[#4A7C59] text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-[#3d6b4a] active:scale-[0.99] transition-all"
            >
              Take the Free IBS Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-4">
              Early access
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl sm:text-5xl font-bold text-[#1C1C1A] tracking-tight leading-tight"
            >
              Real people, real relief
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="warm-card-hover bg-white border border-[#E8E4DC] rounded-2xl p-7 shadow-sm cursor-default"
              >
                <div className="flex mb-5 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#6B6B67] text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#4A7C59]/10 text-[#4A7C59] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#1C1C1A] text-sm tracking-tight">{t.name}</p>
                    <p className="text-[#6B6B67] text-xs">{t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────────── */}
      <section className="py-28 bg-[#EEF2EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-4">
                Knowledge base
              </p>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-4xl sm:text-5xl font-bold text-[#1C1C1A] tracking-tight leading-tight"
              >
                Learn about IBS
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1.5 text-[#1C1C1A] font-semibold text-sm hover:text-[#4A7C59] transition-colors uppercase tracking-wider"
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
      <section className="py-32 bg-[#4A7C59]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-6">
            Early access
          </p>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5"
          >
            Take control of your IBS.
          </h2>
          <p className="text-white/75 text-lg mb-12 leading-relaxed max-w-md mx-auto">
            Join our waitlist for early access to the first truly
            personalized IBS management platform.
          </p>
          <div className="flex flex-col items-center gap-4">
            <WaitlistForm variant="cta" />
            <p className="text-white/60 text-sm">
              No spam · Unsubscribe anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
