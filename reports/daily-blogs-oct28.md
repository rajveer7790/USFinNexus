# Daily blog publication report — October 28, 2026

## Topic and cannibalization review

The existing 237-source blog library was searched before selection. Recent FOMC, IRA correction, 401(k), Medicare, student-loan SAVE, identity-protection and payment-scam topics were excluded because the site already has current dedicated coverage.

Selected distinct reader intents:

1. `year-end-tax-planning-checklist-2026` — action-oriented year-end federal tax preparation, prompted by the IRS October 23 planning reminder. This article coordinates existing narrow tax guides rather than replacing the W-4, estimated-tax, charitable, RMD or retirement-limit pages.
2. `fha-alternative-credit-scores-2027` — buyer-focused explanation of Mortgagee Letter 2026-11 and the January 1, 2027 implementation. No existing page covers the new model-selection methodology.

No keyword-volume number or unsupported popularity claim is used.

## Primary sources

### Year-end tax planning

- IRS, “Year-round tax planning can make filing easier,” IR-2026-128, October 23, 2026.
- IRS Publication 505 (2026), Tax Withholding and Estimated Tax.
- IRS retirement contribution and cost-of-living-limit pages.
- IRS Publication 550, Investment Income and Expenses.
- IRS charitable-contribution substantiation guidance.
- IRS digital-asset recordkeeping guidance.

### FHA alternative credit scores

- HUD Mortgagee Letter 2026-11, October 8, 2026.
- FHA INFO 2026-24 and the FHA Single Family industry-news page.
- FHA TOTAL Mortgage Scorecard page.
- FHA Alternative Credit Scores Preparedness Guide and Q&A.

## Images

Built-in image generation was used in `photorealistic-natural` editorial mode. Both images were cropped and optimized to exact 1200×630 WebP files.

- `public/images/year-end-tax-planning-checklist-2026.webp`
  - Prompt summary: a diverse American couple organizing year-end tax records in a warm late-autumn home office; no readable records, IRS marks, brands, text or watermark.
  - SHA-256: `166efbfb0db3f0bf8a22c0a2696102451d257d73ce5a37c0b9a7dc0befee2b77`
- `public/images/fha-alternative-credit-scores-2027.webp`
  - Prompt summary: a first-time homebuyer and housing counselor reviewing abstract credit-trend charts in a modest home; no HUD/FHA or scoring-company marks, personal data, readable scores, text or watermark.
  - SHA-256: `3a75935d6b24e7f9d483c3d11f99541e6fcf077b4b669c492f0e926d20c7d7bc`

## Local validation

- `npm run build`: passed; lint completed with no errors, TypeScript passed, 347 static routes generated.
- `npm run seo:audit`: passed across 306 audited pages.
- Blocking audit counts: zero missing titles, descriptions or canonicals; zero canonical mismatches; zero H1 failures; zero broken internal links or images; zero invalid application schema; zero duplicate FAQ schema; zero sitemap failures; zero crawl-depth failures.
- Rendered main-content words:
  - Year-end tax planning: 1,940.
  - FHA alternative scores: 1,947.
- Each page has one H1, six visible FAQs, six FAQPage entities and one BlogPosting entity.
- Both pages have self-canonicals, Open Graph and Twitter metadata, descriptive image alt text and financial disclaimers.
- Both URLs are in the generated sitemap with `2026-10-28` last-modified dates.
- Blog index source order is newest-first and places both October 28 posts before October 27 posts.

## Production verification

Pending publication at the time of the content commit. The final verification commit records GitHub, Cloudflare, live URL, image, sitemap and blog-index results.
