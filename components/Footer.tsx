import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F3] border-t border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="mb-4 text-xl font-bold tracking-tight">
              <span className="text-[#2C2C2C]">Ibis</span><span className="text-[#2D5A27]">Labs</span>
            </div>
            <p className="text-[#555555] text-sm leading-relaxed max-w-md">
              Personalized gut-health protocols matched through a short quiz.
            </p>
            <p className="mt-4 text-xs text-[#777773]">
              Ibis Labs is not a medical provider. Our services and products are not intended to diagnose, treat, cure, or prevent disease.
            </p>
          </div>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-3 text-xs">
            <Link href="/privacy-policy" className="text-[#777773] hover:text-[#333333] transition-colors">Privacy Policy</Link>
            <Link href="/consumer-health-data-privacy-policy" className="text-[#777773] hover:text-[#333333] transition-colors">Consumer Health Data</Link>
            <Link href="/terms" className="text-[#777773] hover:text-[#333333] transition-colors">Terms of Use</Link>
          </nav>
        </div>
        <div className="border-t border-[#E8E2D9] mt-10 pt-6 text-xs text-[#777773]">
          © {new Date().getFullYear()} Ibis Labs Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
