export type PolicyItem = {
  heading?: string;
  text?: string;
  list?: string[];
  bold?: boolean;
};

export type PolicySection = {
  id: string;
  title: string;
  items: PolicyItem[];
};

export type LegalPolicy = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: PolicySection[];
};

const company = "Ibis Labs Ltd. (Israeli company registration number 517380481), Ben Yehuda 49, Tel Aviv, Israel 6334110";

export const generalPrivacyPolicy: LegalPolicy = {
  title: "Privacy Policy",
  description: "This policy explains how Ibis Labs Ltd. collects, uses, shares, and retains personal information through ibislabs.io, quiz.ibislabs.io, our online store, and communications with us. Our separate Consumer Health Data Privacy Policy applies specifically to quiz answers and other consumer health data.",
  lastUpdated: "July 24, 2026",
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      items: [
        { text: `${company} is responsible for the personal information described in this policy.` },
        { text: "Ibis Labs is a consumer wellness and dietary-supplement company. We are not a healthcare provider, and this policy is not a HIPAA Notice of Privacy Practices." },
      ],
    },
    {
      id: "scope",
      title: "Scope",
      items: [
        { text: "This policy applies when you visit our websites, take our quiz, purchase or inquire about a product, join a waitlist, or communicate with us." },
        { text: "For digestive-health quiz answers, inferred gut profiles, and related health information, also read our Consumer Health Data Privacy Policy at ibislabs.io/consumer-health-data-privacy-policy." },
        { text: "Third-party sites and services have their own privacy practices. For example, Shopify handles information on our store and checkout pages under its own notices as well as our instructions." },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      items: [
        { heading: "Information you provide", list: [
          "contact details, such as your name and email address;",
          "quiz answers and resulting gut profile information, described in our Consumer Health Data Privacy Policy;",
          "order, delivery, payment-status, refund, and customer-service information;",
          "waitlist choices, feedback, and messages you send us.",
        ] },
        { heading: "Information collected automatically", list: [
          "a random quiz session identifier and quiz progress events;",
          "browser and device information, IP address, user-agent string, and security logs;",
          "referral information, including UTM campaign parameters and a Meta click identifier when present;",
          "essential browser storage used to keep a quiz session and campaign attribution together.",
        ] },
        { heading: "Information from other parties", list: [
          "order and transaction information from Shopify and our payment provider;",
          "fulfillment and delivery updates from Supliful and shipping providers;",
          "advertising referral and measurement information from Meta when optional measurement is enabled;",
          "fraud-prevention, security, and technical information from service providers.",
        ] },
      ],
    },
    {
      id: "how-we-use-information",
      title: "How we use information",
      items: [
        { list: [
          "provide the quiz, generate a gut profile, and match a protocol to the profile;",
          "process orders, payments, fulfillment, shipping, returns, and refunds;",
          "respond to questions and privacy requests;",
          "send service messages and, where permitted, marketing messages you can unsubscribe from;",
          "measure funnel performance and understand where people leave the quiz;",
          "protect our services, prevent fraud, troubleshoot, and maintain reliability;",
          "comply with legal, tax, accounting, and enforcement obligations;",
          "create aggregated or de-identified statistics for internal analysis and product improvement.",
        ] },
      ],
    },
    {
      id: "cookies-and-measurement",
      title: "Browser storage and advertising measurement",
      items: [
        { text: "The quiz uses session storage for a random session identifier and campaign parameters. This storage normally ends when you close the browser tab or session." },
        { text: "Optional Meta advertising measurement is off unless you enable it on the quiz introduction screen. If enabled and you select Start, Meta may receive a generic quiz-start event, IP address, browser user-agent, the page URL without query parameters, and Meta browser identifiers if present. We never share your quiz answers, quiz completion, gut profile, name, or email with Meta." },
        { text: "You can decline optional Meta measurement and still take the quiz and receive your result." },
      ],
    },
    {
      id: "how-we-share-information",
      title: "How we share information",
      items: [
        { heading: "Service providers", text: "We disclose information only as needed to providers that operate parts of our service:", list: [
          "Vercel for website and quiz hosting;",
          "Supabase for quiz and funnel data storage;",
          "Shopify for the store, checkout, and order administration;",
          "Supliful and shipping providers for product fulfillment and delivery;",
          "Allpay, once activated, for payment processing and invoices;",
          "Google Workspace for business email and privacy-request communications;",
          "Meta only for the optional, limited advertising measurement described above."
        ] },
        { heading: "Other disclosures", list: [
          "when you direct or authorize us to disclose information;",
          "when reasonably necessary to comply with law or valid legal process, protect safety or rights, investigate fraud, or secure our services;",
          "in a financing, merger, acquisition, reorganization, sale of assets, or similar transaction, subject to appropriate safeguards."
        ] },
        { text: "We do not sell personal information or consumer health data. We do not disclose quiz answers or gut profiles to data brokers or use them to build advertising audiences.", bold: true },
      ],
    },
    {
      id: "retention",
      title: "How long we keep information",
      items: [
        { text: "We use a purpose-based schedule rather than keeping everything indefinitely:" },
        { list: [
          "quiz answers and associated contact information: 24 months after collection, unless you request deletion sooner or a longer period is legally required;",
          "quiz funnel events and campaign-attribution data: 12 months after collection;",
          "waitlist and non-customer lead records: 24 months after your last interaction, unless you unsubscribe or request deletion sooner;",
          "order, payment-status, refund, invoice, fulfillment, and tax records: for the period required by applicable tax, accounting, and consumer-protection laws;",
          "customer-service and privacy-request records: 3 years after the matter closes;",
          "security logs: normally up to 12 months, unless needed to investigate an incident;",
          "backup copies: removed through the normal backup cycle, normally within 90 days after deletion from active systems."
        ] },
        { text: "We may retain minimal information needed to honor an opt-out, establish that a request was completed, resolve a dispute, prevent fraud, or meet a legal obligation. When practical, we de-identify information that no longer needs to identify you." },
      ],
    },
    {
      id: "your-rights",
      title: "Your choices and privacy rights",
      items: [
        { text: "Depending on where you live, you may ask to access, correct, obtain a copy of, or delete personal information; withdraw consent; or appeal our response to a request." },
        { text: "Email privacy@ibislabs.io with your request. We may ask for information reasonably necessary to verify that the request concerns you. We will not discriminate against you for exercising a privacy right." },
        { text: "You may unsubscribe from marketing emails using the link in the message. Service and order messages may still be sent when necessary." },
      ],
    },
    {
      id: "security-and-transfers",
      title: "Security and international processing",
      items: [
        { text: "We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. No system can be guaranteed completely secure." },
        { text: "Ibis Labs operates from Israel and uses service providers that may process information in the United States and other countries. Privacy laws in those places may differ from the laws where you live." },
      ],
    },
    {
      id: "children",
      title: "Children",
      items: [
        { text: "Our services are intended for adults and are not directed to anyone under 18. We do not knowingly collect personal information from anyone under 18. Contact privacy@ibislabs.io if you believe a minor provided information to us." },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      items: [
        { text: "We may update this policy as our services or legal obligations change. We will post the revised policy with a new last-updated date and provide additional notice when appropriate." },
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      items: [
        { text: `${company}. Privacy questions and requests: privacy@ibislabs.io.` },
      ],
    },
  ],
};

export const consumerHealthDataPolicy: LegalPolicy = {
  title: "Consumer Health Data Privacy Policy",
  description: "This policy explains how Ibis Labs Ltd. collects, uses, shares, and deletes consumer health data, including digestive-health quiz answers and the gut profile generated from them.",
  lastUpdated: "July 24, 2026",
  sections: [
    {
      id: "scope",
      title: "Scope and who controls the data",
      items: [
        { text: `${company} controls the consumer health data described here.` },
        { text: "This policy supplements our General Privacy Policy and applies to information that identifies, is linked to, or can reasonably be linked to a person and relates to past, present, or future physical or mental health." },
        { text: "Ibis Labs is a consumer wellness and dietary-supplement company, not a healthcare provider. The quiz does not diagnose a condition or provide medical care." },
      ],
    },
    {
      id: "categories",
      title: "Consumer health data we collect or infer",
      items: [
        { text: "Depending on your quiz path and choices, this may include:" },
        { list: [
          "age range, sex, and whether you report warning signs that should be discussed with a clinician;",
          "the digestive experience you identify as primary or secondary;",
          "patterns, timing, frequency, urgency, severity, duration, and stool-pattern information;",
          "food, stress, sleep, hormone, travel, illness, medication, and other reported triggers or context;",
          "reported diagnoses and GLP-1 medication use;",
          "supplement or fiber sensitivity and your stated priorities;",
          "the gut profile, drivers, and protocol match inferred from your answers;",
          "your name and email when submitted with the quiz;",
          "a random session identifier, quiz progress, campaign attribution, browser user-agent, and related technical data when linkable to the quiz."
        ] },
      ],
    },
    {
      id: "sources",
      title: "Sources of consumer health data",
      items: [
        { list: [
          "you, when you answer quiz questions or contact us;",
          "our quiz logic, which infers a gut profile and protocol match from your answers;",
          "your browser or device, which provides session, referral, and basic technical information;",
          "service providers acting for us, such as Supabase and Vercel, when they host or store the quiz data."
        ] },
        { text: "We do not buy consumer health data from data brokers." },
      ],
    },
    {
      id: "why-we-collect",
      title: "Why we collect and use consumer health data",
      items: [
        { list: [
          "generate the gut profile you request and match a protocol to that profile;",
          "identify reported warning signs for which the quiz should stop and direct you toward appropriate professional care;",
          "display and, when requested, send your result or protocol information;",
          "support you and troubleshoot the quiz;",
          "evaluate quiz performance, profile logic, and protocol demand;",
          "improve our services using aggregated or de-identified information;",
          "protect the quiz, prevent misuse, and comply with law."
        ] },
        { text: "Before the first health question, the quiz explains these purposes and links to this policy. Selecting Start is your affirmative request that we collect and use your answers to provide the quiz result. You may leave without starting." },
      ],
    },
    {
      id: "sharing",
      title: "Consumer health data we share and with whom",
      items: [
        { heading: "Processors acting for Ibis Labs", list: [
          "Supabase stores quiz answers, results, session identifiers, and funnel events;",
          "Vercel serves the quiz and may process IP address, browser, request, and security-log information;",
          "Google Workspace processes a privacy request or support message if you contact us about your quiz data;",
          "Shopify, Allpay, Supliful, and shipping providers receive order information needed for checkout, payment, fulfillment, or delivery, but we do not send them your full quiz-answer record."
        ] },
        { heading: "Optional Meta advertising measurement", text: "Meta measurement is off unless you enable it on the quiz introduction screen. If enabled and you select Start, Meta may receive a generic quiz-start event, IP address, browser user-agent, the quiz page URL without query parameters, and Meta browser identifiers if present. We never share your quiz answers, quiz completion, gut profile, name, or email with Meta. You can decline this optional measurement and still use the quiz." },
        { heading: "Legal or transaction disclosures", text: "We may disclose data when reasonably necessary to comply with valid legal process, protect safety or rights, investigate fraud or a security incident, or complete a financing, merger, acquisition, reorganization, or sale of assets with appropriate safeguards." },
        { text: "We do not sell consumer health data. We do not disclose quiz answers or gut profiles to data brokers, use them to create advertising audiences, or allow a provider to use them for its own advertising.", bold: true },
      ],
    },
    {
      id: "retention",
      title: "Retention and deletion",
      items: [
        { list: [
          "quiz answers, inferred gut profile, session identifier, and associated name or email: 24 months after collection;",
          "quiz funnel events, browser user-agent, and campaign-attribution fields: 12 months after collection;",
          "privacy-request records: 3 years after the request closes;",
          "backup copies: removed through the normal backup cycle, normally within 90 days after deletion from active systems."
        ] },
        { text: "We delete sooner when we grant a verified deletion or consent-withdrawal request, unless we must keep limited information for a legal obligation, security, fraud prevention, dispute, or proof that we completed the request. We may retain properly de-identified information that cannot reasonably be linked back to you." },
      ],
    },
    {
      id: "rights",
      title: "Your consumer health data rights",
      items: [
        { text: "Subject to applicable law, you may ask us to confirm whether we collect or share your consumer health data; access it; receive a copy; correct it; withdraw consent; or delete it, including data held by processors acting for us." },
        { text: "Send requests to privacy@ibislabs.io. Include the email address used with the quiz, if any, and enough information for us to find and verify the record. Do not send additional health details that are not needed for the request." },
        { text: "If we deny a request, you may appeal by replying to our decision with the word “Appeal” and explaining why you believe the decision should change. We will respond as required by applicable law. You may also contact the relevant regulator or attorney general." },
        { text: "Withdrawing consent does not affect processing that occurred before withdrawal. It may prevent us from providing or retaining your quiz result." },
      ],
    },
    {
      id: "security",
      title: "Security and international processing",
      items: [
        { text: "We use reasonable administrative, technical, and organizational safeguards designed to protect consumer health data, including restricted database access and encrypted network connections. No system can be guaranteed completely secure." },
        { text: "Ibis Labs operates from Israel and uses providers that may process data in the United States and other countries, where privacy laws may differ from those where you live." },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      items: [
        { text: "We may update this policy as our quiz, vendors, or legal obligations change. We will post the new version with an updated date and seek new consent before materially expanding collection or sharing when required." },
      ],
    },
    {
      id: "contact",
      title: "Contact and requests",
      items: [
        { text: `${company}. Email privacy@ibislabs.io for questions, requests, consent withdrawal, or appeals.` },
      ],
    },
  ],
};
