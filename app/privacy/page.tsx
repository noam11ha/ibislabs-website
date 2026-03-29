import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — IbisLabs",
  description:
    "Learn how Ibis Labs collects, uses, and protects your personal and health data.",
};

const lastUpdated = "March 22, 2026";

type ContentItem = {
  heading?: string;
  text?: string;
  bold?: boolean;
  list?: string[];
  links?: { icon: string; label: string; href: string }[];
};

type Section = {
  id: string;
  title: string;
  content: ContentItem[];
};

const sections: Section[] = [
  {
    id: "scope",
    title: "Scope",
    content: [
      {
        text: "This Privacy Policy applies to information we collect through:",
        list: [
          "the Ibis Labs mobile application;",
          "our website and landing pages;",
          "your communications with us;",
          "integrations or permissions you choose to enable, including Apple Health where available; and",
          "other interactions with our Services.",
        ],
      },
      {
        text: "This Privacy Policy does not apply to third-party websites, apps, services, or products that are not owned or controlled by Ibis Labs.",
      },
    ],
  },
  {
    id: "nature-of-service",
    title: "Important note about the nature of the service",
    content: [
      {
        text: "Ibis Labs is offered as a consumer wellness and informational service. Unless we expressly state otherwise in a separate written notice or agreement, this Privacy Policy is not a HIPAA Notice of Privacy Practices, and the Services are not offered as a covered healthcare provider, health plan, or healthcare clearinghouse service.",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: [
      {
        heading: "A. Information You Provide Directly",
        text: "We may collect information you provide to us, such as:",
        list: [
          "name, email address, login credentials, and account details;",
          "age range or date of birth, if provided;",
          "symptom logs and digestive health information;",
          "bowel movement entries, stool-related logs, urgency, pain, bloating, and similar wellness inputs;",
          "food, meal, ingredient, hydration, and nutrition entries;",
          "stress, mood, sleep, lifestyle, menstrual or cycle-related entries, if you choose to provide them;",
          "journal notes, free-text entries, responses to assessments, and preferences;",
          "customer support messages, survey responses, and feedback;",
          "any other information you choose to submit through the Services.",
        ],
      },
      {
        heading: "B. Information Collected Automatically",
        text: "When you use the Services, we may automatically collect:",
        list: [
          "device identifiers and app instance identifiers;",
          "device type, operating system, app version, language, and time zone;",
          "log data, crash data, diagnostics, and performance information;",
          "feature usage, session activity, screen views, and interaction data;",
          "approximate geolocation derived from IP address;",
          "referral data, campaign data, or install attribution data where enabled.",
        ],
      },
      {
        heading: "C. Information From Apple Health or Other Device Integrations",
        text: "If you choose to connect Apple Health or another supported platform, we may receive the categories of data you explicitly authorize, such as:",
        list: [
          "activity or movement data;",
          "sleep-related data;",
          "heart rate or related wellness metrics;",
          "other health or fitness data you choose to share.",
        ],
      },
      {
        text: "You control these permissions through your device and app settings. You may revoke access at any time.",
      },
      {
        heading: "D. Information From Third Parties",
        text: "We may receive limited information from service providers and third parties such as:",
        list: [
          "authentication providers;",
          "app analytics and crash-reporting providers;",
          "customer support tools;",
          "subscription and payment platforms;",
          "marketing attribution providers; and",
          "anti-fraud and security vendors.",
        ],
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    content: [
      {
        text: "We may use information we collect to:",
        list: [
          "create and manage your account;",
          "provide, operate, maintain, and secure the Services;",
          "enable symptom tracking, personalized wellness features, insights, and recommendations;",
          "synchronize and display data you choose to connect through authorized integrations;",
          "improve the quality, usability, safety, and reliability of the Services;",
          "troubleshoot bugs, monitor performance, and prevent misuse or fraud;",
          "communicate with you about your account, updates, support issues, or service notices;",
          "send onboarding, transactional, and service-related communications;",
          "send marketing communications where permitted by law and where you have not opted out;",
          "comply with legal obligations, enforce our agreements, and protect our rights;",
          "create de-identified and aggregated analytics for internal product improvement, reporting, forecasting, and business operations; and",
          "evaluate overall product usage trends and feature demand in a way that does not identify you personally.",
        ],
      },
    ],
  },
  {
    id: "health-wellness-information",
    title: "How we use health and wellness information",
    content: [
      {
        text: "We treat digestive, symptom, food, stress, sleep, cycle, and similar wellness information with heightened care.",
      },
      {
        text: "We use health and wellness information to:",
        list: [
          "provide tracking, logging, insights, and personalization features;",
          "improve the operation and accuracy of our wellness features;",
          "support customer service and technical troubleshooting where needed;",
          "maintain service safety, reliability, and fraud prevention; and",
          "comply with legal obligations.",
        ],
      },
      {
        text: "We do not use HealthKit data, and we do not permit third parties to use HealthKit data, for advertising, marketing, or use-based data mining purposes.",
        bold: true,
      },
      {
        text: "We do not sell HealthKit data.",
        bold: true,
      },
      {
        text: "As a general product policy, we also do not use your health or symptom data for targeted advertising or behavioral ad profiling.",
      },
    ],
  },
  {
    id: "how-we-share-information",
    title: "How we share information",
    content: [
      {
        heading: "A. Service Providers",
        text: "We may share information with vendors that help us operate the Services, such as providers of:",
        list: [
          "cloud hosting and infrastructure;",
          "data storage and databases;",
          "authentication;",
          "customer support;",
          "analytics and diagnostics;",
          "email, SMS, or notification delivery;",
          "subscription management and payment support;",
          "security, fraud prevention, and compliance tools.",
        ],
      },
      {
        text: "These providers are permitted to access information only as needed to perform services for us and subject to appropriate contractual restrictions.",
      },
      {
        heading: "B. Legal and Safety Reasons",
        text: "We may disclose information where we believe disclosure is necessary to:",
        list: [
          "comply with applicable law, regulation, legal process, or governmental request;",
          "enforce our Terms or other agreements;",
          "protect the rights, safety, or property of Ibis Labs, our users, or others;",
          "detect, investigate, or prevent fraud, security incidents, or illegal activity.",
        ],
      },
      {
        heading: "C. Corporate Transactions",
        text: "We may disclose information in connection with a merger, acquisition, financing, asset sale, reorganization, bankruptcy, or similar corporate transaction.",
      },
      {
        heading: "D. With Your Direction or Consent",
        text: "We may disclose information to other parties where you direct us to do so or where you otherwise consent.",
      },
    ],
  },
  {
    id: "what-we-do-not-do",
    title: "What we do not do",
    content: [
      {
        text: "We do not:",
        list: [
          "sell your HealthKit data;",
          "use HealthKit data for advertising, marketing, or use-based data mining;",
          "knowingly disclose health or symptom data to data brokers;",
          "knowingly use your health or symptom data to build targeted advertising audiences.",
        ],
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data retention",
    content: [
      {
        text: "We retain information for as long as reasonably necessary to:",
        list: [
          "provide the Services;",
          "maintain your account;",
          "comply with legal, tax, accounting, security, and enforcement obligations;",
          "resolve disputes; and",
          "enforce our agreements.",
        ],
      },
      {
        text: "Retention periods vary depending on the category of information and the reason we collected it. When information is no longer reasonably necessary, we will delete it, de-identify it, or securely archive it as appropriate.",
      },
      {
        text: "If you delete your account, we will delete or de-identify your personal information unless we are legally required or permitted to retain certain information.",
      },
    ],
  },
  {
    id: "your-choices-and-rights",
    title: "Your choices and rights",
    content: [
      {
        text: "Depending on your location and applicable law, you may have rights regarding your personal information, such as the right to:",
        list: [
          "access certain personal information we hold about you;",
          "correct or update certain account information;",
          "request deletion of your personal information;",
          "withdraw consent where processing is based on consent;",
          "opt out of marketing emails by using the unsubscribe link;",
          "manage push notifications through your device settings;",
          "revoke Apple Health or similar integration permissions in your device settings.",
        ],
      },
      {
        text: "You may also request account deletion by using the in-app deletion feature, where available, or by contacting us at support@ibislabs.io.",
      },
      {
        text: "We may need to verify your identity before processing certain requests.",
      },
    ],
  },
  {
    id: "in-app-account-deletion",
    title: "In-app account deletion",
    content: [
      {
        text: "If you create an account through the Services, you may initiate deletion of your account from within the app or by contacting us at support@ibislabs.io. Some information may be retained where required or permitted by law, such as information needed for security, fraud prevention, compliance, dispute resolution, or financial recordkeeping.",
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    content: [
      {
        text: "We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. However, no system is completely secure, and we cannot guarantee absolute security.",
      },
      {
        text: "You are responsible for maintaining the confidentiality of your credentials and for using the Services in a secure manner.",
      },
    ],
  },
  {
    id: "children",
    title: "Children",
    content: [
      {
        text: "The Services are not directed to children under 18, and we do not knowingly collect personal information from children under 18 without appropriate authorization. If you believe a child has provided us personal information, contact us at support@ibislabs.io, and we will take appropriate steps.",
      },
    ],
  },
  {
    id: "international-users",
    title: "International users",
    content: [
      {
        text: "Ibis Labs is operated from the United States. If you use the Services from another jurisdiction, you understand that your information may be transferred to, stored in, and processed in jurisdictions that may have different data protection laws than your own.",
      },
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to this privacy policy",
    content: [
      {
        text: "We may update this Privacy Policy from time to time. When we do, we will update the \"Last Updated\" date and, where appropriate, provide additional notice within the Services or by other means.",
      },
      {
        text: "Your continued use of the Services after an updated Privacy Policy becomes effective means that the updated version applies going forward.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    content: [
      {
        text: "If you have questions or requests regarding this Privacy Policy, contact us at:",
        links: [
          { icon: "📧", label: "support@ibislabs.io", href: "mailto:support@ibislabs.io" },
          { icon: "🌐", label: "ibislabs.io", href: "https://www.ibislabs.io" },
        ],
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-5">
            Legal
          </p>
          <h1
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-5xl sm:text-6xl font-bold text-[#1C1C1A] tracking-tight leading-tight mb-6"
          >
            Privacy Policy
          </h1>
          <p className="text-[#6B6B67] text-lg leading-relaxed max-w-2xl">
            This Privacy Policy explains how Ibis Labs collects, uses, discloses, stores,
            and protects information when you use the Ibis Labs mobile application, website,
            and related services. By using the Services, you acknowledge that you have read
            and understood this Privacy Policy.
          </p>
          <p className="text-xs text-[#6B6B67]/60 mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Table of contents */}
        <div className="bg-white border border-[#E8E4DC] rounded-2xl p-6 shadow-sm mb-12">
          <h2 className="text-xs font-bold text-[#6B6B67] tracking-widest uppercase mb-4">
            Contents
          </h2>
          <ol className="space-y-2">
            {sections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-[#4A7C59] hover:underline underline-offset-2"
                >
                  {i + 1}. {section.title.charAt(0).toUpperCase() + section.title.slice(1)}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Policy sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white border border-[#E8E4DC] rounded-2xl p-8 shadow-sm scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold text-[#4A7C59]/50 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-2xl font-bold text-[#1C1C1A] tracking-tight"
                >
                  {section.title.charAt(0).toUpperCase() + section.title.slice(1)}
                </h2>
              </div>
              <div className="space-y-5">
                {section.content.map((item, j) => (
                  <div key={j}>
                    {item.heading && (
                      <h3 className="font-bold text-[#1C1C1A] tracking-tight mb-1.5 text-base">
                        {item.heading}
                      </h3>
                    )}
                    {item.text && (
                      <p
                        className={
                          item.bold
                            ? "text-sm font-semibold text-[#1C1C1A]"
                            : "text-[#6B6B67] text-sm leading-relaxed"
                        }
                      >
                        {item.text}
                      </p>
                    )}
                    {item.list && (
                      <ul className="mt-3 space-y-2">
                        {item.list.map((li, k) => (
                          <li key={k} className="flex items-start gap-2.5 text-[#6B6B67] text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7C59] mt-1.5 flex-shrink-0" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.links && (
                      <div className="mt-4 space-y-2">
                        {item.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 text-sm text-[#4A7C59] hover:underline underline-offset-2"
                          >
                            <span>{link.icon}</span>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#6B6B67] leading-relaxed">
            This Privacy Policy may be updated periodically. We will notify you of
            material changes via an in-app notice or other appropriate means before they take effect.
          </p>
        </div>
      </div>
    </div>
  );
}
