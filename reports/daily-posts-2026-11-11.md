# November 11, 2026 editorial batch

## Scope and topic separation

Inspected the current main-branch blog directory (259 topic directories, including aliases) and the HSA, Medicare, VA loan and VA funding-fee articles before choosing these URLs:

- `/blog/hsa-medicare-when-to-stop-contributions`: contribution stop dates, retroactive Part A, payroll reconciliation and correction workflow. Existing HSA-limit and investing articles remain the broad annual-limit and investment-intent destinations.
- `/blog/va-loan-entitlement-restoration`: reuse after sale/payoff, substitution, one-time retained-property restoration, remaining entitlement and COE records. Existing VA program and fee articles retain their separate purposes.

Both pages have reciprocal contextual links from an existing related guide. The directory discovers posts from source files and sorts by publication date. The sitemap discovers the new pages and reads their publication/modification dates. Only the blog hub's modification date is explicitly advanced.

## Reader-intent and timeliness evidence

Medicare's current enrollment and working-past-65 guidance expressly addresses HSAs, while the 2027 Medicare handbook is available during year-end coverage planning. VA's September 15, 2026 consumer explanation specifically addresses repeat benefit use. These establish practical informational intent; no numeric keyword volume, traffic forecast, ranking, virality or indexing guarantee is asserted.

## Material claim checks

| Article | Claim checked | Primary reference |
| --- | --- | --- |
| HSA | Medicare-covered months, including retroactive coverage, affect contribution eligibility | https://www.irs.gov/publications/p969 |
| HSA | Monthly limits, age-55 catch-up and contribution coordination | https://uscode.house.gov/us/usc/119-118/t26/s223/ |
| HSA | Delayed premium-free Part A can reach back six months; birthday-on-first exception | https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-does-medicare-coverage-start |
| HSA | Social Security application and automatic Part A enrollment | https://www.ssa.gov/medicare/plan/when-to-sign-up |
| HSA | 2026 self-only annual base is $4,400 | https://www.irs.gov/pub/irs-drop/rp-25-19.pdf |
| HSA | Monthly eligibility worksheet, employer offsets and premium treatment | https://www.irs.gov/instructions/i8889 |
| HSA | Excess-contribution correction and additional-tax form | https://www.irs.gov/publications/p969 and https://www.irs.gov/forms-pubs/about-form-5329 |
| HSA | Do not delay coverage without checking employer coordination | https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/working-past-65 |
| VA | Three restoration routes and requesting an updated COE | https://www.va.gov/housing-assistance/home-loans/eligibility/ |
| VA | Repeat use, remaining entitlement and occupancy | https://news.va.gov/149487/veterans-can-use-their-va-guaranteed-home-loan-benefit-more-than-once/ |
| VA | Basic entitlement is not a cash borrowing ceiling; full entitlement does not ensure approval | https://www.va.gov/housing-assistance/home-loans/loan-limits/ |
| VA | COE online, lender and paper request routes | https://www.va.gov/housing-assistance/home-loans/how-to-request-coe/ and https://www.va.gov/forms/26-1880/ |
| VA | Funding-fee determination is separate from restoration | https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/ |
| VA | Purchase-loan eligibility and occupancy | https://www.va.gov/housing-assistance/home-loans/loan-types/purchase-loan/ |
| VA | Loss situations may require repayment for restoration | https://www.va.gov/housing-assistance/home-loans/trouble-making-payments/ |

Examples are explicitly hypothetical. HSA example arithmetic: ($4,400 + $1,000) × 6 / 12 = $2,700; minus $900 employer funding = $1,800 remaining room under the stated assumptions. No 2027 amounts are inferred from 2026 amounts. No current market rate or guaranteed loan-turnaround claim is made.

## Images and generation prompts

Generated with the built-in image generator, then converted to exact 1200×630 WebP at quality 80 with metadata stripped. The source PNGs are retained outside the application. The articles disclose the illustrative AI-generated nature of their images. Neither uses a copyrighted logo or government seal.

### HSA

Saved project asset: `public/images/hsa-medicare-when-to-stop-contributions.webp` (91,696 bytes).

Prompt: Use case: photorealistic-natural. Asset type: finance editorial article hero, 1200 x 630 wide landscape composition. Original professional editorial photograph illustrating an older American woman planning the transition from an HSA to Medicare: natural age around 66, sitting at a bright oak kitchen desk, gently reviewing an unbranded paper month-view calendar and blank benefit documents beside a calculator and reading glasses. Candid thoughtful mood, realistic hands and paper, soft morning window light, restrained navy and teal accents, premium financial journalism photography. No visible words, no numbers, no logos, no government seals, no branding, no watermarks. Photograph is illustrative, not a government document. Keep key subjects away from crop edges.

### VA

Saved project asset: `public/images/va-loan-entitlement-restoration.webp` (131,140 bytes).

Prompt: Use case: photorealistic-natural. Asset type: finance editorial article hero, 1200 x 630 wide landscape composition. Original premium editorial photograph illustrating a U.S. veteran reusing a home loan benefit to move home: a middle-aged man in understated civilian clothes and his partner stand at the entrance of a modest attractive suburban American house, holding new house keys and a plain navy folder, authentic calm optimism rather than advertising poses. Warm November afternoon light, natural autumn leaves, clear architectural detail, polished financial journalism photography, tasteful teal and navy accents. No uniform, no military insignia, no flags, no text, no numbers, no logos, no government seals, no watermark. Realistic anatomy and hands. Wide composition with important subjects safely inside central crop area.

## Validation contract

Production lint/build/type validation and site SEO audit; separate exported-HTML assertions for at least 1,200 main-body words excluding FAQs, exactly one H1, one BlogPosting and one FAQPage per article, six matching visible FAQ entries, canonical/social image metadata, current dates, primary-source links, calculator links, newest-first listing and dated sitemap inclusion. Hero dimensions are checked separately. Live publication must be confirmed independently from a successful local build.

Local build font fetching uses the exact font bytes from the prior successful build through Next's test fixture hook; no font substitutions or production font-loading changes are committed.
