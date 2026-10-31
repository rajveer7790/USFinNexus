# Daily finance blogs — October 31, 2026

## Published candidates

1. `/blog/cobra-vs-aca-after-job-loss-2027`
   - Search intent: compare health-insurance choices after losing job coverage.
   - Rendered article length: 2,053 words.
   - Primary sources: U.S. Department of Labor COBRA overview and worker FAQs; HealthCare.gov job-loss coverage, Special Enrollment Period and 2027 enrollment-date guidance.
2. `/blog/pbm-transparency-rule-2026`
   - Search intent: understand the new PBM fee-disclosure rule and its consumer implications.
   - Rendered article length: 1,841 words.
   - Primary sources: U.S. Department of Labor October 29 final-rule release, fact sheet and PBM transparency resource center.

## Cannibalization review

- The existing `/blog/aca-open-enrollment-2027` page targets annual Marketplace dates and the general enrollment checklist. The new COBRA page targets the separate decision after job-based coverage ends, including two 60-day windows, continuity of care and total-cost comparison.
- Repository search found no dedicated COBRA-versus-Marketplace article and no dedicated 2026 PBM transparency rule article.
- The PBM article does not target Medicare Part D plan selection; it focuses on employer-plan fee disclosure, audit rights and the July 1, 2027 applicability threshold.

## Image production

- Built-in image-generation mode was used.
- `public/images/cobra-vs-aca-after-job-loss-2027.webp`: original editorial scene of a couple comparing two unbranded coverage choices and household costs; no logos or readable personal data.
- `public/images/pbm-transparency-rule-2026.webp`: original editorial scene of a benefits manager reviewing unbranded prescription-plan cost reports; no logos or readable personal data.
- Both final assets are WebP, 1,200×630 pixels.

## Local validation

- Production build and TypeScript: passed; 351 static routes.
- SEO audit: 310 pages; zero missing titles, descriptions or canonicals; zero canonical mismatches; zero H1-count errors; zero broken internal links or images; zero invalid application schema; zero duplicate FAQ schema; zero sitemap errors.
- Each article has one H1, six FAQ entities, FAQPage and BlogPosting schema, self-referencing canonical, Open Graph and Twitter metadata, answer-first copy, official citations, disclaimer and contextual internal links.
- Both URLs are present in `public/sitemap-blog.xml` and the generated blog index lists them before October 30 posts.

## Production verification

- Content commit: `a8963f71017ede2348760d7fd977592c62e4c1ee` on GitHub `main`.
- Cloudflare Pages deployment `a854644f-d9f6-4b01-b75d-d44b317d161e`: completed successfully.
- Both article URLs, both WebP assets, `/blog` and `/sitemap-blog.xml` return HTTP 200 in production.
- Live main-content counts are 2,053 words for the COBRA-versus-ACA guide and 1,841 words for the PBM guide.
- Each live article has exactly one H1, six FAQPage entities, BlogPosting schema and the expected self-canonical.
- The live blog index places both October 31 posts ahead of October 30 posts; the segmented blog sitemap contains both canonical URLs.
- Live images are WebP, exactly 1,200×630, and byte-for-byte SHA-256 matches to the committed assets.
