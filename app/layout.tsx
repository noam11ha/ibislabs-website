import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ibislabs.io"),
  title: {
    default: "Ibis Labs — AI-Powered IBS Management",
    template: "%s | Ibis Labs",
  },
  description:
    "Ibis Labs helps you understand and manage your IBS. Take our free IBS type quiz, identify your triggers, and get personalized insights for lasting relief.",
  keywords: [
    "IBS",
    "IBS symptoms",
    "IBS treatment",
    "irritable bowel syndrome",
    "IBS quiz",
    "types of IBS",
    "IBS-C",
    "IBS-D",
    "IBS management",
    "gut health",
  ],
  authors: [{ name: "Ibis Labs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibislabs.io",
    siteName: "Ibis Labs",
    title: "Ibis Labs — AI-Powered IBS Management",
    description:
      "Ibis Labs helps you understand and manage your IBS. Take our free IBS type quiz and get personalized insights for lasting relief.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibis Labs — AI-Powered IBS Management",
    description:
      "Ibis Labs helps you understand and manage your IBS with personalized, AI-powered insights.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
