# October 26, 2026 editorial release

## Topic and cannibalization review

The existing 233-post source library was checked before topic selection.

1. `/blog/irs-mobile-app-guide-2026`
   - Search intent: find, verify and use the new official IRS app safely.
   - Distinct from the IRS IP PIN, payment-plan, estimated-tax and refund-adjacent content because it covers the September 2026 IRS2Go replacement and its authenticated/guest feature boundaries.
   - Rendered main-content words: 1,706.
2. `/blog/mortgage-servicer-error-letter`
   - Search intent: dispute a mortgage servicing error or request servicing information under Regulation X.
   - Distinct from the existing servicing-transfer checklist and escrow-shortage guide because it focuses on the designated correspondence address, letter content, evidence and federal response periods.
   - Rendered main-content words: 1,645.

No unsupported keyword-volume, traffic or “viral” claim is made.

## Primary-source checks

### IRS app

- IRS launch announcement dated September 25, 2026.
- Official IRS app page, updated October 6, 2026.
- IRS2Go-to-IRS-app FAQ.
- IRS refund and Individual Online Account pages.
- Verified distinctions: guest versus authenticated features; free Direct Pay bank debit versus processor-fee card/digital-wallet methods; selected-notice and available-record limitations; official store-link safety.

### Mortgage servicing

- CFPB Regulation X §§ 1024.35 and 1024.36 plus official interpretations.
- CFPB mortgage-servicing consumer guidance and complaint process.
- Verified distinctions: notice of error versus request for information; designated address; common 5/10/30-day periods and possible 15-day extension; 60-day adverse-reporting restriction scoped to the disputed payment; continuing obligation for later undisputed payments.

## Original image provenance

Built-in image generation was used for two separate, fully original assets. Neither uses copyrighted branding or readable personal data.

- `public/images/irs-mobile-app-guide-2026.webp`
  - 1200×630 WebP, 51,444 bytes.
  - SHA-256: `4d06cdca70b47af3b828f077d7868344184c69510ae42fb1aaf023093f5ed53b`
  - Prompt summary: natural editorial photograph of a taxpayer securely reviewing a generic mobile tax account beside organized papers; calm home office; no IRS seal, app-store logo, text, figures, brands or watermark.
- `public/images/mortgage-servicer-error-letter.webp`
  - 1200×630 WebP, 66,056 bytes.
  - SHA-256: `85eaebe859014978189d5d9d31f7bf7df99645cf6e084f9a4c2198744d297709`
  - Prompt summary: natural editorial photograph of a homeowner preparing a written mortgage-servicing dispute with a generic statement, records and envelope; no lender/postal logos, personal data, brands, watermark or sensational foreclosure imagery.

## Local validation

- `npm run build`: passed; lint completed with zero errors, TypeScript passed, and 343 routes were generated.
- Discovery generator: 301 canonical sitemap entries (215 blog, 59 calculator, 27 other pages).
- `npm run seo:audit`: 302 HTML pages checked with zero missing titles/descriptions/canonicals, H1-count errors, canonical mismatches, broken internal links/images, invalid application schema, duplicate FAQ schema or sitemap errors.
- Each new article: one H1, six visible FAQ answers plus six FAQPage entities, BlogPosting schema, self-canonical, article OG metadata, Twitter large-card metadata and meta description below 160 characters.
- Both new pages precede the October 25 pages in the generated blog index and are included in the segmented blog sitemap and full discovery output.

## Production verification

- Content commit: `ee0e48cd54da6ac4be227ddcbae5639840461f7a`.
- Cloudflare Pages build `2279867e-f9fd-4326-9e01-7b41c399e4d2`: completed successfully.
- Both article URLs, both WebP assets, `/blog` and `/sitemap-blog.xml` return HTTP 200 in production.
- Live article checks: exactly one H1, six FAQPage entities, BlogPosting schema, the expected self-canonical and the expected absolute Open Graph image on each page.
- The blog index contains both October 26 articles ahead of the earlier entries, and the segmented blog sitemap contains both canonical URLs.
- Live image checks: WebP MIME type, exact 1200×630 dimensions and byte-for-byte SHA-256 matches to the committed assets.
