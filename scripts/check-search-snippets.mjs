import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] || 'out';
const files = [];
function walk(dir) { for (const entry of readdirSync(dir, { withFileTypes: true })) {
  const path = join(dir, entry.name);
  if (entry.isDirectory()) walk(path);
  else if (path.endsWith('.html') && !path.includes('/404')) files.push(path);
} }
walk(root);
let checked = 0;
for (const path of files) {
  const html = readFileSync(path, 'utf8');
  if (!/<footer\b[^>]*class="fn-footer"/.test(html)) continue;
  assert.match(html, /<footer[^>]*class="fn-footer"[^>]*>\s*<div[^>]*data-nosnippet=""/, path + ': footer snippet exclusion missing');
  assert.ok(!/<main[^>]*data-nosnippet/.test(html), path + ': main content excluded');
  for (const match of html.matchAll(/<div[^>]*class="disclaimer-banner[^>]*>/g)) {
    if (match[0].includes('aria-label="Disclaimer"')) assert.ok(match[0].includes('data-nosnippet'), path + ': repeated disclaimer eligible');
  }
  assert.ok(!/<meta[^>]+name="robots"[^>]+content="[^"]*nosnippet/.test(html), path + ': page-wide nosnippet');
  checked++;
}
const pages = [
  ['calculators/refinance.html', 'How to compare refinance savings and closing costs', false],
  ['calculators/amortization.html', 'How to read a mortgage amortization schedule', true],
  ['calculators/rent-vs-buy.html', 'Rent or buy? Compare total costs, equity and flexibility', true],
];
const results = [];
for (const [path, heading, addedFaq] of pages) {
  const html = readFileSync(join(root, path), 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, path + ': H1 count');
  assert.ok(html.includes(heading), path + ': missing guide');
  assert.ok(html.includes('Quick answer:'), path + ': missing direct answer');
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  assert.equal(schemas.filter(s=>s['@type']==='FAQPage').length, 1, path + ': FAQ schema count');
  if (addedFaq) assert.equal(schemas.find(s=>s['@type']==='FAQPage').mainEntity.length, 5);
  const content = html.match(/<section[^>]+aria-labelledby="(?:refinance|amortization|rent-buy)-guide"[^>]*>([\s\S]*?)<\/section>/)?.[1];
  assert.ok(content, path + ': guide absent in initial HTML');
  const words = content.replace(/<[^>]*>/g,' ').match(/[A-Za-z0-9]+(?:[’'-][A-Za-z0-9]+)*/g)?.length || 0;
  assert.ok(words >= 650, path + ': insufficient substantive guide copy ' + words);
  results.push({path, guideWords:words});
}
const rent = readFileSync(join(root, 'calculators/rent-vs-buy.html'), 'utf8');
const refinance = readFileSync(join(root, 'calculators/refinance.html'), 'utf8');
assert.ok(!refinance.includes('pure savings') && !refinance.includes('typically excellent'));
assert.ok(refinance.includes('Compare Payment Savings With Total Cost'));
assert.ok(!rent.includes('real 2026 data') && !rent.includes('real 2026 appreciation'));
assert.ok(rent.includes('Tax deductions and PMI are not modeled.'));
const home = readFileSync(join(root, 'index.html'), 'utf8');
assert.match(home, /<title>USFinNexus: Free Mortgage &amp; Finance Calculators<\/title>/);
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
for (const route of ['/', '/calculators/refinance', '/calculators/amortization', '/calculators/rent-vs-buy']) {
  const entry = sitemap.split('</url>').find(x=>x.includes('<loc>https://usfinnexus.com'+route+'</loc>'));
  assert.ok(entry?.includes('<lastmod>2026-11-13'), route + ': missing actual content revision date');
}
console.log(JSON.stringify({snippetProtectedPages:checked, guides:results}, null, 2));
