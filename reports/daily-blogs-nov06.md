# Daily blog publication report — November 6, 2026

## Topic and overlap review

- Reviewed the existing blog route library before drafting. The 2026 tax-bracket guide remains a prior-year reference; the new page targets the newly released 2027 IRS tables and search intent around 2027 filing thresholds.
- The existing Opportunity Zones article is a broad investing explainer. The new page targets the November 5, 2026 official 2027 designation announcement, map lookup intent, the new 2027–2036 designation cycle, and post-2026 statutory mechanics.
- No keyword-volume figures or unverified “viral” claims were used.

## Published articles

1. `/blog/federal-tax-brackets-standard-deduction-2027`
   - Rendered article text: 1,352 words
   - Primary sources: IRS IR-2026-133 and Revenue Procedure 2026-35
   - Includes all four filing-status bracket tables, standard deductions, examples, planning checklist, six FAQs, BlogPosting and FAQPage schema.
2. `/blog/qualified-opportunity-zones-2027-map-designations`
   - Rendered article text: 1,273 words
   - Primary sources: Treasury and IRS designation release, Treasury QOZ data page, 26 U.S.C. 1400Z-2 and IRS Notice 2026-40
   - Includes official map workflow, designation counts, effective dates, post-2026 gain rules, rural-fund rules, due-diligence checklist, six FAQs, BlogPosting and FAQPage schema.

## Editorial images

Generation mode: built-in image generation, photorealistic editorial style.

- `public/images/federal-tax-brackets-standard-deduction-2027.webp` — 1200×630 WebP, 51 KB. Prompt: “American taxpayer at a home office reviewing 2027 tax planning, laptop, calculator, calendar and abstract bracket bars; premium documentary photography; no readable text, numbers, logos, seals, brands, watermarks or personal data.”
- `public/images/qualified-opportunity-zones-2027-map-designations.webp` — 1200×630 WebP, 96 KB. Prompt: “Investor and community planner reviewing an abstract color-coded U.S. census-tract development map with property notes and planning tools; premium documentary photography; no readable place names, government map, seals, logos, brands, watermarks or personal data.”

Both images were visually reviewed, converted from the generated originals, stripped of metadata, and verified at exactly 1200×630.

## Validation

- Production build: passed (361 static routes)
- Type validation: passed
- ESLint: 0 errors (pre-existing warnings remain)
- SEO audit: passed across 320 pages
- Blocking audit counts: 0 missing titles, descriptions or canonicals; 0 canonical mismatches; 0 H1 errors; 0 broken internal links or images; 0 invalid application schema; 0 duplicate FAQ schema; 0 sitemap errors
- Both new pages: exactly one H1, one BlogPosting schema and one FAQPage schema
- Blog index: both pages appear newest-first
- Blog sitemap and `llms-full.txt`: both pages included

## Deployment

GitHub and production verification will be recorded after deployment completes.
