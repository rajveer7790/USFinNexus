# Daily publishing report — October 21, 2026

## Topic selection and duplication check

The existing 223-post blog directory was inspected before drafting. USFinNexus already covered general 2026 RMDs, Roth conversions, mortgage escrow basics, escrow shortages and servicing transfers. The selected pages answer two narrower, distinct intents that were not present as standalone URLs:

1. Whether an inherited IRA beneficiary needs an annual 2026 RMD while also following the SECURE Act ten-year deadline.
2. How to request a mortgage payoff statement and what to track after payoff, including the separate escrow-refund and short-year-statement clocks.

No keyword-volume figures or “viral” claims were invented. Demand was assessed qualitatively from dedicated IRS and CFPB guidance, the number of rule-dependent decisions a reader must make, and the transactional urgency of the two queries.

## Published assets

### Inherited IRA 10-Year Rule: Do You Need an RMD in 2026?

- URL: `https://usfinnexus.com/blog/inherited-ira-10-year-rule-rmd-2026`
- Primary phrase: inherited IRA 10-year rule
- Supporting intent: inherited IRA RMD 2026; beneficiary IRA withdrawal rules; inherited Roth IRA deadline
- Category: Retirement
- Rendered article words: validated after production build
- Answer-first lead, decision table, six visible FAQs, FAQPage schema and BlogPosting schema
- Internal links: 2026 RMD guide, income-tax calculator, Roth-conversion guide and retirement calculator

Primary official sources checked October 21, 2026:

- IRS Publication 590-B
- IRS Required Minimum Distributions for IRA Beneficiaries
- IRS Internal Revenue Bulletin 2024-33 (final RMD regulations)
- IRS Form 5329 instructions

### Mortgage Payoff Statement and Escrow Refund: What Happens Next?

- URL: `https://usfinnexus.com/blog/mortgage-payoff-statement-escrow-refund-2026`
- Primary phrase: mortgage payoff statement
- Supporting intent: escrow refund after mortgage payoff; payoff amount vs principal; what happens after paying off a mortgage
- Category: Mortgage
- Rendered article words: validated after production build
- Answer-first lead, payoff timeline, six visible FAQs, FAQPage schema and BlogPosting schema
- Internal links: mortgage-payoff calculator, Loan Estimate checklist, refinance calculator and escrow guide

Primary official sources checked October 21, 2026:

- CFPB mortgage-servicing consumer guide
- Regulation Z, 12 CFR 1026.36(c)(3)
- Regulation X, 12 CFR 1024.34(b)
- Regulation X, 12 CFR 1024.17(i)(4)(iii)

## Original image prompts

Built-in ImageGen was used for two original, unbranded editorial photographs. Each selected PNG was center-cropped and optimized to an exact 1200×630 WebP project asset.

Inherited IRA prompt: realistic adult beneficiary reviewing an inherited retirement account folder, calculator and calendar in a calm American home office; premium documentary financial-journalism photography; warm neutral palette; no readable text, figures, logos, bank branding, watermark or money piles.

Mortgage payoff prompt: homeowner reviewing an unbranded mortgage payoff statement at a bright kitchen table with calculator, laptop and house keys; authentic financial-journalism photography; restrained blue and warm-wood palette; no readable text, dollar figures, lender branding, watermark or money piles.

## Accuracy controls

- The inherited-IRA article separates death before versus on/after the required beginning date, eligible designated beneficiaries, year-of-death RMDs, inherited Roth treatment, aggregation limits and current excise-tax correction rules.
- The mortgage article distinguishes principal balance from a dated payoff amount, the general seven-business-day payoff-statement rule, the 20-day escrow-refund rule with excluded days, the 60-day short-year statement and state-specific lien release procedures.
- Both pages state limits and exceptions rather than presenting federal summaries as universal account, contract or state-law answers.
- Both include financial/tax/legal disclaimers and instruct readers to verify facts with custodians, servicers or qualified professionals.

## Validation

- Production build: passed; 333 static routes generated.
- TypeScript (`tsc --noEmit`): passed.
- Full SEO audit: passed on 292 canonical HTML pages with zero blocking findings for titles, descriptions, H1 count, canonicals, duplicate titles/H1s, broken internal links/images, schema, sitemap consistency and crawl depth.
- Dedicated article regression check validates at least 1,200 rendered words, one H1, H2/H3 hierarchy, metadata, canonical and social URLs, one BlogPosting schema, one six-question FAQPage schema, visible FAQ parity, internal-link existence, sitemap inclusion, newest-first blog ordering and exact repository/export image parity.
