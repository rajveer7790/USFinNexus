import fs from 'node:fs';
import path from 'node:path';

const searchTargets = new Map([
  ['/', 'free financial calculators'],
  ['/calculators/mortgage', 'mortgage payment calculator with taxes and insurance'],
  ['/calculators/affordability', 'how much house can I afford'],
  ['/calculators/refinance', 'mortgage refinance break-even calculator'],
  ['/calculators/dti', 'debt-to-income ratio calculator'],
  ['/calculators/auto-loan', 'car payment calculator with sales tax and trade-in'],
  ['/calculators/retirement', 'retirement savings calculator'],
  ['/calculators/income-tax', '2026 federal income tax calculator'],
  ['/calculators/amortization', 'mortgage amortization schedule calculator'],
  ['/calculators/personal-loan', 'personal loan payment calculator with origination fee'],
  ['/calculators/down-payment', 'down payment savings calculator'],
  ['/calculators/student-loan', 'student loan payment calculator with extra payments'],
  ['/calculators/comparison', 'compare mortgage loans side by side'],
  ['/methodology', 'financial calculator formulas and sources'],
  ['/about', 'about USFinNexus editorial standards'],
  ['/articles/fincen-real-estate-reporting-rule-what-llc-buyers-must-do', 'FinCEN real estate reporting rule status'],
  ['/articles/new-york-llc-transparency-act-2026-foreign-owners', 'New York LLC Transparency Act foreign-country LLC filing'],
  ['/articles/2026-tax-changes-20-percent-qbi-deduction-permanent', '2026 QBI deduction limits'],
  ['/articles/california-new-york-texas-state-boi-rules-2026', 'California New York Texas LLC filing requirements'],
  ['/guides/boi-reporting-2026', 'federal BOI reporting requirements'],
  ['/blog/loan-estimate-comparison-checklist-2026', 'Loan Estimate comparison checklist'],
]);
const outDir = path.resolve('out');
if (!fs.existsSync(outDir)) {
  console.error('Missing out/. Run npm run build first.');
  process.exit(2);
}

const htmlFiles = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
};
walk(outDir);

const routeFor = (file) => {
  const rel = path.relative(outDir, file).replaceAll(path.sep, '/');
  if (rel === 'index.html') return '/';
  return `/${rel.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
};

const redirectsPath = path.resolve('public/_redirects');
const redirectSources = new Set(fs.existsSync(redirectsPath)
  ? fs.readFileSync(redirectsPath, 'utf8').split(/\r?\n/).map((line) => line.trim()).filter((line) => line && !line.startsWith('#')).map((line) => line.split(/\s+/)[0])
  : []);
const routeFiles = new Map(htmlFiles.map((file) => [routeFor(file), file]).filter(([route]) => !redirectSources.has(route)));
const decodeEntities = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>');
const normalizeInternal = (href) => {
  try {
    const url = new URL(href, 'https://usfinnexus.com');
    if (url.hostname !== 'usfinnexus.com' && url.hostname !== 'www.usfinnexus.com') return null;
    let pathname = url.pathname.replace(/\/$/, '') || '/';
    return pathname;
  } catch {
    return null;
  }
};

const findings = {
  pages: routeFiles.size,
  missingTitle: [],
  emptyHtml: [],
  longTitles: [],
  missingDescription: [],
  duplicateDescription: [],
  sitemapMissingCanonicalPages: [],
  sitemapSegmentErrors: [],
  missingCalculatorSchema: [],
  missingCalculatorMethodology: [],
  h1NotOne: [],
  missingCanonical: [],
  canonicalMismatch: [],
  duplicateH1Title: [],
  matchingTitleAndH1: [],
  lowTextHtmlRatio: [],
  brokenInternalLinks: [],
  brokenInternalImages: [],
  invalidApplicationSchema: [],
  duplicateFaqSchema: [],
  sitemapBadUrls: [],
  sitemapCanonicalMismatches: [],
  oneIncomingInternalLink: [],
  depthOver3: [],
  missingHstsRule: [],
};

const pageInfo = new Map();
const headingRoutes = new Map();
const titleRoutes = new Map();
const descriptionRoutes = new Map();
const schemaTypes = new Set(['WebApplication', 'SoftwareApplication']);
const jsonLdNodes = (data) => {
  if (Array.isArray(data)) return data.flatMap(jsonLdNodes);
  if (!data || typeof data !== 'object') return [];
  return [data, ...jsonLdNodes(data['@graph']), ...jsonLdNodes(data.mainEntity)];
};

for (const file of routeFiles.values()) {
  const html = fs.readFileSync(file, 'utf8');
  const route = routeFor(file);
  if (html.trim().length === 0) {
    findings.emptyHtml.push(route);
    continue;
  }
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  if (!title) findings.missingTitle.push(route);
  else if (decodeEntities(title).length > 75) findings.longTitles.push({ route, length: decodeEntities(title).length, title: decodeEntities(title) });
  const descriptionTag = html.match(/<meta\b[^>]*\bname=["']description["'][^>]*>/i)?.[0];
  const description = decodeEntities(descriptionTag?.match(/\bcontent=["']([^"']+)/i)?.[1] || '').trim();
  if (!description) findings.missingDescription.push(route);
  else if (route !== '/404') {
    const key = description.toLowerCase().replace(/\s+/g, ' ');
    descriptionRoutes.set(key, [...(descriptionRoutes.get(key) || []), route]);
  }
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) findings.h1NotOne.push({ route, count: h1Count });
  const h1 = decodeEntities(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() || '');
  const canonical = decodeEntities(html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical/i)?.[1] || '');
  if (route !== '/404' && !canonical) findings.missingCanonical.push(route);
  else if (route !== '/404' && normalizeInternal(canonical) !== route) findings.canonicalMismatch.push({ route, canonical });
  const normalizeText = (value) => value.toLowerCase().replace(/\s*[|—–-]\s*usfinnexus.*$/, '').replace(/[^a-z0-9]+/g, ' ').trim();
  // A matching title and H1 on one page is normal. Detect duplicates across
  // canonical routes instead of requiring artificial wording differences.
  if (title && h1 && normalizeText(decodeEntities(title)) === normalizeText(h1)) findings.matchingTitleAndH1.push({ route, title: decodeEntities(title), h1 });
  for (const [map, value] of [[headingRoutes, h1], [titleRoutes, title && decodeEntities(title)]]) {
    if (value && route !== '/404') map.set(normalizeText(value), [...(map.get(normalizeText(value)) || []), route]);
  }
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html;
  const textChars = decodeEntities(body.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).length;
  const ratio = html.length ? Math.round((textChars / html.length) * 10000) / 100 : 0;
  if (ratio < 10) findings.lowTextHtmlRatio.push({ route, ratio, textChars, htmlBytes: html.length });

  const targets = new Set();
  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (/^(#|mailto:|tel:|javascript:)/i.test(href)) continue;
    const target = normalizeInternal(href);
    if (target) targets.add(target);
    if (target && !routeFiles.has(target) && !fs.existsSync(path.join(outDir, target.slice(1)))) {
      findings.brokenInternalLinks.push({ route, href, target });
    }
  }
  const noindex = (html.match(/<meta\b[^>]*\bname=["'](?:robots|googlebot)["'][^>]*>/gi) || [])
    .some(tag => /\bcontent=["'][^"']*\b(?:noindex|none)\b/i.test(tag));
  const quickAnswer = /quick answer|at a glance|short answer/i.test(body.replace(/<script[\s\S]*?<\/script>/gi, ' '));
  pageInfo.set(route, { canonical, targets, title: decodeEntities(title || ''), description, h1, noindex, quickAnswer, schemas: new Set() });
  for (const match of html.matchAll(/<img\b[^>]*src=["']([^"']+)["']/gi)) {
    const src = match[1];
    if (/^(https?:|data:|blob:)/i.test(src)) continue;
    const asset = src.split(/[?#]/)[0].replace(/^\//, '');
    if (asset && !fs.existsSync(path.join(outDir, asset))) findings.brokenInternalImages.push({ route, src });
  }
  let faqSchemaCount = 0;
  let applicationCount = 0;
  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      for (const node of jsonLdNodes(JSON.parse(match[1]))) {
        const types = [node['@type']].flat().filter(Boolean);
        for (const type of types) pageInfo.get(route).schemas.add(type);
        if (types.includes('FAQPage')) faqSchemaCount++;
        if (!types.some(type => schemaTypes.has(type))) continue;
        applicationCount++;
        const missing = ['name', 'description', 'url', 'applicationCategory', 'operatingSystem', 'offers']
          .filter((key) => !node[key]);
        if (node.offers && (node.offers.price === undefined || !node.offers.priceCurrency)) missing.push('offers.price/priceCurrency');
        if (missing.length) findings.invalidApplicationSchema.push({ route, missing });
      }
    } catch {
      findings.invalidApplicationSchema.push({ route, missing: ['valid JSON-LD'] });
    }
  }
  const isCalculator = route.startsWith('/calculators/') || route === '/canada/mortgage-calculator';
  if (isCalculator && !applicationCount && route !== '/calculators/affordability/by-salary') findings.missingCalculatorSchema.push(route);
  if (route.startsWith('/calculators/') && !targets.has('/methodology')) findings.missingCalculatorMethodology.push(route);
  if (faqSchemaCount > 1) findings.duplicateFaqSchema.push({ route, count: faqSchemaCount });
}

for (const [kind, groups] of [['h1', headingRoutes], ['title', titleRoutes]]) {
  for (const [text, routes] of groups) if (routes.length > 1) findings.duplicateH1Title.push({ kind, text, routes });
}
for (const [description, routes] of descriptionRoutes) {
  if (routes.length > 1) findings.duplicateDescription.push({ description, routes });
}
const locations = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const listedRoutes = new Set();
const segments = new Map();
const sitemapPath = path.join(outDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  for (const loc of locations(sitemap)) {
    const target = normalizeInternal(loc);
    if (target) listedRoutes.add(target);
    if (!target || !routeFiles.has(target) || pageInfo.get(target)?.noindex) findings.sitemapBadUrls.push(loc);
    else if (pageInfo.get(target)?.canonical && normalizeInternal(pageInfo.get(target).canonical) !== target) findings.sitemapCanonicalMismatches.push({ loc, canonical: pageInfo.get(target).canonical });
  }
}

for (const [route, info] of pageInfo) {
  if (route !== '/404' && !info.noindex && normalizeInternal(info.canonical) === route && !listedRoutes.has(route)) {
    findings.sitemapMissingCanonicalPages.push(route);
  }
}
const indexPath = path.join(outDir, 'sitemap-index.xml');
if (fs.existsSync(indexPath)) {
  for (const loc of locations(fs.readFileSync(indexPath, 'utf8'))) {
    const segment = normalizeInternal(loc);
    const file = segment && path.join(outDir, segment.slice(1));
    if (!file || !fs.existsSync(file)) {
      findings.sitemapSegmentErrors.push({ missing: loc });
      continue;
    }
    for (const url of locations(fs.readFileSync(file, 'utf8'))) {
      const route = normalizeInternal(url);
      if (!listedRoutes.has(route) || segments.has(route)) findings.sitemapSegmentErrors.push({ segment, url });
      segments.set(route, segment);
    }
  }
  for (const route of listedRoutes) if (!segments.has(route)) findings.sitemapSegmentErrors.push({ uncovered: route });
} else findings.sitemapSegmentErrors.push({ missing: '/sitemap-index.xml' });

const incoming = new Map([...routeFiles.keys()].map((route) => [route, 0]));
for (const { targets } of pageInfo.values()) for (const target of targets) if (incoming.has(target)) incoming.set(target, incoming.get(target) + 1);
findings.oneIncomingInternalLink = [...incoming].filter(([route, count]) => route !== '/' && route !== '/404' && count <= 1).map(([route, count]) => ({ route, count }));
const depth = new Map([['/', 0]]);
const queue = ['/'];
while (queue.length) {
  const route = queue.shift();
  for (const target of pageInfo.get(route)?.targets || []) {
    if (routeFiles.has(target) && !depth.has(target)) {
      depth.set(target, depth.get(route) + 1);
      queue.push(target);
    }
  }
}
findings.depthOver3 = [...routeFiles.keys()].filter((route) => route !== '/404' && (!depth.has(route) || depth.get(route) > 3)).map((route) => ({ route, depth: depth.get(route) ?? null }));
const headersPath = path.resolve('public/_headers');
if (!fs.existsSync(headersPath) || !/Strict-Transport-Security:\s*max-age=/i.test(fs.readFileSync(headersPath, 'utf8'))) findings.missingHstsRule.push('public/_headers');

for (const key of Object.keys(findings)) {
  if (key === 'pages') continue;
  if (Array.isArray(findings[key])) {
    const seen = new Set();
    findings[key] = findings[key].filter((item) => {
      const encoded = JSON.stringify(item);
      if (seen.has(encoded)) return false;
      seen.add(encoded);
      return true;
    });
  }
}

const counts = Object.fromEntries(Object.entries(findings).map(([key, value]) => [key, Array.isArray(value) ? value.length : value]));
fs.mkdirSync('reports', { recursive: true });
fs.writeFileSync('reports/seo-audit.json', `${JSON.stringify({ counts, findings }, null, 2)}\n`);
const csvCell = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const columns = ['route', 'topic', 'topic_source', 'intent', 'title', 'h1', 'description', 'canonical', 'sitemap_segment', 'index_directive', 'quick_answer_marker', 'schema', 'internal_inlinks', 'internal_outlinks', 'click_depth'];
const rows = [columns];
for (const [route, info] of [...pageInfo].sort(([a], [b]) => a.localeCompare(b))) {
  if (route === '/404') continue;
  const segment = segments.get(route) || '';
  const editorial = /^\/(blog|articles|guides)\//.test(route);
  const tool = route.startsWith('/calculators/') || route === '/canada/mortgage-calculator';
  const assigned = searchTargets.get(route);
  rows.push([route, assigned || info.h1, assigned ? 'curated query' : 'page topic from H1',
    tool ? 'calculator' : editorial ? 'editorial' : segment === '/sitemap-geo.xml' ? 'regional research' : 'navigation or reference',
    info.title, info.h1, info.description, info.canonical, segment, info.noindex ? 'noindex' : 'index allowed',
    info.quickAnswer ? 'found' : 'not detected', [...info.schemas].sort().join(' '),
    incoming.get(route), info.targets.size, depth.get(route) ?? 'unreachable']);
}
fs.writeFileSync('reports/seo-url-inventory.csv', rows.map(row => row.map(csvCell).join(',')).join('\n') + '\n');
console.log(JSON.stringify(counts, null, 2));
const blocking = ['emptyHtml', 'missingTitle', 'missingDescription', 'h1NotOne', 'missingCanonical', 'canonicalMismatch', 'duplicateH1Title', 'brokenInternalLinks', 'brokenInternalImages', 'invalidApplicationSchema', 'duplicateFaqSchema', 'sitemapBadUrls', 'sitemapMissingCanonicalPages', 'sitemapSegmentErrors', 'missingCalculatorSchema', 'missingCalculatorMethodology', 'sitemapCanonicalMismatches', 'depthOver3', 'missingHstsRule'];
if (blocking.some((key) => findings[key].length)) process.exitCode = 1;
