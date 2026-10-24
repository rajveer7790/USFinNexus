# October 24 audit: implementation plan and traceability

Source: the supplied 22-page SEO/AEO/GEO PDF, read in layout and raw-text passes. This is a status ledger, not a claim that every proposal is complete. Validation evidence is in `audit-oct24-verification.json`, `seo-audit.json`, and the production crawl report when available.

## Plan and acceptance criteria

1. Reproduce crawl/rendering claims against current `main` and raw production HTML. Do not treat a third-party fetch failure or `site:` result count as definitive GSC coverage.
2. Fix shared rendering/FAQ defects, financial calculation errors and misleading privacy/trust statements first.
3. Restore the empty article; improve existing tools and add server-rendered examples with explicit assumptions.
4. Rebuild; test each canonical exported URL for H1-before-footer, FAQ parity, metadata, images, links and sitemap consistency. Run numerical boundary tests.
5. Recheck against every document issue. Deploy only validated changes, then crawl production. Keep incomplete product ideas and owner-dependent items visible.

## Core finding ledger (PDF pages 1–15, 20–22)

| ID | Finding / requested change | Treatment and acceptance evidence |
|---|---|---|
| T01 | Footer before H1 / content | Confirmed raw production streaming defect. Remove route loading boundaries and server-page dynamic skeleton imports; regression checks H1 before footer on every sitemap URL. |
| T02 | Calculator below prose | Server pages import calculators directly before guides; dedicated payoff UI added. Verify raw exported order; do not confuse an async streamed shell with final browser layout. |
| T03 | FAQ answers 2–6 missing | Shared FAQ uses native details/summary with every answer in initial HTML. No interaction needed to discover text. |
| T04 | Standalone FAQ markup not matching visible answers | Additional defect found during parity checks: remove legacy schema-only FAQ arrays instead of inventing visible answers. Preserve visible content and correctly matched FAQ schema. Some legacy pages therefore have no FAQ schema pending a substantive editorial rewrite. |
| T05 | Sitemap inaccessible | Existing sitemap was present, not a missing implementation. Add reproducible segmented sitemaps and index, retain canonical root sitemap, omit redirects. Check production HTTP status separately. |
| T06 | robots inaccessible / AI rules | Existing wildcard allow was present. Add explicit search-crawler rules and sitemap index. No bypass of bot security or guaranteed crawl claim. |
| T07 | llms discovery | Existing file contained false universal PDF/privacy/compliance claims. Replace with accurate canonical calculator catalog, formulas, source notes and optional full catalog. Not a Google ranking requirement. |
| T08 | Calculator hub missing | Hub already exists; keep live tools discoverable and correct CA/TX/FL mortgage labels. |
| T09 | Mortgage-rate inconsistency | Source-dated shared PMMS module: October 22, 2026, 7.32% / 6.68%. Home widget, rate page and shared sidebar consume it. Weekly automatic ingestion remains pending. |
| T10 | Homepage H1 glue / duplicate ticker | Explicit space between styled words; one ticker data sequence. Short descriptive U.S. 2026 metadata rather than the PDF's overlong suggested title. |
| T11 | Homepage organization / website schema missing | Already implemented in root layout. Preserve; do not duplicate. |
| T12 | Duplicate Home breadcrumb | Shared component omits a repeated root item. |
| T13 | Rates thin / payment matrix | Add eight explicit 30-year rate scenarios for $300k/$400k/$500k; not invented credit-score offers. Historical rate archive and automatic weekly refresh remain pending. |
| T14 | Anonymous / unverifiable credentials | Improve about-page editorial responsibility and organizational schema. No invented CFP/CPA/EA/NMLS identities. Verified named reviewer profiles require the owner's actual reviewer details and consent. |
| T15 | Fake/incomplete NY address and contact | Remove unverifiable address and response-time guarantee; clickable existing contact email. Inbox deliverability and a backend support form remain unverified/pending. |
| T16 | Methodology sources / schema | Link direct IRS/FHFA/SSA source references. Additional CreativeWork metadata can describe methodology; do not label calculator assumptions as an original government Dataset. |
| T17 | Privacy / AdSense conflict | Rewrite input privacy pages; distinguish browser calculation inputs from ads, cookies, logs and external services. Remove absolute anonymity/security claims and blanket claims about competitors. |
| T18 | Canada geography | Remove global-footer link, preserve useful pages, use self-language metadata. Do not invent reciprocal translations between non-equivalent pages. Moving domain or deleting Canada is not required; deeper Canada expansion remains pending. |
| P01 | Mortgage generic title / FHA badge | Replace approval-like FHA badge with a cost-comparison prompt; eligibility is not established by loan amount/down payment alone. |
| P02 | Privacy calculator cannibalization | Retain distinct no-contact-details intent with workflow comparison, explicit privacy limits and FAQs. Not a duplicate generic mortgage landing. |
| P03 | Affordability insurance/HOA/MI | Add insurance and HOA inputs, illustrative conventional PMI, solve price including property tax and expenses, separate conservative/stretch budgets. Salary and rate benchmark table added. |
| P04 | Refinance favorable verdict / term reset | Require positive lifetime net savings as well as monthly savings and break-even; add match-remaining-months control. Full holding-period NPV remains a separate enhancement. |
| P05 | Raw amortization rows | Mortgage schedule defaults to annual view; personal schedule collapsible. Auto schedule treatment and further consolidation remain pending. |
| P06 | Mortgage payoff cloned purchase inputs | New dedicated balance/months/rate/extra-monthly/extra-annual/immediate-lump-sum UI with unchanged base payment, savings outputs and five visible FAQs. |
| P07 | Down payment linear savings | Add user APY assumption and month-end compounding. No current HYSA offer invented. Extra FAQ expansion remains pending. |
| P08 | Closing-cost dual guide / typo / FAQ | Retain single neutral intent section and existing shared FAQs; remove old sensational duplicate section containing the typo. Add prepaid-interest scenario table. Exact 50-state statutory tax tables remain pending. |
| P09 | DTI lump sum only | Add proposed PITI/HOA, auto, student, card minimums and other debt; show front-end and total DTI. No universal approval claim. |
| P10 | Rent/buy inverted year-one break-even | Include explicit 3% acquisition costs, selling costs and initial reserve opportunity growth. Compare net costs consistently and report no break-even when absent. Annual comparison table added. Monthly savings investing/tax benefits remain excluded and disclosed. |
| P11 | NY true local taxes / 600+ words | State-specific illustrative defaults and corrected ZIP mapping are included. NYC recording/mansion tax, county/co-op logic and substantive local rewrite remain pending official-source implementation. |
| P12 | FHA MIP tiers / shared widget | Correct tiered annual MIP by term/base/LTV and fee-duration cost approximation; remove double-counted financed upfront fee. Add HUD matrix and source. Actual declining-balance annual MIP calculation remains disclosed as a limitation. |
| P13 | VA funding-fee table / residual income | Funding-fee matrix included. Dedicated residual-income region/family-size underwriting model remains pending. |
| P14 | Government comparison tabs | Add same-price FHA/VA/USDA/conventional starting-payment comparison; eligibility not inferred. Program-specific quotes still required. |
| P15 | HELOC dual guide / stress scenarios | Keep neutral guide, add $75k same-balance 7%–11% interest-only/repayment table. This is an assumed rate shock, not a Prime forecast. |
| P16 | ARM modern labels / FAQs | 5/6, 7/6, 10/6 initial-period labels added. First-reset/lifetime stress model is not a full six-month reset simulator; full path and six-FAQ expansion remain pending. |
| P17 | Rental zero SSR / hidden closing / DSCR | Compute default results synchronously; expose $6k closing-cost input; use 25% down and $2,600 rent. Show explicitly labeled NOI-based DSCR, not lender gross-rent/PITIA ratio. Benchmark cash flow and initial cash are explicit. |
| P18 | Auto duplicate tone / schedule / tax eligibility | Remove sensational duplicate prose; retain neutral intent guide and term-cost matrix. Exact vehicle eligibility checker and auto schedule collapse remain pending. |
| P19 | Student loan duplicate tone / RAP | Remove sensational duplicate guide; retain clear model limits. RAP/IBR simulator and official-rate preset selector remain pending; do not present fixed amortization as federal eligibility advice. |
| P20 | Personal loan fee missing | Add withheld origination fee, net proceeds, estimated cash-flow APR and collapsible payoff schedule. Compare legally disclosed lender APR separately. |
| P21 | Credit-card chart / false math | Replace SSR loading placeholder with accessible SVG. Remove old duplicate prose containing wrong $125 example; add calculated fixed-payment benchmarks. Promo-transfer comparison remains pending. |
| P22 | Debt strategies same defaults | Small low-rate student debt versus larger high-rate card creates a useful real comparison. |
| P23 | Budget 60/20/20 | Add selectable planning targets while preserving actual spending and unallocated cash. No claim a rule fits every household. |
| P24 | Retirement missing limits / tone | Replace alarmist prose with official 2026 401(k)/IRA and catch-up table, Roth catch-up context and risk notes. Contribution-eligibility simulator remains pending. |
| P25 | FIRE variants | Full Coast/Lean/Barista UI and deterministic SSR result refactor remain pending. The general benchmark does not substitute for those features. |
| P26 | Investment fee/frequency | Add annual/quarterly/monthly/daily nominal compounding and annual expense drag; disclose contribution timing and uncertainty. |
| P27 | Crypto filing statuses / flat brackets / NIIT | Four statuses, progressive incremental ST tax, LTCG band stacking, separate MAGI and NIIT threshold. Excludes other investments, carryovers, deduction benefits and state tax. 1099-DA detail expansion remains pending. |
| P28 | Options zero SSR / unsafe loop | Memoized results render immediately; bounded 51-point loop cannot hang at zero stock price. Section 1256 explanation and product-specific eligibility remain pending. |
| E01 | Empty student-loan article | Restore substantial after-tax comparison guide, six FAQs, official sources, current modified date, links and interactive assumption-based hurdle widget. Preserve original publication date. |
| E02 | Placeholder excerpts / titles / categories | Current discovery already reads actual descriptions and has title fixes; validate current exported cards, not the old 87-card snapshot. Remaining body-level factual/sensational copy needs manual editorial review. |
| E03 | Garbled currency / escapes | Current titles already restore $10,000. Full body/source integrity scan is part of verification; no blanket date bump. |
| E04 | Cannibalizing pairs | Existing redirects already cover several pairs. Additional HELOC/escrow/refinance/15-v-30 consolidation requires content comparison and valuable-section migration; not blindly redirecting distinct intents. |
| E05 | Software schema | Add an accurate SoftwareApplication main entity with free offer inside WebPage. No fabricated reviews/ratings and no rich-result promise. |
| E06 | Benchmarks across tools | Shared server-rendered scenario tables added across supported calculator intents with units, assumptions and exclusions. A missing specialized table is not silently replaced by irrelevant loan math. |
| E07 | Outreach / authority | No external outreach sent. Requires verified recipients, approved message and owner direction. Claimed backlink counts/KD/citation probabilities in the PDF lack a reproducible dataset and are not accepted as measured facts. |
| E08 | GSC indexation / success metrics | Live accessibility is testable; actual index counts, selected canonical, clicks/impressions and recrawl require Search Console access/export. Indexing, rankings, snippets and backlinks are not guaranteed engineering acceptance tests. |
| E09 | Description-length recommendation | A separate decoded-output scan finds 78 descriptions longer than 160 characters in the current library. These need individual editorial rewrites; this run does not blindly cut sentences or claim the recommendation is complete. Length is not itself a robots/indexing block. |

## All 50 opportunity rows (PDF pages 16–20)

These are explicitly accounted for. Existing/partial means the named capability is not a completed new product. Keyword difficulty, search volume and “viral” demand are unverified hypotheses, not imported metrics.

| # | Proposed topic / target | Status |
|---|---|---|
| 1 | Escrow shortage | Existing tool, SSR examples; RESPA full cushion expansion pending |
| 2 | Mortgage recast vs refinance | Pending new calculator |
| 3 | Buydown vs price cut | Existing related tools/article; dedicated comparator pending |
| 4 | LPMI vs BPMI | Pending calculator |
| 5 | Seller credit allocation optimizer | Existing article; optimizer pending |
| 6 | PMI appraisal break-even | Existing removal tool; seasoning/appraisal extension pending |
| 7 | Piggyback vs PMI | Pending calculator |
| 8 | Biweekly fees vs DIY | Dedicated payoff inputs and explanatory FAQ; fee comparator pending |
| 9 | Prepaid daily interest | Static calculated scenarios; closing-date UI pending |
| 10 | Points + refinance horizon | Existing points tool; opportunity-cost horizon pending |
| 11 | Assumable mortgage equity gap | Pending calculator |
| 12 | FHA down payment / 11-year MIP | Tier and duration fixes + official matrix; full lifetime declining-MIP comparison pending |
| 13 | VA fee first/subsequent | Existing interactive fee logic, static matrix and side-by-side comparison |
| 14 | VA residual income | Pending calculator |
| 15 | Rental DSCR | Added NOI/debt-service ratio, explicitly not rent/PITIA underwriting |
| 16 | FHA streamline net tangible benefit | Pending; requires product/term-specific rules, not one universal shortcut |
| 17 | VA IRRRL recoupment | Pending calculator |
| 18 | FHA 3–4-unit self-sufficiency | Pending calculator |
| 19 | Bank-statement qualifying income | Pending; lender expense-factor assumptions must be explicit |
| 20 | Chattel vs FHA Title I | Existing article; comparator pending |
| 21 | Car-loan-interest deduction | Existing article; eligibility calculator pending; VIN prefix alone is insufficient verification |
| 22 | Overtime deduction | Existing article; calculator pending |
| 23 | Tips deduction | Existing article; calculator pending |
| 24 | Senior deduction | Existing article; calculator pending |
| 25 | SALT cap | Existing article; itemization/phaseout calculator pending |
| 26 | Trump Account vs 529 | Existing Trump Account tool; comparator pending |
| 27 | Split-year mileage | Pending calculator; official midyear rates require date-split entries |
| 28 | Crypto gains + NIIT / 1099-DA | Calculation corrections implemented; reporting-guide expansion pending |
| 29 | Medicare IRMAA cliff | Existing article; calculator pending |
| 30 | Roth conversion bracket filler | Pending calculator |
| 31 | NYC recording/mansion tax | Pending specialized local model |
| 32 | CA Prop 13 / supplemental bill | State assumptions improved; statutory calculator pending |
| 33 | TX homestead / MUD | State assumptions improved; current exemptions and district model pending |
| 34 | FL documentary / intangible tax | State assumptions improved; exact statutory closing-tax model pending |
| 35 | PA transfer tax | Pending jurisdiction-specific calculator |
| 36 | NJ mansion / graduated transfer fee | Pending; PDF's buyer-pays framing must be checked against current law before implementation |
| 37 | Cook County taxes/proration | Pending local calculator |
| 38 | WA REET | Pending current marginal-bracket/local-rate calculator |
| 39 | MD first-time-buyer transfer tax | Pending county-specific calculator |
| 40 | County FHA/conforming lookup | Pending verified dataset and lookup |
| 41 | RAP vs IBR | Pending federal-plan model; current government tool linked where relevant |
| 42 | Auto rebate vs zero APR | Existing article; calculator pending |
| 43 | Negative-equity trade-in | Existing auto input coverage requires dedicated comparison mode |
| 44 | Origination fee / net proceeds / APR | Implemented basic withheld-fee model; gross-up-to-target shortcut pending |
| 45 | Balance transfer vs personal loan | Pending comparator |
| 46 | Super catch-up / Roth | Official limits and explanation added; eligibility calculator pending |
| 47 | Coast / Barista FIRE | Pending dedicated outputs and offset slider |
| 48 | HSA vs Roth | Existing guides; calculator pending |
| 49 | T-bills vs HYSA equivalent yield | Existing guide; calculator pending |
| 50 | Social Security earnings withholding | Existing 2026/2027 guides; calculator pending |

## Owner-dependent items

- Actual founder/editor/reviewer identity, professional credentials and approved profile links; none invented.
- Verifiable business address if the owner elects to publish one; none invented.
- Confirmed support inbox delivery and choice of backend form provider.
- Search Console property access/current export for indexation, impressions, clicks and canonical inspection.
- Approved recipient list and message for outreach. No automatic unsolicited messages.
- New-product backlog and jurisdiction-specific legal/tax QA. Existing fixes do not mean all 50 future tools have been built.

## Verification evidence before deployment

- Production build and TypeScript validation completed; 337 generated routes include alias/redirect exports, not 337 unique canonical pages.
- Two final document regression passes: 295 canonical sitemap pages, 831 FAQ answers matching initial HTML, 51 pages with calculated benchmark tables, no failing assertions.
- Financial boundaries checked for amortization, progressive crypto tax, LTCG stacking, MFS NIIT, affordability expenses/DTI, rent-versus-buy break-even direction and FHA term/LTV premium tiers.
- SEO audit: 296 HTML pages inspected; zero missing or mismatched canonicals, missing titles/descriptions, H1-count errors, broken internal links/images, invalid application schema, duplicate FAQ schema, sitemap mismatches or pages beyond crawl depth three. Text/HTML-ratio warnings remain a heuristic, not a content-quality pass.
- Restored student-loan decision guide exceeds 1,800 rendered words. Existing Roth-versus-401(k) guide currently renders about 1,500 words; the historical empty-body report is not current for that URL.
- Added one-hop aliases for `/refinance-calculator`, `/pmi-removal` and `/calculators/points`. Actual Google-selected canonical and recrawl status remain unverified without GSC.
- Production accessibility/deployment is a separate acceptance gate; see `audit-oct24-production.json` after the live crawl. The `www` host and account-level Cloudflare settings are not claimed fixed by a source-code deployment.
