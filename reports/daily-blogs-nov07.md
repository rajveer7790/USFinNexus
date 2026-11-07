# Daily blog publication report — November 7, 2026

## Topic and overlap review

- Reviewed 253 existing source blog routes before selecting topics.
- The mortgage article targets current payment-example intent around Freddie Mac's November 5, 2026 PMMS reading. It does not duplicate the October FOMC rate-lock guide or the September 6.76% payment page.
- The tax article targets the newly indexed 2027 Child Tax Credit maximum, refundable cap and family eligibility. It is distinct from the 2026 CTC page and the broad 2027 bracket table.
- No keyword-volume estimates, trend scores or unsupported “viral” claims were used.

## Articles

1. `/blog/mortgage-payment-at-718-november-2026`
   - Rendered article text: 1,483 words
   - Primary sources: Freddie Mac PMMS, Freddie Mac weekly archive and CFPB Loan Estimate guidance
   - Covers $300K/$400K/$500K payments, rate sensitivity, 15-year comparison, PITI, points and lender-offer review.
2. `/blog/child-tax-credit-2027-income-limits-refund`
   - Rendered article text: 1,801 words
   - Primary sources: IRS IR-2026-133, Revenue Procedure 2026-35, IRS CTC eligibility page and 26 U.S.C. §24
   - Covers the $2,300 maximum, $1,800 refundable cap, $200K/$400K phaseouts, qualifying-child tests, examples and filing checklist.

## Editorial images

Generation mode: built-in image generation, photorealistic-natural editorial style.

- `public/images/mortgage-payment-at-718-november-2026.webp` — 1200×630 WebP, 62 KB. Prompt: American homebuyers and a neutral counselor comparing blank loan-payment charts in a naturally lit home; no text, lender branding, government seals, personal data or watermark.
- `public/images/child-tax-credit-2027-income-limits-refund.webp` — 1200×630 WebP, 80 KB. Prompt: a diverse American family organizing household tax records at a kitchen table; no text, IRS branding, government seals, personal data, cash piles or watermark.

Both generated images were visually reviewed, copied into the project, converted to WebP, stripped of metadata and verified at exactly 1200×630.

## Validation

- Production build: passed (363 static routes)
- Type validation: passed
- ESLint: 0 errors; pre-existing warnings remain
- SEO audit: passed across 322 pages
- Blocking findings: 0 missing titles/descriptions/canonicals, 0 H1 errors, 0 canonical mismatches, 0 broken internal links/images, 0 invalid application schema, 0 duplicate FAQ schema, 0 sitemap errors
- Both new pages: one H1, one BlogPosting schema, one FAQPage schema with six questions, self-canonical and matching hero image
- Blog index: both posts occupy positions 1 and 2
- Blog sitemap and `llms-full.txt`: both URLs included

## Deployment

GitHub and production verification will be recorded after deployment completes.
