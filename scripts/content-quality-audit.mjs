import fs from 'node:fs';
import path from 'node:path';

const BLOG_ROOT = path.resolve('src/app/blog');
const strict = process.argv.includes('--strict');

const staleRules = [
  {
    id: 'obsolete-tcja-sunset',
    severity: 'critical',
    pattern: /TCJA.{0,120}(?:sunset|expire|expiration).{0,160}(?:2025|2026)|(?:sunset|expiration).{0,120}TCJA/gi,
    note: 'Re-check against post-July-2025 federal tax law before publishing.',
  },
  {
    id: 'standard-deduction-halving',
    severity: 'critical',
    pattern: /halving of the Standard Deduction|standard deduction.{0,100}(?:revert|roughly halve|approximately \$16,500)/gi,
    note: '2026 standard-deduction claims must match current IRS guidance.',
  },
  {
    id: 'pre-tcja-rates-returning',
    severity: 'critical',
    pattern: /(?:tax brackets|individual income tax brackets).{0,120}(?:returning|shifting back|revert).{0,120}(?:pre-2018|previous higher rates)/gi,
    note: '2026 rate claims must match current IRS guidance.',
  },
  {
    id: 'stale-congress-status',
    severity: 'critical',
    pattern: /Congress has not yet passed a comprehensive extension/gi,
    note: 'Time-sensitive legislative-status language is stale.',
  },
];

const boilerplateRules = [
  /The 2026 Macroeconomic Landscape: A Comprehensive Deep Dive/i,
  /Advanced 2026 Wealth-Building Strategies & Financial FAQ/i,
  /The Power of the ["']Wealth Multiplier["'] Effect/i,
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.name === 'page.tsx') files.push(full);
  }
  return files;
}

function routeFor(file) {
  return '/blog/' + path.basename(path.dirname(file));
}

function stripJsx(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

const files = walk(BLOG_ROOT);
const issues = [];
const paragraphOwners = new Map();

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const route = routeFor(file);

  for (const rule of staleRules) {
    rule.pattern.lastIndex = 0;
    const matches = [...source.matchAll(rule.pattern)];
    if (matches.length) {
      issues.push({
        route,
        type: rule.id,
        severity: rule.severity,
        hits: matches.length,
        note: rule.note,
      });
    }
  }

  for (const pattern of boilerplateRules) {
    if (pattern.test(source)) {
      issues.push({
        route,
        type: 'generic-boilerplate',
        severity: 'high',
        hits: 1,
        note: 'Remove generic site-wide finance filler; keep the page tightly aligned to its search intent.',
      });
    }
  }

  for (const match of source.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)) {
    const text = stripJsx(match[1]);
    if (text.length < 240) continue;
    const key = text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (!paragraphOwners.has(key)) paragraphOwners.set(key, { text, routes: new Set() });
    paragraphOwners.get(key).routes.add(route);
  }
}

const duplicateParagraphs = [...paragraphOwners.values()]
  .filter((item) => item.routes.size >= 3)
  .map((item) => ({
    routes: [...item.routes].sort(),
    preview: item.text.slice(0, 180) + (item.text.length > 180 ? '…' : ''),
  }))
  .sort((a, b) => b.routes.length - a.routes.length);

console.log(JSON.stringify({
  scannedBlogPages: files.length,
  issueCount: issues.length,
  issues,
  duplicateParagraphGroupCount: duplicateParagraphs.length,
  duplicateParagraphs: duplicateParagraphs.slice(0, 50),
}, null, 2));

if (strict && (issues.some((issue) => issue.severity === 'critical') || duplicateParagraphs.length > 0)) {
  process.exit(1);
}
