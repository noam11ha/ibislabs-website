import { permanentRedirect } from "next/navigation";

export default function LegacyHealthDataConsentPage() {
  permanentRedirect("/consumer-health-data-privacy-policy");
}
