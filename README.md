# ibislabs.io — Adjust

Investor-facing concept site for Adjust, a brand of Ibis Labs Ltd (Next.js, deployed on Vercel).
Built to Adjust Master Brand Book v1.0 plus the founder clarifications of 15 Nov 2026.

- `/` — homepage: hero, fiber-gap chart, product, formula, why fiber, why Adjust, how to use, standards, FAQ, contact
- `/terms`, `/privacy` — legal pages
- `/investors` — unlisted investor page: not linked, not in the sitemap, `noindex`
- `/api/waitlist` — unused for now (Resend sign-up endpoint, kept for later)

Photos: set `HERO`, `PHOTO_WHY`, `PHOTO_ROUTINE` in `app/page.tsx` to files in `public/photos/`.
With a lifestyle hero, the product section moves ahead of the chart automatically.

Rules: no unverified claims, certifications, reviews or prices. Chart numbers and sources live in
`components/FiberChart.tsx` and must change together.

```bash
npm install
npm run dev
```
