# October 17, 2026: two original consumer-finance articles

## Scope and topic selection

Inspected the existing blog directories and canonical routing map before choosing topics. These articles answer two distinct administrative decisions rather than creating another general mortgage-rate, CD-versus-savings, escrow-shortage or deposit-insurance guide.

| New canonical path | Primary query / intent | Existing coverage kept distinct |
| --- | --- | --- |
| `/blog/mortgage-servicing-transfer-checklist-2026` | mortgage servicing transfer; payment destination, autopay and escrow checks for an existing borrower | Closing wire fraud concerns settlement funds; escrow-shortage coverage concerns payment changes. |
| `/blog/cd-maturity-grace-period-auto-renewal-2026` | CD maturity grace period; decide before an unwanted automatic renewal | HYSA-versus-CD compares products; FDIC coverage addresses insurance categories. |

Demand rationale: both are concrete consumer questions covered in dedicated current CFPB/OCC help pages. This is qualitative evidence of useful reader intent, not measured search volume, a claim of virality, or private GSC performance data. No unverified current yield, policy-rate prediction or market statistic is asserted. October 17 is the publication and source-check date, not a claim that the underlying rules were newly enacted.

## Primary-source fact checks

- CFPB Regulation X 1024.33: the 60-day transfer protection concerns qualifying timely payments received by the old servicer; it does not authorize skipped payments. https://www.consumerfinance.gov/rules-policy/regulations/1024/33/
- CFPB consumer transfer guidance: distinguish bank bill pay from servicer-controlled withdrawals and review payment records. https://www.consumerfinance.gov/ask-cfpb/what-happens-if-the-company-that-i-send-my-mortgage-payments-to-changes-en-215/
- CFPB loan-sale explainer: ownership and servicing are different roles. https://www.consumerfinance.gov/ask-cfpb/what-happens-if-my-mortgage-is-sold-is-my-loan-safe-en-199/
- CFPB escrow and servicing-rights guidance: reconcile balances, disbursements and designated written-error addresses. https://www.consumerfinance.gov/rules-policy/regulations/1024/17/ and https://www.consumerfinance.gov/consumer-tools/mortgages/your-mortgage-servicer-must-comply-with-federal-rules/
- CFPB CD rollover explainer: a renewed CD need not preserve the expiring rate. https://www.consumerfinance.gov/ask-cfpb/what-is-a-certificate-of-deposit-cd-rollover-or-renewal-en-923/
- Regulation DD account and renewal disclosures: avoid a universal grace-period claim; notices and deadlines depend on the account and regulatory category. https://www.consumerfinance.gov/rules-policy/regulations/1030/4/ and https://www.consumerfinance.gov/rules-policy/regulations/1030/5/
- OCC matured-CD guidance: establish current account status and contractual terms after a missed deadline. https://www.helpwithmybank.gov/help-topics/bank-accounts/certificates-of-deposit/cd-redeem.html
- FDIC CD shopping guidance was retrieved in search; direct page fetching returned 403 in the research service. Supporting account-disclosure and renewal claims were independently checked in CFPB/OCC sources. https://www.fdic.gov/consumer-resource-center/2023-11/shopping-certificate-deposit

The $25,000 one-year APY example is original arithmetic: 3.50% produces $25,875 and 4.00% produces $26,000 when interest remains deposited and no fees or withdrawals occur; $125 difference before taxes. These are hypothetical yields, not bank offers. Mortgage and escrow dollar examples are explicitly illustrative.

## Original hero assets

Both assets were generated separately, visually reviewed, then center-cropped/resampled and encoded as 1200×630 WebP at quality 82. No copyrighted branding, readable financial records or real account details appear. Captions disclose AI generation; descriptive alt text appears on-page and in Open Graph metadata.

- Mortgage prompt: professional editorial photograph-style image of a homeowner comparing unbranded transfer envelopes at a sunlit kitchen desk, keys and phone, navy/cream palette; no readable text, numbers, logos or watermarks.
- CD prompt: professional editorial photograph-style image of a saver considering envelopes beside a blank calendar and hourglass, navy/sage/cream palette; no readable text, numbers, logos or watermarks.

Files: `public/images/mortgage-servicing-transfer-checklist-2026.webp` and `public/images/cd-maturity-grace-period-auto-renewal-2026.webp`. Original generated PNGs remain outside the repository; only optimized delivery assets are committed.

## Validation

Fixed a discovery classification bug: `cd-...-auto-renewal` matched the broad auto-loan expression. Explicit CD/certificate-of-deposit classification now runs before the auto-loan rule, so the new CD guide appears under Banking.

Rendered-page evidence is recorded in `daily-posts-2026-10-17-validation.json`; the whole-site audit is `seo-audit.json`. Production verification must check the deployed commit and actual page/image responses before publishing is described as successful. Existing site-wide lint warnings and informational SEO findings are not claimed fixed by these two articles.

Local results: production build passed with 327 static outputs; standalone `tsc --noEmit` passed; all 286 canonical HTML pages passed the blocking SEO checks. The two new rendered articles contain 1,784 and 1,613 words respectively, each with one H1, one BlogPosting, one FAQPage containing six entities, correct canonical/OG/Twitter metadata and descriptive image alt text. The new cards are first and second in the blog directory, correctly categorized, and both canonical URLs appear in the generated sitemap. Hero dimensions and image hashes are recorded in the validation JSON. The audit retains 232 informational low-text/HTML-ratio findings and eight title/H1 matches; neither is reported as an indexing diagnosis or as a publishing failure.
