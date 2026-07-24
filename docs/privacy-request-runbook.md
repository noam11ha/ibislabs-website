# Ibis Labs privacy-request runbook

**Owner:** Noam Hayoun (final approval); Peter Max (intake, coordination, draft responses)

**Public contact:** privacy@ibislabs.io

**Internal response target:** acknowledge within 3 business days; complete a verified request within 30 days where feasible, and always within the deadline required by applicable law. Never promise completion before identity and scope are verified.

## 1. Intake and case record

1. Keep the request in the dedicated `privacy@ibislabs.io` mailbox.
2. Record: received date, requester's email, request type, applicable deadline, verification status, systems searched, action taken, processor confirmations, response date, and appeal status.
3. Give the case an internal random identifier. Do not put symptoms or quiz answers in the email subject.

## 2. Verify without collecting more health data

- If the request comes from the same email stored with the quiz, send a one-time confirmation link or reply challenge to that address.
- If no email was stored, ask for the approximate quiz date and the browser/session identifier only if the requester still has it. Explain that an unlinked record may be impossible to identify safely.
- Do not ask for a diagnosis, symptom list, photo ID, or other health details unless strictly necessary.
- For an authorized agent, verify the agent's authority and the consumer's identity separately.

## 3. Find the data

Search only after verification. Current systems:

1. **Supabase:** `quiz_leads` by normalized email; join its `response_id` to `quiz_responses`; search `red_flags` by normalized email; use all matching `session_id` values to find related `funnel_events`.
2. **Google Workspace:** messages sent to/from the requester and the request case.
3. **Shopify / Allpay / Supliful:** only if the person ordered, requested a refund, or asks for all account/order data.
4. **Meta:** Ibis Labs does not send quiz answers, profile, name, or email. If optional measurement was enabled, Meta received only the generic completion event and technical identifiers; follow Meta's deletion mechanism if a verified request can be matched.
5. **Vercel:** inspect logs only when technically necessary; standard logs expire under the provider's configured retention.

## 4. Access or copy request

- Export only the requester's records.
- Use a common, readable format (CSV or JSON plus a plain-English cover note).
- Review the export before delivery: remove internal credentials, other people's data, fraud/security details that would create risk, and legally privileged material.
- Deliver using a secure method. Do not place a raw health-data export in an unencrypted email body.

## 5. Correction request

- Correct contact details or clearly factual fields when technically possible.
- Do not silently rewrite historical quiz answers. Record the correction or allow the person to delete and retake the quiz.

## 6. Withdrawal or deletion request

1. Preview the matching rows and confirm they belong to one verified person.
2. Delete matching `red_flags` rows.
3. Delete the linked `quiz_responses` row; the hardened schema deletes the linked `quiz_leads` row automatically.
4. Delete any standalone `quiz_leads` row and related `funnel_events` by `session_id`.
5. Delete or restrict associated support/marketing records unless a legal exception requires limited retention.
6. Instruct relevant processors to delete the same data and retain their confirmation.
7. Do not delete order/tax records that must be retained. Restrict them to that legal purpose and explain the exception.
8. Backup copies expire through the normal cycle, normally within 90 days.

## 7. Denial and appeal

- A denial must identify the reason in plain English and explain how to appeal.
- Treat a reply containing “Appeal” as an appeal. Noam reviews it; Peter drafts the response.
- Keep the minimum case record needed to show what was requested and how it was handled for 3 years after closure.

## 8. Final response checklist

- [ ] Identity verified proportionately
- [ ] Supabase searched
- [ ] Commerce/fulfillment systems searched if relevant
- [ ] Workspace communications searched if relevant
- [ ] Processor instructions completed if relevant
- [ ] Exceptions documented and explained
- [ ] Final response approved by Noam
- [ ] Case log completed

## Security rule

Peter currently has read-only Supabase database access. Any export or deletion requires a temporary, scoped administrative path approved by Noam. Never place a service-role key in chat, a repository, or a local policy document.
