# Editorial release: November 13, 2026

## Topic selection and scope

Reviewed all 263 blog topic directories at main cfc0a75ad15982795339870912e8ab862b743bf0, including canonical aliases. Neither new slug existed. No numeric keyword-volume or virality claims are made. The fresh IRS November 12 announcement creates a concrete 2027 payroll-planning intent; regulator FAQs document the separate recurring purchase-interest question relevant before holiday spending.

- `/blog/401k-contribution-limits-2027`: new-year limits and payroll implementation. Existing 2026 limits remain a separate historical/current-year guide and receive a forward link.
- `/blog/credit-card-grace-period-interest`: monthly billing eligibility, full payment and residual interest. Distinct from debt payoff strategies, transfer selection and deferred-interest promotional deadlines. Existing transfer guide receives a contextual link.

## Fact verification

401(k): IRS IR-2026-136 (November 12, 2026), Notice 2026-66, IRS contribution-limit framework, catch-up guidance, designated Roth FAQs, operating-plan/SPD guidance and multiple-plan guidance. Older generic IRS pages are used only for structural rules, not stale annual figures. New notice controls 2027 dollar figures: $25,500 employee deferrals; $8,500 standard catch-up; $11,750 special age-60–63 catch-up; $75,000 annual-additions ceiling subject to compensation. Total employee illustrations $34,000 and $37,250. The 2026 wage threshold used for 2027 Roth catch-up screening is $155,000; this is not a household-income test. Plan restrictions and special plan types are not erased by headline federal limits.

Original payroll arithmetic: $25,500/12=$2,125; /26≈$980.7692, so 26 rounded $980.77 payments total $25,500.02 and need final cap/adjustment; $120,000×21.25%=$25,500; prior-job $10,000 leaves $15,500 of ordinary allowance. All assumed compensation, matches and scenarios are labeled hypothetical.

Cards: CFPB purchase-grace FAQ, daily-interest FAQ, balance-transfer FAQ, Regulation Z 1026.6 and 1026.54, FTC consumer card guidance and OCC residual-interest FAQ. Distinguishes minimum versus statement versus current balances; grace eligibility versus late-payment permission; purchase versus advance/transfer/promotion treatment; residual interest and issuer-specific restoration. The hypothetical isolated interest calculation is $1,000×24%×20/365≈$13.15, not a national average or exact issuer forecast. No current market APR claims. Primary citations appear at relevant passages.

## Original assets

Builtin image generation; no copyrighted branding or third-party photos. Each page discloses AI-generated editorial imagery. Final WebP assets reserve 1200×630 dimensions and use descriptive alt text:

- `public/images/401k-contribution-limits-2027.webp`: 90,928 bytes.
- `public/images/credit-card-grace-period-interest.webp`: 90,202 bytes.

Prompts:
1. Use case: photorealistic-natural. Asset type: original U.S. retirement-finance editorial hero, wide 1200x630 composition. A mid-career American professional at a tidy home desk reviewing a blank payroll planning notebook with a calculator and laptop showing a soft unfocused neutral screen. An older calendar lies beside a new blank desk planner, suggesting preparing next year's workplace retirement contributions. Premium candid financial journalism photography, realistic hands, soft morning window light, navy and muted teal accents, warm neutral room. No readable text, numbers, graphs, logos, government seals, recognizable brands or watermarks. Keep subject and objects inside safe crop margins.
2. Use case: photorealistic-natural. Asset type: original U.S. consumer-finance editorial hero, wide 1200x630. Close editorial still life on a light kitchen counter: two plain unbranded payment cards face down beside a blank billing envelope, a calculator, a simple calendar with empty squares and a small understated wrapped gift in recycled kraft paper. Theme: credit-card billing dates, purchase grace periods and careful holiday spending. Premium realistic editorial photography, natural side daylight, refined navy and muted teal details, rich paper texture, calm uncluttered composition. No card numbers, readable text, charts, logos, recognizable brands, government seals or watermarks. Main objects safely centered for responsive crop.

Center-cropped/resized to 1200×630, metadata stripped, WebP quality 80. Originals preserved outside the repository.

## Release checks

Required before main update: production build/type validation, repository SEO audit, generated-HTML word count excluding FAQ/disclaimer, single H1, canonical, locale, publish/modified dates, BlogPosting and six matching visible/schema FAQs per page, OG/Twitter image metadata, links, newest listing and sitemap entries. Browser tests at 320, 390 and 1440 pixels check horizontal fit, complete original hero images, reading outline, bottom scrolling and runtime errors.

Only intentional content, two optimized assets, contextual links, blog-hub sitemap date and this report are overlaid on the actual main tree with an expected-head lease. Discovery sitemap files are regenerated by the existing production build. Local font verification uses identical previously cached self-hosted font bytes, without production configuration or dependency changes. Existing lint warnings are not disguised as newly fixed issues. Post-push Cloudflare status and live article/image checks are separate from local validation. Sitemap inclusion and FAQ markup do not guarantee search indexing or rich results.

## Validation results

Production `npm run verify` passed on the complete release source: compilation/type validation, discovery generation and SEO audit. Across 333 audited pages there were zero broken internal links/images, missing canonicals, sitemap errors or invalid application schemas. Existing lint baseline remained 530 warnings and zero errors; informational low-text/HTML findings remain outside this content release.

Focused generated-HTML checks passed: 1,377 main-body words for the 401(k) guide and 1,384 for the grace-period guide, excluding FAQs/disclaimer. Each has six visible/schema-matched FAQs and seven primary-source links. Canonical, dates, locale, BlogPosting, OG/Twitter image metadata, latest listing and both sitemap entries matched.

Browser checks passed at 320, 390 and 1440 pixels: no horizontal overflow, original hero images fully loaded at 1200×630, reading outlines present (nine and eight entries), successful bottom scrolling and zero runtime page errors. These are responsive smoke tests, not a claim of a measured Lighthouse score or guaranteed Core Web Vitals.
