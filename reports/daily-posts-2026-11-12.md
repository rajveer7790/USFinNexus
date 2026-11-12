# Editorial release: November 12, 2026

## Selection and intent

Reviewed the 261 topic directories on main at 093a5b8, including canonical aliases. No dedicated guide covered either selected intent. No keyword-volume or virality claims are made. Official consumer guidance and administrator FAQs substantiate practical reader questions, not measured search traffic.

- `/blog/529-to-roth-ira-rollover-rules`: implementing an unused-education-savings transfer. Distinct from choosing between Trump Accounts and 529 plans; adds an inbound link from that comparison.
- `/blog/brokered-cd-vs-bank-cd`: purchase structure and early-exit risk. Distinct from ordinary bank CD renewal/grace periods and savings-versus-CD selection; linked from the existing maturity guide.

## Primary-source fact checks

529: IRS Topic 313, Publications 590-A and 970, the IRS 2026 retirement-limit release, 26 USC 529(c)(3)(E), Virginia Invest529 transfer instructions, Utah my529 rollover FAQs and the SEC 529 bulletin. Sources are linked at relevant passages. Checked same beneficiary, direct transfer, $35,000 lifetime cap, 15-year account test, five-year contribution restriction, 2026 $7,500 IRA ceiling and $1,100 catch-up, other contributions and compensation. Beneficiary/account-owner clock questions remain explicitly unresolved; state treatment is not presented as nationally uniform. Hypothetical annual-room examples: $7,500 − $2,000 = $5,500; $4,000 compensation − $1,000 contributions = $3,000.

CDs: SEC brokered-CD bulletin, basic CD and callable-CD explainers; CFPB Regulation DD 1030.4; FDIC insurance framework; Georgia Department of Banking and Finance consumer guidance. Checked issuer versus intermediary, secondary-market loss/liquidity, issuer call right, separate cash interest payments and insurance aggregation. FDIC indexed official guidance was available, although direct research fetches returned HTTP 403; no access restriction was bypassed. All displayed example rates and charges are hypothetical, not current offers. Arithmetic: $10,000 × 4% × 90/365 = $98.63; $10,000 × 97.5% − $10 = $9,740 proceeds; plus $100 paid interest = $9,840 total cash before taxes.

## Original image assets

Builtin image generation; no third-party photographs or branding. Both pages disclose AI-generated editorial illustrations, use descriptive alt text and reserve intrinsic 1200×630 dimensions. Output files:

- `public/images/529-to-roth-ira-rollover-rules.webp` (87,450 bytes).
- `public/images/brokered-cd-vs-bank-cd.webp` (86,990 bytes).

Prompts:

1. Use case: photorealistic-natural. Asset type: original U.S. personal finance editorial hero, 1200 x 630 wide landscape. A young adult college graduate and her mother calmly planning at a light oak dining table, a plain graduation cap resting beside an unbranded closed notebook, simple calculator, blank savings folder and a small green plant. Authentic candid conversation and thoughtful expressions; visual theme is moving unused education savings toward long-term retirement, not a promotional banking ad. Premium natural financial journalism photography, soft window daylight, realistic hands, restrained navy and teal details. Keep main subjects safely away from crop edges. No logos, recognizable branding, government seals, watermarks, readable text, account numbers, charts or currency symbols.
2. Use case: photorealistic-natural. Asset type: original finance editorial hero, 1200 x 630 wide landscape. Close, sophisticated editorial still life on a home office desk: two plain unbranded document folders, a tactile calculator, reading glasses, a small hourglass and an understated desk calendar with blank squares, illustrating comparison of bank CDs with brokered CDs and the cost of exiting an investment early. Real paper textures, calm precise composition, soft side daylight, premium financial journalism photography, subtle navy and deep teal palette against warm cream. No people, no logos, no recognizable brands, no government seals, no watermark, no readable text, no numbers, no misleading charts. Main objects centered inside safe crop margins.

Optimization: center crop/resize to 1200×630, metadata stripped, WebP quality 80; originals preserved outside the repository.

## Validation contract

Before publishing: production build/type validation, repository SEO audit, generated-HTML checks for main-body word count, one H1, canonical, dates, locale, BlogPosting, six matching visible/schema FAQs, OG/Twitter images, internal links, latest listing and both sitemaps. Browser checks at 320, 390 and 1440 pixels for image completion, no horizontal overflow, reading outline and scrolling. Production font caching uses existing identical self-hosted font bytes only for local validation; no application font settings or dependencies changed.

Publication must overlay only intentional files on the current main tree with a branch-head lease. Deployment and actual live page/image availability are separate post-push checks; a local build alone is not evidence of publication or search indexing. FAQ markup does not guarantee rich results and sitemap inclusion does not guarantee indexing.

Focused generated-HTML validation measured 1,312 main-body words for the 529 guide and 1,400 for the CD guide, excluding FAQs/disclaimer. Six matching FAQ entries per guide; eight and six primary-source links respectively. Initial SEO validation caught two newly introduced calculator links pointing at a nonexistent slug; both were corrected to the existing `/calculators/investment` route. Browser checks passed at 320, 390 and 1440 pixels: no horizontal overflow, exact 1200×630 hero images loaded, eight reading-outline links per page, bottom-of-page scrolling succeeded and no page errors. Existing lint baseline: 530 warnings, zero errors; no unrelated warning cleanup included.
