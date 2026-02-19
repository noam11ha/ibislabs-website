import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
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
              <span className="text-[17px] font-black tracking-tight text-white">
                ibis<span style={{ color: "#00D4FF" }}>labs</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              AI-powered IBS management that helps you identify triggers,
              understand your subtype, and find lasting relief.
            </p>
            <p className="mt-5 text-xs text-zinc-700">
              © {new Date().getFullYear()} IbisLabs, Inc. All rights reserved.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-white font-black text-xs mb-5 uppercase tracking-widest">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/quiz" className="text-zinc-500 hover:text-[#00D4FF] text-sm transition-colors">
                  IBS Type Quiz
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-zinc-500 hover:text-[#00D4FF] text-sm transition-colors">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-500 hover:text-[#00D4FF] text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn links */}
          <div>
            <h3 className="text-white font-black text-xs mb-5 uppercase tracking-widest">
              Learn
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/what-is-ibs" className="text-zinc-500 hover:text-[#00D4FF] text-sm transition-colors">
                  What Is IBS?
                </Link>
              </li>
              <li>
                <Link href="/blog/types-of-ibs" className="text-zinc-500 hover:text-[#00D4FF] text-sm transition-colors">
                  Types of IBS
                </Link>
              </li>
              <li>
                <Link href="/blog/ibs-treatment-options" className="text-zinc-500 hover:text-[#00D4FF] text-sm transition-colors">
                  IBS Treatment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-700">
            IbisLabs is not a medical provider. Content is for informational
            purposes only. Always consult your doctor.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="text-zinc-700 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-700 hover:text-zinc-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
