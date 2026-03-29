import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F3] border-t border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5" style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>
              <span style={{ color: "#2C2C2C" }}>Ibis</span><span style={{ color: "#2D5A27" }}>Labs</span>
            </div>
            <p className="text-[#555555] text-sm leading-relaxed max-w-xs">
              AI-powered IBS management that helps you identify triggers,
              understand your subtype, and find lasting relief.
            </p>
            <p className="mt-5 text-xs text-[#9A9A96]">
              © {new Date().getFullYear()} IbisLabs, Inc. All rights reserved.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-[#2C2C2C] font-bold text-xs mb-5 uppercase tracking-widest">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/quiz" className="text-[#555555] hover:text-[#2C2C2C] text-sm transition-colors">
                  IBS Type Quiz
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-[#555555] hover:text-[#2C2C2C] text-sm transition-colors">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#555555] hover:text-[#2C2C2C] text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn links */}
          <div>
            <h3 className="text-[#2C2C2C] font-bold text-xs mb-5 uppercase tracking-widest">
              Learn
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/what-is-ibs" className="text-[#555555] hover:text-[#2C2C2C] text-sm transition-colors">
                  What Is IBS?
                </Link>
              </li>
              <li>
                <Link href="/blog/types-of-ibs" className="text-[#555555] hover:text-[#2C2C2C] text-sm transition-colors">
                  Types of IBS
                </Link>
              </li>
              <li>
                <Link href="/blog/ibs-treatment-options" className="text-[#555555] hover:text-[#2C2C2C] text-sm transition-colors">
                  IBS Treatment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E8E2D9] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#9A9A96]">
            IbisLabs is not a medical provider. Content is for informational
            purposes only. Always consult your doctor.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="text-[#9A9A96] hover:text-[#555555] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#9A9A96] hover:text-[#555555] transition-colors">
              Terms of Service
            </Link>
            <Link href="/health-data-consent" className="text-[#9A9A96] hover:text-[#555555] transition-colors">
              Health Data Consent
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
