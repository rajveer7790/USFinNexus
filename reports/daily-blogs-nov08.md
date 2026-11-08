# Daily blog publication report — November 8, 2026

## Topic review

- Reviewed 255 existing source blog routes before topic selection.
- The 2027 EITC article targets the newly released family-size credit table and is distinct from the existing 2026 EITC guide and 2027 Child Tax Credit article.
- The 2027 gift and estate tax article targets the new $20,000 annual exclusion and $15.48 million basic exclusion; it updates but does not duplicate the 2026 guide.
- No keyword-volume figures or unsupported “viral” claims were used.

## Published articles

1. `/blog/earned-income-tax-credit-2027-income-limits`
   - Rendered article text: 1,810 words
   - Sources: IRS Revenue Procedure 2026-35, IR-2026-133 and IRS qualifying-child guidance
2. `/blog/gift-estate-tax-limits-2027`
   - Rendered article text: 1,887 words
   - Sources: IRS Revenue Procedure 2026-35, IR-2026-133 and IRS estate/gift-tax guidance

## Editorial images

Built-in image generation was used in photorealistic-natural mode.

- `public/images/earned-income-tax-credit-2027-income-limits.webp` — 1200×630, 69,008 bytes. Prompt: a working American family reviewing abstract income bands and tax records; no readable text, numbers, logos, seals, personal data or watermark.
- `public/images/gift-estate-tax-limits-2027.webp` — 1200×630, 56,928 bytes. Prompt: an older parent, adult child and neutral adviser discussing an abstract family-tree plan; no readable text, numbers, logos, seals, personal data or watermark.

Both outputs were visually reviewed, cropped to 1200×630, converted to WebP and stripped of metadata.

## Validation

- Production build and TypeScript: passed (365 static routes)
- ESLint: zero errors; pre-existing warnings remain
- SEO audit: passed across 324 pages
- Blocking findings: zero H1, canonical, broken-link, image, application-schema or sitemap errors
- Each new page has one H1, one BlogPosting schema, one FAQPage schema with six questions, a self-canonical and matching hero image
- Both posts occupy the first two positions on the generated blog index
- Each URL appears exactly once in the generated blog sitemap and is included in `llms-full.txt`

## Publication

- GitHub content commit: `ac18920c6ee801132dd3339aa9bfd1ef4c62458f`
- Production verification is performed separately after Cloudflare completes the deployment.
