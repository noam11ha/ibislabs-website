import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5" style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>
              <span style={{ color: "#ffffff" }}>Ibis</span><span style={{ color: "#7CAF8A" }}>Labs</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              AI-powered IBS management that helps you identify triggers,
              understand your subtype, and find lasting relief.
            </p>
            <p className="mt-5 text-xs text-zinc-600">
              © {new Date().getFullYear()} IbisLabs, Inc. All rights reserved.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-white font-bold text-xs mb-5 uppercase tracking-widest">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/quiz" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  IBS Type Quiz
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn links */}
          <div>
            <h3 className="text-white font-bold text-xs mb-5 uppercase tracking-widest">
              Learn
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/what-is-ibs" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  What Is IBS?
                </Link>
              </li>
              <li>
                <Link href="/blog/types-of-ibs" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  Types of IBS
                </Link>
              </li>
              <li>
                <Link href="/blog/ibs-treatment-options" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  IBS Treatment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            IbisLabs is not a medical provider. Content is for informational
            purposes only. Always consult your doctor.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
