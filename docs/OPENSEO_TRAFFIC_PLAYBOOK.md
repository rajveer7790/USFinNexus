# USFinNexus OpenSEO Traffic Playbook

## Goal

Use OpenSEO as the research, measurement, and prioritization layer for **USFinNexus.com**, with the United States and English as the primary market.

OpenSEO should guide what to improve. It should not be used to mass-produce thin or repetitive finance pages.

## Project setup

This repository includes a Cursor MCP configuration at `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "openseo": {
      "url": "https://app.openseo.so/mcp"
    }
  }
}
```

After opening this repository in Cursor, approve/sign in to the OpenSEO MCP connection when prompted.

For self-hosting OpenSEO instead of using the hosted MCP, configure the credentials required by the OpenSEO project, including DataForSEO credentials.

## Primary market

- Domain: `https://usfinnexus.com`
- Country: United States
- Language: English
- Primary intent: free financial calculators + practical finance education
- Primary conversion: calculator usage / repeat visits
- Secondary conversion: newsletter or other owned-audience action if added later

## Seed competitors

Use these only as initial seeds. Confirm the actual SERP competitors with OpenSEO before making decisions:

- bankrate.com
- nerdwallet.com
- smartasset.com
- calculator.net

The real competitors for a query are the domains ranking for that exact query, not necessarily the largest finance websites.

## Priority keyword clusters

### Tier 1: mortgage calculators

1. mortgage calculator
2. mortgage payment calculator
3. mortgage calculator with taxes and insurance
4. PITI calculator
5. home affordability calculator
6. how much house can I afford
7. debt-to-income ratio calculator
8. mortgage amortization calculator
9. extra mortgage payment calculator
10. refinance calculator
11. refinance break-even calculator
12. closing costs calculator
13. down payment calculator
14. PMI calculator / PMI removal
15. mortgage points / buydown calculator

### Tier 2: government and special mortgage intent

- FHA calculator
- VA loan calculator
- USDA loan calculator
- FHA vs conventional
- VA funding fee
- conforming loan limits
- mortgage rates
- first-time homebuyer programs

### Tier 3: adjacent finance calculators

- auto loan calculator
- personal loan calculator
- student loan calculator
- credit card payoff calculator
- retirement calculator
- investment calculator
- income tax calculator

## OpenSEO workflow

### 1. Start with existing Google demand

If Google Search Console is connected to OpenSEO:

- pull queries and pages for the last 28 and 90 days;
- identify pages with high impressions but positions roughly 4-20;
- identify queries where CTR is weak relative to position;
- inspect URLs with falling clicks or impressions;
- check index status for important pages.

Prioritize existing pages with evidence of demand before creating new pages.

### 2. Research each cluster

For each seed keyword:

- get search volume, difficulty, CPC, and related terms;
- inspect the live SERP;
- identify search intent and SERP features;
- record the domains that repeatedly rank;
- find long-tail modifiers and questions;
- cluster terms that should belong to the same page.

Do not create a separate page for every keyword variant.

### 3. Map one intent to one canonical URL

Maintain a keyword-to-URL map.

Example:

| Intent | Canonical page |
| --- | --- |
| mortgage payment / PITI | `/calculators/mortgage` |
| home affordability | `/calculators/affordability` |
| debt-to-income ratio | `/calculators/dti` |
| amortization schedule | `/calculators/amortization` |
| refinance decision | `/calculators/refinance` |
| closing costs | `/calculators/closing-costs` |

If two pages target the same intent, strengthen one canonical page and redirect or re-scope the weaker page.

### 4. Improve pages before adding more pages

For a priority calculator page, use the current SERP to improve:

- title and H1 alignment with the main intent;
- concise answer directly above or below the calculator;
- assumptions and methodology;
- example calculation;
- state or loan-type nuances where relevant;
- FAQ based on real queries;
- links to the most relevant supporting guides;
- prominent links back from supporting articles;
- current official-source references for tax, lending, and government-program facts.

For YMYL finance content, factual freshness is mandatory. Do not preserve outdated tax law, interest-rate, loan-limit, or benefit claims merely to keep word count high.

### 5. Build topical authority with supporting content

Only create a new article when OpenSEO shows a distinct intent that the existing calculator page cannot satisfy.

A supporting article should:

1. answer one clearly defined question;
2. link to one primary calculator;
3. cite primary sources for time-sensitive financial claims;
4. include original worked examples or tables;
5. avoid generic macroeconomic filler;
6. have a clear update date only when the content was actually reviewed.

### 6. Authority and backlinks

Use OpenSEO backlink and competitor-gap data to identify:

- finance resource pages;
- mortgage and homebuyer resource pages;
- university/nonprofit financial-literacy pages;
- local housing-resource pages;
- journalists or publishers linking to competing calculators;
- broken links that USFinNexus can replace with a useful calculator/data page.

Lead outreach with a useful asset such as a calculator, methodology page, data table, or original analysis—not a generic guest-post pitch.

### 7. Measure weekly

Track at minimum:

- clicks from organic search;
- impressions;
- average position for priority clusters;
- number of priority keywords in top 3 / top 10 / top 20;
- calculator landing-page organic sessions;
- CTR for high-impression queries;
- referring domains to priority pages;
- indexed vs submitted URLs;
- pages losing clicks over 28-day and 90-day comparisons.

Do not judge progress by the number of pages published.

## First five OpenSEO tasks

Run these after authorizing the MCP connection:

1. **Existing opportunity scan**
   - "Analyze USFinNexus.com using Search Console and ranking data. Find the 25 existing URLs with the best opportunity to gain clicks in the next 90 days. Prioritize high impressions, positions 4-20, commercial/informational fit, and calculator relevance."

2. **Mortgage cluster**
   - "Research the US keyword cluster around mortgage calculator, mortgage payment calculator, PITI calculator, taxes and insurance, and monthly payment. Cluster keywords by intent, show volume/difficulty, inspect current SERPs, and map them to the existing USFinNexus mortgage calculator."

3. **Affordability + DTI cluster**
   - "Research home affordability, how much house can I afford, 28/36 rule, front-end DTI, back-end DTI, and debt-to-income calculator. Identify cannibalization risks and recommend one canonical URL per intent."

4. **Competitor gap**
   - "Compare USFinNexus.com with the domains actually ranking for its top mortgage-calculator queries. Find high-value keywords competitors rank for that USFinNexus does not, excluding topics that are not a natural fit."

5. **Link prospects**
   - "Find backlink prospects linking to competing free mortgage or affordability calculators but not USFinNexus. Prioritize relevant US finance, housing, education, nonprofit, and resource pages."

## Repository quality checks

Run:

```bash
npm run seo:audit
npm run seo:quality
```

The existing technical audit already checks titles, descriptions, H1 count, canonicals, internal links, images, application schema, sitemap consistency, crawl depth, and related technical issues.

The content-quality audit adds checks for:

- stale 2026 tax-law language;
- generic macroeconomic boilerplate;
- repeated long paragraphs across blog posts.

Use `node scripts/content-quality-audit.mjs --strict` in CI once all existing critical findings have been resolved.

## Editorial rules for USFinNexus

- One search intent = one strongest canonical page.
- Refresh and consolidate before creating more URLs.
- Never fake freshness using filesystem modification dates.
- Prefer IRS, CFPB, HUD, FHA, VA, USDA, FHFA, Federal Reserve, FRED, and other primary sources for relevant claims.
- Separate calculations from advice; clearly state assumptions.
- Avoid absolute investment recommendations and unsupported claims.
- Do not publish duplicated "2026 outlook" or generic wealth-building sections across unrelated articles.
- Every supporting article should have a reason to exist beyond keyword coverage.

## Expected role of OpenSEO

OpenSEO can provide the live data needed to decide **what to rank for, where USFinNexus already has traction, who the true SERP competitors are, and which links/content gaps are worth pursuing**.

It cannot guarantee traffic. The winning loop is:

**measure -> research -> consolidate -> improve -> publish selectively -> earn links -> measure again**
