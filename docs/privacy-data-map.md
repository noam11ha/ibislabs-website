# Ibis Labs privacy data map — launch scope

Updated: July 24, 2026

| System | Launch data | Purpose | Public recipient category | Retention | Deletion route |
|---|---|---|---|---|---|
| Quiz browser | Random session ID, UTM parameters, Meta click ID, optional measurement choice | Keep one quiz session and attribution together | Browser storage | Browser session | Close browser session / clear site data |
| Supabase `quiz_responses` | Name, demographics, red-flag answers, quiz answers, inferred profile inputs, campaign attribution | Generate result, safety routing, product/profile research | Database processor | **24 months** | Admin delete by response ID; lead cascades |
| Supabase `red_flags` | Name, email, safety/referral answer, symptom context, quiz answers, campaign attribution | Preserve a requested referral record when the quiz does not generate a protocol | Database processor | **24 months** | Admin delete by normalized email or session ID |
| Supabase `quiz_leads` | Email, response ID, session ID | Deliver protocol/checkout handoff and identify a privacy request | Database processor | **24 months after collection or last interaction** | Admin delete by normalized email or response ID |
| Supabase `funnel_events` | Session ID, generic events, question number, UTMs, Meta click ID, user agent | Funnel analytics and troubleshooting | Database processor | **12 months** | Admin delete by session ID; scheduled age deletion |
| Vercel | IP, user agent, URL, request/security logs | Host and secure website/quiz | Hosting processor | Provider/configured log period; target no more than 12 months | Provider controls / support request where available |
| Meta (optional) | Generic `QuizStart`, IP, user agent, clean page URL, `_fbp`/`_fbc` if present | Advertising measurement | Meta | Meta-controlled under account settings | Meta data controls/deletion mechanism where matchable |
| Shopify | Account, cart, order, shipping, customer service | Store and order management | Commerce processor | Legal/order need | Shopify customer-data workflow |
| Allpay (once activated) | Payment status, transaction and invoice details | Payment and invoicing | Payment processor | Legal/payment need | Provider workflow subject to legal retention |
| Supliful / carrier | Order, product, recipient, address, fulfillment status | Fulfillment and delivery | Fulfillment processors | Legal/order need | Provider workflow subject to legal retention |
| Google Workspace | Privacy/support emails and case records | Support and privacy requests | Communications processor | **Case closure + 3 years** | Mailbox/admin deletion subject to case-record need |

## Explicit data boundary

Meta must never receive quiz completion, quiz answers, symptom selections, diagnoses, medication responses, red flags, inferred gut profile, protocol match, name, email, or URL query parameters. Optional Meta measurement is off by default and is limited to the Start action.

## Known launch dependency

The coordinated Supabase hardening migration in the quiz repository must be applied before deploying the quiz code that writes email to `quiz_leads`. The website and quiz deployments must publish together so the quiz policy link is never dead.
