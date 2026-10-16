# October 16, 2026 editorial batch

## Intent and duplicate review

Inspected the existing blog directory and the nearby closing-cost, reserve,
refinance, extra-payment and bank-scam clusters. Neither new page duplicates a
dedicated existing recast or closing-wire-verification guide. The wire-fraud
article addresses verifying the settlement recipient, not calculating closing
costs. The recast article addresses payment re-amortization after a lump sum,
not a general refinance decision.

Selection reflects distinct consumer questions and the site's existing mortgage
audience. No keyword-volume, viral-growth or live Search Console claim is made.

## Pages

- `/blog/mortgage-closing-wire-fraud-checklist-2026`
- `/blog/mortgage-recast-vs-refinance-2026`

Each has an October 16 publish/review date, one H1, answer-first introduction,
six visible FAQs matching FAQPage schema, BlogPosting schema, canonical URL,
Open Graph/Twitter fields, related calculator/article links and a disclaimer.
The recast calculation assumes a fixed 6% rate, 300 remaining monthly payments
and balances of $300,000 and $250,000. These are not current market quotes.

## Primary sources checked

- https://www.consumerfinance.gov/owning-a-home/beware-mortgage-closing-scams/
- https://www.consumerfinance.gov/archive/blog/mortgage-closing-scams-how-protect-yourself-and-your-closing-funds/
- https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise
- https://www.consumerfinance.gov/owning-a-home/closing-disclosure/
- https://servicing-guide.fanniemae.com/svc/c-1.2-01/processing-additional-principal-payments
- https://www.chase.com/personal/mortgage/education/managing-your-mortgage/what-is-mortgage-recast
- https://www.chase.com/personal/mortgage/recast
- https://yourhome.fanniemae.com/own/why-did-my-monthly-mortgage-payment-go-up

## Original image production

The built-in image-generation workflow produced two distinct original editorial
illustrations. Both are disclosed as AI-generated, converted to 1200×630 WebP,
and stored under `public/images/` with the matching article slug.

Wire-fraud image prompt:

> Professional original editorial photo for a US personal finance article about preventing mortgage closing wire fraud: close-up of a homebuyer's hand holding a phone during an independent verification call, a closed laptop, house keys and unsigned closing folder on a wooden desk, soft daylight, calm serious tone, realistic premium financial-journalism photography. Landscape composition crop-safe for 1200x630. No readable text, no numbers, no logos, no brands, no watermark, no fake screenshots.

Recast image prompt:

> Professional original editorial photo for a US homeowner finance guide on mortgage recasting: overhead still life of a calculator, a plain home key, blank amortization paperwork and small neat stacks of coins beside an envelope on a warm stone desktop, afternoon light, balanced modern magazine composition. Distinct from a person using a phone. Landscape crop-safe for 1200x630. No readable text, no numbers, no logos, no brands, no watermark.

## Verification commands

```sh
npm run build
npm run seo:audit
node scripts/verify-oct16-blogs.mjs
```

The targeted script checks at least 1,200 rendered article words, a single H1,
canonical/OG/Twitter metadata, article dates, six FAQ entries, sitemap inclusion,
working internal destinations, matching index images and newest-first cards.
The index now sorts unknown publication dates last instead of inventing dates
from checkout mtimes. The image parser reads local editorial assets directly
from each article's image constant, avoiding additional slug-specific mappings.
