import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { consumerHealthDataPolicy } from "@/lib/legal-policies";

export const metadata: Metadata = {
  title: "Consumer Health Data Privacy Policy — Ibis Labs",
  description: "How Ibis Labs collects, uses, shares, and deletes consumer health data.",
};

export default function ConsumerHealthDataPrivacyPolicyPage() {
  return <LegalDocument policy={consumerHealthDataPolicy} />;
}
