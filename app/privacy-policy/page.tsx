import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { generalPrivacyPolicy } from "@/lib/legal-policies";

export const metadata: Metadata = {
  title: "Privacy Policy — Ibis Labs",
  description: "How Ibis Labs collects, uses, shares, and retains personal information.",
};

export default function PrivacyPolicyPage() {
  return <LegalDocument policy={generalPrivacyPolicy} />;
}
