# ibislabs.io

Pre-launch site for Ibis Labs and Foundation Fiber (Next.js, deployed on Vercel).

- `/` — launch page with email sign-up
- `/terms`, `/privacy` — legal pages (Terms has bracketed blanks to fill before launch)
- `/investors` — unlisted investor page: not linked, not in the sitemap, `noindex`
- `/api/waitlist` — emails each sign-up via Resend. Needs `RESEND_API_KEY`; optional `RESEND_AUDIENCE_ID` also saves the contact to a Resend audience.

```bash
npm install
npm run dev
```
