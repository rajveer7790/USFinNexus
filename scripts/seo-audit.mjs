import fs from 'node:fs';
import path from 'node:path';

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
  h1NotOne: [],
  missingCanonical: [],
  canonicalMismatch: [],
  duplicateH1Title: [],
  lowTextHtmlRatio: [],
  brokenInternalLinks: [],
  brokenInternalImages: [],
  invalidApplicationSchema: [],
  sitemapBadUrls: [],
  sitemapCanonicalMismatches: [],
  oneIncomingInternalLink: [],
  depthOver3: [],
  missingHstsRule: [],
};

const pageInfo = new Map();

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
  if (!/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+/i.test(html) &&
      !/<meta[^>]+content=["'][^"']+["'][^>]+name=["']description["']/i.test(html)) {
    findings.missingDescription.push(route);
  }
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) findings.h1NotOne.push({ route, count: h1Count });
  const h1 = decodeEntities(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() || '');
  const canonical = decodeEntities(html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical/i)?.[1] || '');
  if (route !== '/404' && !canonical) findings.missingCanonical.push(route);
  else if (route !== '/404' && normalizeInternal(canonical) !== route) findings.canonicalMismatch.push({ route, canonical });
  const normalizeText = (value) => value.toLowerCase().replace(/\s*[|—–-]\s*usfinnexus.*$/, '').replace(/[^a-z0-9]+/g, ' ').trim();
  if (title && h1 && normalizeText(decodeEntities(title)) === normalizeText(h1)) findings.duplicateH1Title.push({ route, title: decodeEntities(title), h1 });
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
  pageInfo.set(route, { canonical, targets });
  for (const match of html.matchAll(/<img\b[^>]*src=["']([^"']+)["']/gi)) {
    const src = match[1];
    if (/^(https?:|data:|blob:)/i.test(src)) continue;
    const asset = src.split(/[?#]/)[0].replace(/^\//, '');
    if (asset && !fs.existsSync(path.join(outDir, asset))) findings.brokenInternalImages.push({ route, src });
  }
  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(match[1].replaceAll('&quot;', '"').replaceAll('&amp;', '&'));
      const nodes = Array.isArray(data) ? data : data['@graph'] || [data];
      for (const node of nodes) {
        if (!['WebApplication', 'SoftwareApplication'].includes(node?.['@type'])) continue;
        const missing = ['name', 'description', 'url', 'applicationCategory', 'operatingSystem', 'offers']
          .filter((key) => !node[key]);
        if (node.offers && (node.offers.price === undefined || !node.offers.priceCurrency)) missing.push('offers.price/priceCurrency');
        if (missing.length) findings.invalidApplicationSchema.push({ route, missing });
      }
    } catch {
      findings.invalidApplicationSchema.push({ route, missing: ['valid JSON-LD'] });
    }
  }
}

const sitemapPath = path.join(outDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const target = normalizeInternal(loc);
    if (!target || !routeFiles.has(target)) findings.sitemapBadUrls.push(loc);
    else if (pageInfo.get(target)?.canonical && normalizeInternal(pageInfo.get(target).canonical) !== target) findings.sitemapCanonicalMismatches.push({ loc, canonical: pageInfo.get(target).canonical });
  }
}

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
console.log(JSON.stringify(counts, null, 2));
const blocking = ['emptyHtml', 'missingTitle', 'missingDescription', 'h1NotOne', 'missingCanonical', 'canonicalMismatch', 'duplicateH1Title', 'brokenInternalLinks', 'brokenInternalImages', 'invalidApplicationSchema', 'sitemapBadUrls', 'sitemapCanonicalMismatches', 'depthOver3', 'missingHstsRule'];
if (blocking.some((key) => findings[key].length)) process.exitCode = 1;
