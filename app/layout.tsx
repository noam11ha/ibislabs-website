import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ibislabs.io"),
  title: {
    default: "Ibis Labs — Foundation Fiber, launching soon",
    template: "%s | Ibis Labs",
  },
  description:
    "Foundation Fiber by Ibis Labs: daily gut support for men, 30 daily sticks. Launching soon. Join the list to hear first.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibislabs.io",
    siteName: "Ibis Labs",
    title: "Ibis Labs — Launching soon",
    description: "Foundation Fiber: daily gut support for men. Join the list to hear first.",
    images: [{ url: "/product.jpg", width: 1536, height: 1024, alt: "Foundation Fiber pouch and stick pack" }],
  },
  twitter: { card: "summary_large_image", images: ["/product.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#0d0e0f",
  viewportFit: "cover",
};

const tickerItems = [
  "Launching soon",
  "3rd party tested",
  "Made in the U.S.",
  "Kosher",
  "Keto-friendly",
  "Low FODMAP",
  "Non-GMO",
  "Vegan",
  "30 daily sticks",
  "Unflavored",
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track label">
            {[0, 1].map((group) => (
              <div className="ticker-group" key={group}>
                {tickerItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <header className="nav band">
          <div className="nav-bar wrap">
            <Link className="brand" href="/">IBIS LABS</Link>
            <nav className="nav-links" aria-label="Main">
              <Link className="nav-cta" href="/#join">Get notified</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="band">
          <div className="wrap foot">
            <p>© {new Date().getFullYear()} Ibis Labs</p>
            <ul className="foot-links">
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
