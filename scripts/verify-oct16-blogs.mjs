import fs from 'node:fs';
import assert from 'node:assert/strict';

const slugs = ['mortgage-closing-wire-fraud-checklist-2026', 'mortgage-recast-vs-refinance-2026'];
const sitemap = fs.readFileSync('out/sitemap.xml', 'utf8');
const index = fs.readFileSync('out/blog.html', 'utf8');
const cards = [...index.matchAll(/<a\b(?=[^>]*class="group flex flex-col)[^>]*href="\/blog\/([^"#]+)"/g)].map(m => m[1]);
const results = [];
for (const slug of slugs) {
  const html = fs.readFileSync(`out/blog/${slug}.html`, 'utf8');
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article, `${slug}: article missing`);
  const words = article.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).length;
  assert(words >= 1200, `${slug}: only ${words} rendered words`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  const url = `https://usfinnexus.com/blog/${slug}`;
  assert(html.includes(`<link rel="canonical" href="${url}"`));
  assert(html.includes('name="twitter:card" content="summary_large_image"'));
  assert(html.includes(`property="og:url" content="${url}"`));
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const post = schemas.find(s => s['@type'] === 'BlogPosting');
  const faq = schemas.find(s => s['@type'] === 'FAQPage');
  assert.equal(post?.datePublished, '2026-10-16');
  assert.equal(post?.dateModified, '2026-10-16');
  assert.equal(faq?.mainEntity.length, 6);
  for (const q of faq.mainEntity) {
    assert(article.includes(q.name));
  }
  assert(sitemap.includes(`<loc>${url}</loc>`));
  assert(index.includes(`/images/${slug}.webp`));
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert(description && description.length <= 160);
  const links = [...article.matchAll(/href="(\/[^"#]*)/g)].map(m => m[1]);
  assert(links.some(l => l.startsWith('/calculators/')));
  assert(links.some(l => l.startsWith('/blog/')));
  for (const link of links) assert(fs.existsSync(`out${link}.html`), `Broken link: ${link}`);
  results.push({ slug, renderedWords: words, faqCount: faq.mainEntity.length, internalLinks: links.length, canonical: url });
}
if (cards.length) assert.deepEqual(new Set(cards.slice(0, 2)), new Set(slugs));
else throw new Error('Blog card extraction failed; inspect the index manually');
console.log(JSON.stringify({ results, newestCards: cards.slice(0, 2), status: 'passed' }, null, 2));
