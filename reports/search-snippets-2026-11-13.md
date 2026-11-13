# Search appearance and content corrections — November 13, 2026

## Evidence and limits

Reviewed the ten supplied mobile Google screenshots for the branded query `usfinnexus free mortgage`. Multiple unrelated result snippets reproduce footer marketing, copyright, disclaimers or author biography instead of page-specific answers. The domain-only display in a mobile result does not mean every page has the same canonical URL. The screenshots show results for one branded query, not verified U.S. non-brand keyword positions.

Fresh public searches covered the brand, site-specific mortgage/refinance/HELOC queries, refinance break-even, amortization extra payments and rent-versus-buy opportunity cost. Search indexes surfaced the homepage, about, mortgage calculator, affordability, blog and other pages, but returned mixed crawl dates and results. This does not establish complete index coverage, Google ranking positions, clicks, impressions or CTR. No search volumes or ranking gains are invented.

No connected Search Console analytics tool was available. OpenSEO was discovered as an available, uninstalled integration and suggested; it was not represented as connected. A property-authorized GSC connection or query/page export is required before making evidence-based ranking and CTR prioritization decisions. Do not confuse public result order with GSC average position.

## Search-intent mapping (targets, not measured rankings)

| URL | Primary intent | Supporting questions |
| --- | --- | --- |
| `/` | USFinNexus free mortgage and finance calculators | taxes/insurance, available tools, no account required |
| `/calculators/refinance` | mortgage refinance calculator | closing costs, break-even, remaining term, cash-flow versus lifetime costs |
| `/calculators/amortization` | mortgage amortization schedule | principal versus interest, extra payments, biweekly schedules, payoff quote |
| `/calculators/rent-vs-buy` | rent vs buy calculator | opportunity cost, sale equity, transaction costs, break-even year |

## Implemented changes

- Shared footer wrapper, calculator disclaimer banner and repeated author-bio wrapper use `data-nosnippet` on supported `div` elements. Content remains visible and links remain crawlable; no blanket page-wide `nosnippet`, noindex or robots blocking was introduced. Main article/tool content and dedicated legal-page copy remain eligible.
- Branded homepage title, OG/Twitter titles and a clear tool-specific introduction strengthen first-party identity without changing the homepage URL.
- Refinance H1 and introduction now identify the mortgage intent and example inputs. Expanded the guide with cost categories, a hypothetical $4,500/$150=30-month payback example, term-reset comparison, actual formula limitations, lender credits and relevant internal links. The tool does not automatically model financed costs, cash-out or after-tax/present-value economics; copy says so.
- Replaced amortization overgeneralizations: no universal 80% first-year interest share, fixed crossover year, guaranteed six-year payoff reduction, exhaustive three-event change list or misleading automatic payment reduction. Added formula, a verifiable hypothetical example, extra-principal caveats, correct biweekly distinction, servicing reconciliation and five visible/schema-matched FAQs.
- Replaced rent-versus-buy claims of guaranteed rent growth, universal buying superiority, fixed break-even years and assumed tax benefits. Metadata/schema no longer claim live 2026 market inputs or tax savings. Expanded the guide to match `calcRentVsBuy`: transaction costs, upfront and monthly cash differences, modeled sale equity, year-end crossing and explicit exclusions for PMI, tax deductions and renter’s insurance. Five visible/schema-matched FAQs added.
- Revision dates updated only for the substantively revised homepage and three calculator routes in the sitemap, plus relevant calculator WebPage metadata. No URL renaming or duplicate landing pages created.

## Primary guidance and arithmetic

- Google snippet controls: https://developers.google.com/search/docs/appearance/snippet — snippets depend on query and page content; page descriptions are not guaranteed replacements. Supported partial exclusions are used instead of removing disclosures.
- Google AI features: https://developers.google.com/search/docs/appearance/ai-features — helpful text, crawlability, internal links and accurate structured data remain applicable. No special AI schema or guaranteed AI inclusion is claimed.
- CFPB refinancing handout: https://files.consumerfinance.gov/f/documents/cfpb_should_i_refinance_handout.pdf
- CFPB comparable loan choices: https://www.consumerfinance.gov/owning-a-home/explore/select-the-kind-of-loan-that-fits-your-needs/
- CFPB no-closing-cost financing: https://www.consumerfinance.gov/ask-cfpb/is-there-such-a-thing-as-a-no-cost-or-no-closing-loan-or-refinancing-en-141/
- CFPB amortization: https://www.consumerfinance.gov/ask-cfpb/how-does-paying-down-a-mortgage-work-en-1943/
- CFPB payment formula context: https://www.consumerfinance.gov/ask-cfpb/how-do-mortgage-lenders-calculate-monthly-payments-en-1965/
- CFPB rent/buy scenario testing: https://www.consumerfinance.gov/owning-a-home/prepare/consider-whether-its-the-right-time-for-you-to-buy/
- CFPB ownership costs: https://www.consumerfinance.gov/ask-cfpb/what-are-some-of-the-financial-considerations-of-buying-a-home-en-119/
- Fannie Mae cost checklist: https://yourhome.fanniemae.com/buy/rent-vs-buy-whats-right-you

Hypothetical amortization check: $300,000 at 6%, 360 monthly periods produces about $1,798.65 P&I. First interest $1,500; principal about $298.65; remaining principal about $299,701.35. These are examples, not current offers. Formula behavior was checked against the existing source; calculator math itself was not changed in this release.

## Validation and handoff criteria

`scripts/check-search-snippets.mjs` audits rendered footer exclusions without treating serialized redirect payloads as rendered pages, verifies main content is not excluded, checks guide/FAQ/schema presence, metadata and actual revision dates. Initial focused checks found 360 rendered pages with protected footers and guide word counts of 722 (refinance), 714 (amortization) and 868 (rent/buy), excluding separate FAQ components.

Responsive browser smoke tests passed at 320, 390 and 1440 pixels across homepage, all three revised calculators, blog hub, a recent blog post and about page: 21 route/viewport checks, no horizontal overflow, bottom scrolling, one H1, visible footer, eligible main content and no runtime errors. The refinance input interaction updated results. These are not new Lighthouse or field Core Web Vitals scores.

Production build/type and repository SEO validation must pass on final source before publishing. Existing unrelated lint warnings remain. Publish only intentional files on the current main tree with a branch-head lease, then verify Cloudflare and the actual live markup. Google must recrawl/reprocess before changes can affect search appearance; no immediate snippet, ranking, rich-result or AI-citation guarantee is made. All site content was not rewritten: shared protections are site-wide, while substantive content work in this release targets the three named calculators.

Final source passed `npm run verify` (production build/type validation, discovery generation and SEO audit). The 333-page canonical audit reports zero broken internal links/images, missing canonicals, invalid application schemas, duplicate FAQ schemas or sitemap errors. Existing lint remains 530 warnings with zero errors. Informational low-text/HTML findings decreased from 159 to 157; this is a markup ratio, not a ranking or traffic metric. The snippet-specific regression script passed all checks including the four targeted last-modified dates.
