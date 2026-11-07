# November 7 USFinNexus audit reconciliation

The supplied 12-page audit describes an older inventory. The implementation below preserves the existing canonical routes and separates published code, existing capabilities, and work that still needs verified data or business authorization. The audit's traffic forecasts and competitor claims are estimates.

| Audit section | Current status |
| --- | --- |
| Homepage | Updated title, H1 and mortgage CTA. WebSite and Organization JSON-LD already present in the root layout. Centralized the source date and refreshed Freddie Mac PMMS to November 5, 2026. |
| Methodology | TechArticle schema and readable formula explanations already exist. Added prominent methodology and privacy links to the 12 calculator pages named in the audit. |
| About / editorial board | Existing institutional attribution remains. Named reviewer profiles, credentials and Person markup require real reviewers, verified credentials and permission to publish. |
| Contact | Published contact channel already exists. Registration identifiers and a ticket workflow require verified business details and a configured, monitored endpoint with privacy terms. |
| Privacy / terms / disclaimer | Added scoped browser-processing and no-signup language to the reviewed tools. Shared result disclaimer links to the full disclaimer and privacy policy. Advertising and hosting disclosures remain relevant. |
| Calculator markup | Verified existing WebApplication and breadcrumb usage through export audit. Retained relevant visible FAQs. A calculator is an educational application, so FinancialProduct and GovernmentService are inappropriate for pages that offer neither a product nor a government service. |
| Mortgage | Added PITI answer and biweekly link. Monthly/yearly tables, extra payments, charts, PDF/CSV and dedicated biweekly page already exist. ZIP estimates are labeled illustrative, and unknown ZIPs no longer overwrite user assumptions. Actual parcel tax and insurance data still require verified local data. |
| Affordability | Added answer. The separate FHA/VA/USDA comparison and salary variants already exist. A lender approval model for VA/FHA manual underwriting needs verified eligibility, residual-income and compensating-factor rules. |
| Refinance | Added cash-out, financing fees, upfront cost and new balance. Simple break-even applies only to rate-and-term scenarios with cash fees and overlapping payment terms. |
| DTI | Added worked front/back-end definition. The existing color gauge and planning reference table already cover the visual request. Removed a shared sidebar's universal 43% claim. Underwriting thresholds are not approval predictions. |
| Auto loan | Added optional insurance, fuel/charging, maintenance and residual value through loan payoff. Existing CSV remains. |
| Retirement | Existing projection chart retained. A Social Security benefit estimate requires earnings history or a user-supplied SSA estimate. Sequence-of-returns simulation needs documented assumptions and validation. |
| Federal income tax / paycheck | Added traditional 401(k), eligible cafeteria-plan HSA, pay frequency and user-entered state/local tax per paycheck. A salary/hourly payroll withholding tool with state and local tables is separate and remains open. |
| Amortization | Monthly/annual schedule and charts already exist. Added quick answer with a link to calculation methodology. |
| Personal loan | Origination fee and net-proceeds handling already exist. Added a direct answer distinguishing proceeds from repayment principal. |
| Down payment | APY modeling already exists. Added answer clarifying closing costs and reserves. |
| Student loan | Existing payoff and repayment assumption tools plus an embedded payoff-vs-invest illustration. Full federal program comparisons need current Federal Student Aid rules and eligibility validation. |
| Loan comparison | Added client-side side-by-side PDF with the current comparison inputs/results. |
| FinCEN real-estate article | Preserved the court-vacatur alert and closing checklist. Added financing links with a clear boundary between financing estimates and reporting status. A mandatory-filing HowTo would misstate current FinCEN guidance. |
| New York LLC article | Added federal/state comparison and downloadable educational review checklist. Existing canonical URL remains. |
| QBI article | Updated incorrect 2026 thresholds, removed misleading savings cards, and added a scoped below-threshold 20% illustration with IRS sources and exclusions. |
| Student debt vs investing article | Existing interactive StudentDebtDecision and calculator links satisfy the requested embedded scenario. |
| 401(k) hardship article | Existing two-scenario tax matrix retained. Added IRS Publication 575 citation. |
| Missing tools | HELOC, FHA, VA, rent-vs-buy and snowball/avalanche already exist. Added CD Ladder with editable deposits, APY, and terms. Full paycheck withholding remains open as above. |
| Regional SEO | State mortgage calculators and state/city affordability datasets already exist. Do not substitute audit-supplied insurance averages for sourced data. Expansion to 50 states and metro pages requires jurisdiction-specific sources, unique utility, and formula review before indexing. |
| Growth roadmap | The existing daily editorial workflow continues. The proposed 20-guide series, research index, embeds, outreach, attribution reporting and monetization are distinct projects. Outreach requires explicit recipient and send authorization, and sponsorships or affiliates require real commercial arrangements. |
| Measurement / governance | Use Search Console and Cloudflare metrics to establish a baseline. Review tax tables, mortgage limits and dated market assumptions against first-party sources before publishing changes. Indexing, citation share, CTR and the 100K goal need measured results. |

## Primary references

- Freddie Mac PMMS archive: https://www.freddiemac.com/pmms/pmms_archives
- FinCEN Residential Real Estate filing status: https://www.fincen.gov/rre-filing-resources
- FinCEN BOI scope: https://www.fincen.gov/boi
- New York Department of State FAQ: https://dos.ny.gov/beneficial-ownership-disclosure-frequently-asked-questions
- IRS 2026 brackets and QBI thresholds: https://www.irs.gov/irb/2025-45_IRB
- IRS retirement and HSA references: https://www.irs.gov/taxtopics/tc424 and https://www.irs.gov/publications/p969
