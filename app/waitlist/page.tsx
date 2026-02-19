import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist — IbisLabs Early Access",
  description:
    "Join the IbisLabs waitlist for early access to the first AI-powered IBS management platform. Free for early adopters.",
};

const perks = [
  {
    icon: "⚡",
    title: "Early Access",
    description: "Be among the first to use IbisLabs before public launch.",
  },
  {
    icon: "💚",
    title: "Free Forever Plan",
    description: "Early adopters get a free tier locked in for life.",
  },
  {
    icon: "🎯",
    title: "Influence the Product",
    description: "Your feedback directly shapes the features we build.",
  },
  {
    icon: "🔬",
    title: "Beta Research Access",
    description: "Access to our IBS research digest and clinical insights.",
  },
];

const faqs = [
  {
    q: "Is IbisLabs free?",
    a: "Early waitlist members get lifetime access to our free tier. We plan to offer premium features at a subscription price after launch, but core functionality will always be free for early adopters.",
  },
  {
    q: "When will IbisLabs launch?",
    a: "We are currently in private beta and expect to open to all waitlist members within the next few months. We will notify you by email as soon as your access is ready.",
  },
  {
    q: "Is my health data private?",
    a: "Absolutely. IbisLabs is HIPAA-compliant. Your data is encrypted, never sold, and never shared with third parties without your explicit consent.",
  },
  {
    q: "Is IbisLabs a replacement for my doctor?",
    a: "No. IbisLabs is a management and tracking tool that helps you understand your symptoms and triggers. We encourage you to work with your gastroenterologist and share your IbisLabs reports with them.",
  },
];

export default function WaitlistPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#0A0A0F] dark-grid">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4FF]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Form */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#00D4FF]/25 bg-[#00D4FF]/5 text-[#00D4FF] rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              Limited spots available
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Join the<br />
              <span style={{ color: "#00D4FF" }}>IbisLabs</span> waitlist
            </h1>
            <p className="text-zinc-400 text-xl mb-10 leading-relaxed">
              Be first in line for the AI-powered IBS platform that actually
              personalizes to you. Free for early adopters.
            </p>

            {/* Form card */}
            <div className="bg-white rounded-lg p-8 mb-5">
              <h2 className="text-base font-black text-zinc-900 tracking-tight mb-5 uppercase tracking-widest text-xs text-zinc-500">
                Reserve your spot
              </h2>
              <WaitlistForm variant="full" />
            </div>

            <p className="text-xs text-zinc-600 text-center">
              Already{" "}
              <span className="font-bold text-zinc-400">2,400+ people</span>{" "}
              on the waitlist. No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Right: Perks */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-8">
              What you get
            </p>
            <div className="space-y-6 mb-10">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-4">
                  <div className="text-2xl w-11 h-11 flex items-center justify-center bg-white/[0.04] border border-white/[0.07] rounded-md flex-shrink-0">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-white tracking-tight mb-0.5">{perk.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div
              className="rounded-lg p-6 border"
              style={{ background: "rgba(0,212,255,0.04)", borderColor: "rgba(0,212,255,0.15)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-1.5">
                  {["A", "B", "C", "D"].map((letter) => (
                    <div
                      key={letter}
                      className="w-7 h-7 rounded-md bg-zinc-700 text-zinc-300 font-black text-[10px] flex items-center justify-center border border-[#0A0A0F]"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-zinc-300">
                  +2,400 others
                </span>
              </div>
              <p className="text-zinc-400 text-sm italic leading-relaxed">
                &ldquo;Finally a health app built specifically for IBS. I have been
                waiting for something like this for years.&rdquo;
              </p>
              <p className="text-zinc-600 text-xs mt-2">— Early waitlist member</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-28 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-5 text-center">
            FAQ
          </p>
          <h2 className="text-4xl font-black text-white tracking-tight text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white/[0.03] border border-white/[0.07] rounded-lg p-6"
              >
                <h3 className="font-black text-white tracking-tight mb-2 text-base">
                  {faq.q}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
