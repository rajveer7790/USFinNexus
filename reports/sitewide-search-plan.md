# USFinNexus sitewide search plan

The supplied seven-page manual includes a sample matrix and ten detailed sheets. The complete inventory is [seo-url-inventory.csv](seo-url-inventory.csv). It records rendered metadata, topic, sitemap, indexing directives, quick-answer marker, schema and crawlable link coverage for every canonical export. Curated queries are editorial targets. Other topics are derived from the rendered H1 and serve as starting points for query research. The PDF's search volumes lack an independently verified dataset and should not be used as a traffic forecast.

## Competitor and primary-source research

| Segment | What the reviewed pages provide | USFinNexus decision |
| --- | --- | --- |
| Mortgage | [Bankrate](https://www.bankrate.com/mortgages/mortgage-calculator/) combines payment estimates, housing costs and planning explanation. | Lead with monthly payment, PITI and local assumptions. Keep extra principal, PDF/CSV and amortization discoverable. |
| Home affordability | [NerdWallet](https://www.nerdwallet.com/mortgages/calculators/how-much-house-can-i-afford) uses income, debts and cash available, with a planning DTI assumption. | Own the purchase-price query separately from payment and DTI. Link salary-specific scenarios to the main tool, and distinguish budget from lender approval. |
| Refinance and comparison | The [CFPB comparison guide](https://www.consumerfinance.gov/owning-a-home/compare/compare-loan-estimates/) compares cash to close, lender-controlled fees and five-year borrowing cost. | Link the calculator and Loan Estimate checklist. Explain payment savings, financed fees and the five-year comparison separately. |
| Tax | [SmartAsset](https://smartasset.com/taxes/paycheck-calculator) covers federal, state and local paycheck estimates. | Focus the current tool on federal brackets, deductions and FICA. Label optional state/local costs as user inputs and reserve withholding and jurisdiction-specific queries for a validated tool. |
| Retirement | [Investor.gov](https://www.investor.gov/free-financial-planning-tools) separates savings, compounding and withdrawal tasks. | Keep the retirement savings projection separate from withdrawal and FIRE intents. Treat example returns and the 4% heuristic as assumptions. |
| Compliance | [FinCEN](https://www.fincen.gov/rre-filing-resources), [New York DOS](https://dos.ny.gov/beneficial-ownership-disclosure-frequently-asked-questions) and [IRS](https://www.irs.gov/irb/2025-45_IRB) govern the source facts. | Use the actual rule status, jurisdiction and effective year. Consolidate older aliases into current canonical pages and provide a corrections link. |

## Implementation and release sequence

1. Inventory the static export and redirect rules. Preserve URLs with existing search history. Exclude redirects and noindex pages from sitemaps, and check every indexable canonical for sitemap coverage.
2. Assign a priority query to each sample tool or guide, then use the rendered topic and page type to inventory the rest. Flag duplicate descriptions, missing or duplicate titles and headings, and missing schema. Keep loan limits, tax rates and filing requirements tied to first-party sources.
3. Apply source-backed answers where the query calls for one. Put user-facing answers and assumptions in crawlable HTML. Reuse the calculator formulas and link the full tool when a compact estimator is relevant. Keep links contextual where adding an interactive widget would interrupt the reader's task.
4. Segment discovery into blog, calculators, articles and guides, regional, and other core pages. Validate complete, non-overlapping coverage and preserve both existing master sitemap endpoints. Inspect the output rather than relying on Next source files alone.
5. Run the production export and regressions, review the route inventory, then review the pull request. After merge and deploy, verify production responses, sitemap index and crawler access on Cloudflare.
6. Use Search Console page/query exports to validate target queries and investigate cannibalization. Compare U.S. clicks, impressions and CTR by canonical page and query over comparable 28-day windows, with separate cohorts for mortgage, tax, regional pages and compliance. Record seasonality and deployment date, and inspect excluded URLs before requesting indexing.

## Scope decisions

- The sample article paths are abbreviated or differ from the existing canonical routes. The older legal aliases intentionally consolidate into the current articles or federal BOI guide. They should stay out of the sitemap.
- The methodology link is available throughout the U.S. calculator section. Shared wording covers the site's different sources and avoids implying that CFPB or FHFA verify every calculator.
- Application markup describes a free web calculator. Product and government service markup would misrepresent the service. [Google's AI feature guidance](https://developers.google.com/search/docs/appearance/ai-features) calls for crawlable, helpful content and structured data that reflects the visible page.
- Regional tax, FHA underwriting, and refinance debt-consolidation comparisons require separately validated data and modeling. The shipped tools retain documented scope. Observed indexing, U.S. search volumes, ranking and traffic goals require search data.
