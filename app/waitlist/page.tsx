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
    icon: "🎯",
    title: "Personalized IBS Protocol",
    description: "Get a custom management plan tailored to your specific IBS type and triggers.",
  },
  {
    icon: "💬",
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
    <div className="pt-16 min-h-screen bg-[#FAF7F2]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Form */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#4A7C59]/25 bg-[#4A7C59]/8 text-[#4A7C59] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A7C59] animate-pulse" />
              Limited spots available
            </div>
            <h1
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-5xl sm:text-6xl font-bold text-[#1C1C1A] tracking-tight leading-tight mb-5"
            >
              Join the<br />
              <span style={{ color: "#4A7C59" }}>IbisLabs</span> waitlist
            </h1>
            <p className="text-[#6B6B67] text-xl mb-10 leading-relaxed">
              Be first in line for the AI-powered IBS platform that actually
              personalizes to you.
            </p>

            {/* Form card */}
            <div className="bg-white border border-[#E8E4DC] rounded-2xl p-8 mb-5 shadow-sm">
              <h2 className="text-xs font-bold text-[#6B6B67] tracking-widest uppercase mb-5">
                Reserve your spot
              </h2>
              <WaitlistForm variant="full" />
            </div>

            <p className="text-xs text-[#6B6B67] text-center">
              Already{" "}
              <span className="font-bold text-[#1C1C1A]">2,400+ people</span>{" "}
              on the waitlist. No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Right: Perks */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-8">
              What you get
            </p>
            <div className="space-y-6 mb-10">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-4">
                  <div className="text-2xl w-11 h-11 flex items-center justify-center bg-white border border-[#E8E4DC] rounded-xl flex-shrink-0 shadow-sm">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1A] tracking-tight mb-0.5">{perk.title}</h3>
                    <p className="text-[#6B6B67] text-sm leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="bg-white border border-[#E8E4DC] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-1.5">
                  {["A", "B", "C", "D"].map((letter) => (
                    <div
                      key={letter}
                      className="w-7 h-7 rounded-full bg-[#4A7C59]/10 text-[#4A7C59] font-bold text-[10px] flex items-center justify-center border-2 border-white"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-[#1C1C1A]">
                  +2,400 others
                </span>
              </div>
              <p className="text-[#6B6B67] text-sm italic leading-relaxed">
                &ldquo;Finally a health app built specifically for IBS. I have been
                waiting for something like this for years.&rdquo;
              </p>
              <p className="text-[#6B6B67]/60 text-xs mt-2">— Early waitlist member</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-28 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-5 text-center">
            FAQ
          </p>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl font-bold text-[#1C1C1A] tracking-tight text-center mb-12"
          >
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-[#E8E4DC] rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#1C1C1A] tracking-tight mb-2 text-base">
                  {faq.q}
                </h3>
                <p className="text-[#6B6B67] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
