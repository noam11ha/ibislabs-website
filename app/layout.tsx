import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ibislabs.io"),
  title: {
    default: "IbisLabs — AI-Powered IBS Management",
    template: "%s | IbisLabs",
  },
  description:
    "IbisLabs helps you understand and manage your IBS. Take our free IBS type quiz, identify your triggers, and get personalized insights for lasting relief.",
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
  authors: [{ name: "IbisLabs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibislabs.io",
    siteName: "IbisLabs",
    title: "IbisLabs — AI-Powered IBS Management",
    description:
      "IbisLabs helps you understand and manage your IBS. Take our free IBS type quiz and get personalized insights for lasting relief.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IbisLabs — AI-Powered IBS Management",
    description:
      "IbisLabs helps you understand and manage your IBS with personalized, AI-powered insights.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
