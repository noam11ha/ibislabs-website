import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ibislabs.io"),
  title: {
    default: "Adjust — Fiber made easy",
    template: "%s | Adjust",
  },
  description:
    "Adjust is a gut-health brand designed for men. Our first product, Foundation Fiber, is a daily fiber blend in development.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibislabs.io",
    siteName: "Adjust",
    title: "Adjust — Fiber made easy",
    description: "A daily fiber blend designed for men. In development.",
    images: [{ url: "/product.jpg", width: 1536, height: 1024, alt: "Adjust Foundation Fiber concept pouch and stick pack" }],
  },
  twitter: { card: "summary_large_image", images: ["/product.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="bar">
            <Link className="wordmark" href="/" aria-label="Adjust, home">Adjust</Link>
            <nav className="site-nav" aria-label="Main">
              <Link href="/#product">Product</Link>
              <Link href="/#formula">Formula</Link>
              <Link href="/#evidence">Science</Link>
              <Link href="/#faq">FAQ</Link>
              <Link className="btn outline" href="/#contact">Get in touch</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="wrap foot">
            <Link className="wordmark" href="/" aria-label="Adjust, home">Adjust</Link>
            <ul className="foot-links">
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
            <div className="foot-meta">
              <p>© {new Date().getFullYear()} Ibis Labs Ltd. Adjust is a brand of Ibis Labs Ltd. Adjust is in development and is not yet available for purchase. Packaging shown is a concept.</p>
              <p>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
