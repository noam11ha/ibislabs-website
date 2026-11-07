# ibislabs.io

Pre-launch site for Ibis Labs and Foundation Fiber (Next.js, deployed on Vercel).

- `/` — launch page with email sign-up
- `/terms`, `/privacy` — legal pages (Terms has bracketed blanks to fill before launch)
- `/investors` — unlisted investor page: not linked, not in the sitemap, `noindex`
- `/api/waitlist` — saves each sign-up to the Resend "Foundation Fiber waitlist" segment, emails the owner, and sends new sign-ups a welcome email. Needs `RESEND_API_KEY` (optional `RESEND_SEGMENT_ID` overrides the segment).

```bash
npm install
npm run dev
```
