import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ibis Labs collects, uses and protects information on ibislabs.io.",
};

const toc: [string, string][] = [
  ["p-collect", "What we collect"],
  ["p-use", "How we use it"],
  ["p-share", "Who we share it with"],
  ["p-rights", "Your choices"],
  ["p-contact", "Contact"],
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero band">
        <div className="wrap">
          <h1>Privacy Policy</h1>
          <p className="lede">
            Last updated November 7, 2026. This policy explains what information Ibis Labs collects through
            ibislabs.io and our waitlist, and how we use and protect it.
          </p>
        </div>
      </section>
      <section className="legal band">
        <div className="wrap">
          <ul className="legal-toc" aria-label="Sections">
            {toc.map(([id, label]) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
          <div className="legal-body">
            <h2 id="p-scope">1. Scope</h2>
            <p>
              This Privacy Policy applies to information we collect through our website at ibislabs.io, our
              pre-launch waitlist, the emails we send, and your communications with us. It does not apply to
              third-party websites or services that we do not own or control.
            </p>

            <h2 id="p-collect">2. Information we collect</h2>
            <p><strong>Information you give us.</strong> When you join our waitlist, we collect your email address. If you contact us, we collect the information you include in your message.</p>
            <p><strong>Information collected automatically.</strong> Like most websites, our hosting provider automatically records basic technical information when you visit, such as your IP address, browser type, device type, the pages you request and the date and time of your visit. This is used to deliver and secure the website.</p>
            <p>We do not ask for, and you should not send us, health information through the website or waitlist.</p>

            <h2 id="p-use">3. How we use information</h2>
            <ul>
              <li>to add you to our waitlist and tell you when our products launch;</li>
              <li>to send related updates about Ibis Labs, which you can unsubscribe from at any time;</li>
              <li>to respond to your messages and requests;</li>
              <li>to operate, maintain, secure and improve the website;</li>
              <li>to comply with legal obligations and enforce our Terms of Use.</li>
            </ul>

            <h2 id="p-share">4. How we share information</h2>
            <p>We do not sell your personal information and we do not share it for cross-context behavioral advertising.</p>
            <p>We share information only with service providers that help us run Ibis Labs, such as our website hosting provider and our email delivery and email inbox providers. They may use it only to provide their services to us. We may also disclose information if required by law, to protect our rights or the safety of others, or as part of a merger, acquisition or sale of assets, in which case this policy will continue to apply to your information.</p>

            <h2 id="p-retention">5. Data retention</h2>
            <p>We keep your email address while you remain on our list. If you unsubscribe or ask us to delete it, we will remove it, except for any record we must keep to respect your opt-out or to meet legal obligations. Technical logs are kept for a limited period by our hosting provider.</p>

            <h2 id="p-rights">6. Your choices and rights</h2>
            <p>You can unsubscribe from our emails at any time using the link in any email or by contacting us. Depending on where you live, you may also have the right to access, correct or delete the personal information we hold about you, to object to or restrict certain processing, and to receive a copy of your information. To make a request, email us at the address below. We will not discriminate against you for exercising these rights.</p>

            <h2 id="p-security">7. Security</h2>
            <p>We use reasonable technical and organizational measures to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>

            <h2 id="p-children">8. Children</h2>
            <p>Our website and products are not directed to anyone under 18, and we do not knowingly collect personal information from children. If you believe a child has given us information, contact us and we will delete it.</p>

            <h2 id="p-international">9. International users</h2>
            <p>We and our service providers may process information in the United States and other countries, which may have different data protection laws than where you live. Where required, we use appropriate safeguards for these transfers.</p>

            <h2 id="p-changes">10. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new date. If we make material changes, we will let you know by email or on the website.</p>

            <h2 id="p-contact">11. Contact us</h2>
            <p>Ibis Labs Ltd, a company incorporated in Israel, is responsible for the information described in this policy. Questions or requests about your privacy can be sent to <a href="mailto:support@ibislabs.io">support@ibislabs.io</a> or by mail to Ibis Labs Ltd, 56 Hagalil St., Bat Hefer, Israel.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
