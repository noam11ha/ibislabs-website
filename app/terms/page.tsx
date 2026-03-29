import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — IbisLabs",
  description:
    "Read the Ibis Labs Terms of Use. These terms govern your use of the Ibis Labs app and related services.",
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
    id: "eligibility",
    title: "Eligibility",
    content: [
      {
        text: "You must be at least 18 years old and legally capable of entering into a binding agreement to use the Services. By using the Services, you represent and warrant that you meet these requirements.",
      },
    ],
  },
  {
    id: "wellness-service-not-medical-care",
    title: "Wellness service only; not medical care",
    content: [
      {
        text: "Ibis Labs is a wellness, educational, and informational platform. The Services do not provide medical care, medical advice, diagnosis, treatment, or emergency services.",
      },
      {
        text: "No content, tracking feature, recommendation, insight, guided session, pattern detection, symptom summary, score, or algorithmic output provided through the Services is intended to replace professional medical advice, diagnosis, or treatment from a licensed healthcare provider.",
      },
      {
        text: "You should always consult a qualified healthcare professional regarding:",
        list: [
          "persistent or severe symptoms;",
          "possible medication or supplement interactions;",
          "pregnancy or breastfeeding questions;",
          "significant dietary changes;",
          "mental health concerns;",
          "decisions about diagnosis or treatment.",
        ],
      },
      {
        text: "Do not ignore or delay seeking professional medical advice because of information from the Services.",
      },
      {
        heading: "Emergency Notice",
        text: "Do not use the Services for emergencies. If you think you may have a medical emergency, call 911 or your local emergency number immediately and seek emergency care.",
        bold: true,
      },
    ],
  },
  {
    id: "no-healthcare-provider-relationship",
    title: "No healthcare provider relationship",
    content: [
      {
        text: "Your use of the Services does not create a physician-patient, therapist-patient, dietitian-patient, fiduciary, or other professional relationship between you and Ibis Labs or between you and any advisor, contractor, or content contributor associated with Ibis Labs.",
      },
    ],
  },
  {
    id: "description-of-the-services",
    title: "Description of the services",
    content: [
      {
        text: "The Services may include tools and content such as:",
        list: [
          "symptom and digestive health tracking;",
          "bowel movement and stool logging;",
          "food, ingredient, hydration, sleep, stress, mood, and cycle-related tracking;",
          "guided wellness sessions and audio content;",
          "trend summaries and insights;",
          "personalized or semi-personalized wellness suggestions;",
          "educational resources and habit-support features.",
        ],
      },
      {
        text: "These features are for general wellness and informational purposes only. They may be incomplete, inaccurate, unavailable, delayed, or unsuitable for your circumstances.",
      },
    ],
  },
  {
    id: "user-responsibilities",
    title: "User responsibilities",
    content: [
      {
        text: "You are solely responsible for:",
        list: [
          "the accuracy of the information you provide;",
          "decisions you make based on the Services;",
          "consulting a healthcare professional where appropriate;",
          "reviewing supplement labels, warnings, and instructions independently;",
          "stopping use of the Services if use causes concern or discomfort.",
        ],
      },
      {
        text: "You agree not to rely on the Services as the sole basis for healthcare, medication, supplement, or treatment decisions.",
      },
    ],
  },
  {
    id: "accounts-and-credentials",
    title: "Accounts and credentials",
    content: [
      {
        text: "You may need to create an account to access some features.",
      },
      {
        text: "You agree to:",
        list: [
          "provide accurate and current information;",
          "keep your credentials confidential;",
          "notify us promptly of unauthorized account access or suspected security incidents;",
          "use only your own account unless expressly authorized otherwise.",
        ],
      },
      {
        text: "You are responsible for activity that occurs under your account.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: [
      {
        text: "You agree not to:",
        list: [
          "use the Services in violation of applicable law;",
          "use the Services for emergency or crisis response;",
          "submit false, misleading, or fraudulent information;",
          "interfere with or disrupt the Services or related systems;",
          "reverse engineer, scrape, copy, or exploit the Services except as permitted by law;",
          "upload or transmit malware or harmful code;",
          "impersonate another person or misrepresent affiliation;",
          "use the Services to develop or benchmark a competing product in a prohibited manner;",
          "submit unlawful, defamatory, infringing, abusive, or harmful content.",
        ],
      },
    ],
  },
  {
    id: "user-content",
    title: "User content",
    content: [
      {
        text: "You may submit logs, notes, comments, messages, feedback, and other content (\"User Content\") through the Services.",
      },
      {
        text: "You retain ownership of your User Content, but you grant Ibis Labs a worldwide, non-exclusive, royalty-free license to host, store, reproduce, process, analyze, adapt, and display User Content as necessary to operate, secure, improve, and provide the Services, and as otherwise described in the Privacy Policy.",
      },
      {
        text: "You represent and warrant that you have the rights needed to provide your User Content and that it does not violate law or third-party rights.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    content: [
      {
        text: "Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.",
      },
    ],
  },
  {
    id: "apple-health-integrations",
    title: "Apple Health and similar integrations",
    content: [
      {
        text: "If you choose to connect Apple Health or another supported data source, you authorize us to access the categories of data you approve through those platforms.",
      },
      {
        text: "You understand that:",
        list: [
          "those platforms are controlled by third parties, not Ibis Labs;",
          "data supplied through those integrations may be inaccurate, incomplete, or delayed;",
          "revoking permissions may reduce app functionality.",
        ],
      },
    ],
  },
  {
    id: "subscriptions-and-billing",
    title: "Subscriptions and billing",
    content: [
      {
        text: "If you purchase a subscription or in-app purchase:",
        list: [
          "prices, features, and billing periods will be disclosed at purchase;",
          "subscriptions may automatically renew unless canceled in accordance with the applicable store's rules;",
          "billing, cancellation, and refunds may be handled by Apple or another platform, subject to that platform's terms and policies;",
          "we may change prices prospectively as permitted by law and platform rules.",
        ],
      },
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    content: [
      {
        text: "If you provide ideas, suggestions, or feedback, you grant Ibis Labs a perpetual, irrevocable, worldwide, royalty-free right to use and incorporate that feedback without restriction or compensation.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: [
      {
        text: "The Services, including their software, design, content, branding, graphics, audio, compilations, and other materials, are owned by or licensed to Ibis Labs and are protected by intellectual property laws.",
      },
      {
        text: "Subject to these Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to use the Services for your personal, non-commercial use.",
      },
    ],
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    content: [
      {
        text: "The Services may link to or rely on third-party products, sites, tools, integrations, or services. Ibis Labs is not responsible for the availability, content, policies, accuracy, or practices of third parties.",
      },
    ],
  },
  {
    id: "no-guarantee-of-results",
    title: "No guarantee of results",
    content: [
      {
        text: "We do not guarantee that use of the Services will:",
        list: [
          "improve symptoms;",
          "identify the true cause of symptoms;",
          "produce accurate trigger detection;",
          "improve quality of life;",
          "lead to any specific wellness or health outcome.",
        ],
      },
      {
        text: "Results vary by person. Some users may experience no benefit.",
      },
    ],
  },
  {
    id: "disclaimer-of-warranties",
    title: "Disclaimer of warranties",
    content: [
      {
        text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED "AS IS," "AS AVAILABLE," AND "WITH ALL FAULTS."',
        bold: true,
      },
      {
        text: "IBIS LABS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, ACCURACY, RELIABILITY, SECURITY, AND AVAILABILITY.",
        bold: true,
      },
      {
        text: "WE DO NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, OR THAT ANY OUTPUTS, INSIGHTS, OR RECOMMENDATIONS WILL BE ACCURATE OR APPROPRIATE FOR YOU.",
        bold: true,
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    content: [
      {
        text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IBIS LABS AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, LICENSORS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES.",
        bold: true,
      },
      {
        text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE TOTAL AGGREGATE LIABILITY OF IBIS LABS FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO IBIS LABS FOR THE SERVICES IN THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM; OR (B) US $100.",
        bold: true,
      },
      {
        text: "NOTHING IN THESE TERMS EXCLUDES LIABILITY THAT CANNOT BE EXCLUDED UNDER APPLICABLE LAW.",
        bold: true,
      },
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: [
      {
        text: "You agree to defend, indemnify, and hold harmless Ibis Labs and its affiliates, officers, directors, employees, contractors, licensors, and service providers from and against claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to:",
        list: [
          "your use or misuse of the Services;",
          "your violation of these Terms;",
          "your violation of applicable law;",
          "your User Content; or",
          "your infringement of third-party rights.",
        ],
      },
    ],
  },
  {
    id: "suspension-and-termination",
    title: "Suspension and termination",
    content: [
      {
        text: "We may suspend, limit, or terminate access to the Services at any time if we believe:",
        list: [
          "you violated these Terms;",
          "your use creates risk for us or other users;",
          "suspension is needed for legal, security, or operational reasons.",
        ],
      },
      {
        text: "You may stop using the Services at any time. If you want to delete your account, use the in-app deletion feature where available or contact us.",
      },
    ],
  },
  {
    id: "changes-to-services-or-terms",
    title: "Changes to the services or terms",
    content: [
      {
        text: "We may modify, suspend, or discontinue any part of the Services at any time. We may also update these Terms from time to time. If we make material changes, we may provide notice through the app, website, email, or other reasonable means.",
      },
      {
        text: "Your continued use of the Services after updated Terms become effective means the updated Terms apply going forward.",
      },
    ],
  },
  {
    id: "governing-law-and-venue",
    title: "Governing law and venue",
    content: [
      {
        text: "These Terms are governed by the laws of the State of [State], without regard to conflict-of-law principles.",
      },
      {
        text: "Unless applicable law requires otherwise, any dispute arising out of or relating to these Terms or the Services shall be brought exclusively in the state or federal courts located in [County, State], and you consent to their jurisdiction and venue.",
      },
    ],
  },
  {
    id: "severability-waiver-assignment",
    title: "Severability; waiver; assignment",
    content: [
      {
        text: "If any provision of these Terms is found unenforceable, the remaining provisions will remain in effect.",
      },
      {
        text: "Our failure to enforce any provision is not a waiver.",
      },
      {
        text: "You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, financing, reorganization, or sale of assets.",
      },
    ],
  },
];

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-[#6B6B67] text-lg leading-relaxed max-w-2xl">
            These Terms of Use govern your use of the Ibis Labs mobile application,
            website, content, features, and related services. By accessing or using
            the Services, you agree to these Terms.
          </p>
          <p className="text-xs text-[#6B6B67]/60 mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Medical disclaimer badge */}
        <div className="bg-white border border-[#E8E4DC] rounded-2xl p-6 shadow-sm mb-12 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#4A7C59]/10 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-[#4A7C59]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-[#1C1C1A] tracking-tight mb-1">
              Not a medical service
            </h2>
            <p className="text-[#6B6B67] text-sm leading-relaxed">
              Ibis Labs is designed for wellness and informational purposes only. It does
              not provide medical advice, diagnosis, or treatment. Always consult a
              qualified healthcare provider for medical decisions.
            </p>
          </div>
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

        {/* Terms sections */}
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
                      <div className="space-y-2">
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
            These Terms of Use may be updated periodically. We will notify you of
            material changes via an in-app notice or other appropriate means before they take effect.
          </p>
        </div>
      </div>
    </div>
  );
}
