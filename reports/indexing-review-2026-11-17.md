# USFinNexus indexing repair review

Checked November 17, 2026.

## Scope and evidence

All 77 supplied URLs were fetched live before changes and compared with the production export after changes. They comprise 51 canonical article URLs, 17 canonical aliases and 9 supporting resources. The content URLs resolve to 56 distinct preferred destinations. The list alone does not identify Google's exclusion category, selected canonical or current index status.

## Applied changes

- Preserved published article URLs and the existing redirect map. Aliases should consolidate into preferred URLs, not be promoted as separate indexed pages.
- Completed per-page Open Graph/Twitter metadata for the preferred targets and recent November articles.
- Replaced generic-word related-link selection with intent groups, meaningful terms and curated links for key recent posts. Added server-rendered related sections to target/recent articles where missing.
- Corrected substantive content in 9 preferred guides: AI tools, sector investing, geopolitical investing, bond risk, Sunbelt market research, 2026 COLA, refinance, QBI and DTI. Removed unsupported return/ranking/approval promises, old COLA forecasts and incorrect QBI thresholds.
- Reserved the reading-outline structure before hydration to avoid inserting its summary above article content after first paint. Added narrow-screen wrapping, padding and table-containment rules.

## Automated validation

Production export checks across 341 canonical pages:

```json
{
  "pages": 341,
  "missingTitle": 0,
  "emptyHtml": 0,
  "longTitles": 0,
  "missingDescription": 0,
  "h1NotOne": 0,
  "missingCanonical": 0,
  "canonicalMismatch": 0,
  "duplicateH1Title": 0,
  "matchingTitleAndH1": 56,
  "lowTextHtmlRatio": 150,
  "brokenInternalLinks": 0,
  "brokenInternalImages": 0,
  "invalidApplicationSchema": 0,
  "duplicateFaqSchema": 0,
  "sitemapBadUrls": 0,
  "sitemapCanonicalMismatches": 0,
  "sitemapNoindex": 0,
  "redirectedInternalLinks": 0,
  "missingPriorityLinks": 0,
  "oneIncomingInternalLink": 0,
  "depthOver3": 0,
  "missingHstsRule": 0
}
```

## Limits and remaining review

- These checks do not prove Google indexing or rankings. No GSC URL Inspection result was available. The supplied report category heading is missing.
- A new mobile PageSpeed/Lighthouse score and per-URL mobile device screenshots were not measured in this pass. Layout changes are code-level prevention, not a claimed measured Core Web Vitals improvement.
- The 9 named guides received substantive editorial corrections. Other URLs received technical/discovery review, not exhaustive legal/tax/numerical fact checking. The CSV marks this distinction.
- Four historical font hashes returned 404. They are application assets, not article indexing targets; check that no current exported page references them. Sitemap XML, robots.txt and the manifest are discovery/application resources rather than article search-result targets.
- A separate audit runner's semantic scoring and paid keyword/rank data were unavailable because its dependencies/credentials were not configured. No substitute score or invented keyword volume is reported.

## Search Console follow-up

After deployment, inspect representative preferred content URLs, compare Google-selected and user-selected canonicals, and check the exact exclusion category. Request indexing only for the important corrected canonical articles where appropriate, and monitor recrawl after the deployment. Sitemap submission and recrawl requests do not guarantee indexing. Do not submit font files, robots.txt, sitemap XML or redirected aliases as article-indexing priorities.
