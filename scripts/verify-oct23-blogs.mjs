import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const slugs = ['irs-ip-pin-2027', 'social-security-earnings-test-2027'];
const sitemap = fs.readFileSync('out/sitemap.xml', 'utf8');
const index = fs.readFileSync('out/blog.html', 'utf8');
const directory = index.split('<section aria-label="Browse finance guides">')[1]?.split('</section>')[0];
assert(directory, 'Blog directory missing');
const cards = [...directory.matchAll(/<a\b(?=[^>]*class="group flex flex-col)[^>]*href="\/blog\/([^"#]+)"/g)].map(m => m[1]);
assert.deepEqual(cards.slice(0, 2), slugs, 'Newest-first order');
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&#39;', "'").replaceAll('&quot;', '"');
const results = [];
for (const slug of slugs) {
  const html = fs.readFileSync(`out/blog/${slug}.html`, 'utf8');
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article, `${slug}: article missing`);
  const words = article.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).length;
  assert(words >= 1200, `${slug}: only ${words} words`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert(article.includes('<h2>') && article.includes('<h3>'));
  const pageUrl = `https://usfinnexus.com/blog/${slug}`;
  assert(html.includes(`<link rel="canonical" href="${pageUrl}"`));
  assert(html.includes('name="twitter:card" content="summary_large_image"'));
  assert(html.includes(`property="og:url" content="${pageUrl}"`));
  assert(!/<meta[^>]+name="robots"[^>]+noindex/i.test(html));
  const imageUrl = `https://usfinnexus.com/images/${slug}.webp`;
  assert(html.includes(`property="og:image" content="${imageUrl}"`));
  assert(html.includes(`name="twitter:image" content="${imageUrl}"`));
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const posts = schemas.filter(s => s['@type'] === 'BlogPosting');
  const faqPages = schemas.filter(s => s['@type'] === 'FAQPage');
  assert.equal(posts.length, 1); assert.equal(faqPages.length, 1);
  assert.equal(posts[0].datePublished, '2026-10-23'); assert.equal(posts[0].dateModified, '2026-10-23');
  assert.equal(posts[0].image.url, imageUrl);
  assert.equal(faqPages[0].mainEntity.length, 6);
  for (const q of faqPages[0].mainEntity) {
    assert(decode(article).includes(q.name));
    assert(decode(article).includes(q.acceptedAnswer.text));
  }
  assert(sitemap.includes(`<loc>${pageUrl}</loc>`));
  assert(directory.includes(`/images/${slug}.webp`));
  const description = decode(html.match(/<meta name="description" content="([^"]+)"/)?.[1] || '');
  assert(description.length > 0 && description.length <= 160);
  const links = [...article.matchAll(/href="(\/[^"#]*)/g)].map(m => m[1]);
  assert(links.some(l => l.startsWith('/calculators/')) && links.some(l => l.startsWith('/blog/')));
  for (const link of links) assert(fs.existsSync(`out${link}.html`), `Broken internal link: ${link}`);
  const hero = article.match(new RegExp(`<img[^>]+src="/images/${slug}\\.webp"[^>]*>`))?.[0];
  assert(hero && /alt="[^"]{20,}"/.test(hero), 'Descriptive hero alt');
  const bytes = fs.readFileSync(`public/images/${slug}.webp`);
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  assert(bytes.equals(fs.readFileSync(`out/images/${slug}.webp`)));
  results.push({ slug, renderedWords: words, faqCount: 6, h1Count: 1, descriptionLength: description.length, internalLinks: links.length, canonical: pageUrl, heroDimensions: [1200, 630], heroBytes: bytes.length, heroSha256: createHash('sha256').update(bytes).digest('hex') });
}
const report = { checked: '2026-10-23', results, newestCards: cards.slice(0, 2), status: 'passed' };
fs.writeFileSync('reports/daily-posts-2026-10-23-validation.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
