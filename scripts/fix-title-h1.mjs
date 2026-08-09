import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const decode = (value = '') => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
const strip = (value = '') => decode(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const normalize = (value = '') => strip(value).toLowerCase().replace(/\s*[|—–-]\s*usfinnexus.*$/, '').replace(/[^a-z0-9]+/g, ' ').trim();
const routeFor = (file) => {
  const relative = path.relative(outDir, file).replaceAll(path.sep, '/');
  return relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
};
const files = [];
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => entry.isDirectory() ? walk(path.join(dir, entry.name)) : entry.name.endsWith('.html') && files.push(path.join(dir, entry.name)));
walk(outDir);

const changed = [];
const skipped = [];
for (const htmlFile of files) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  const title = strip(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
  const h1 = strip(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]);
  if (!title || !h1 || normalize(title) !== normalize(h1)) continue;
  const route = routeFor(htmlFile);
  const source = path.join('src', 'app', route === '/' ? 'page.tsx' : route.slice(1), 'page.tsx');
  if (!fs.existsSync(source)) { skipped.push({ route, reason: 'missing direct page source' }); continue; }
  const original = fs.readFileSync(source, 'utf8');
  const property = /title:\s*(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/;
  const match = original.match(property);
  if (!match) { skipped.push({ route, reason: 'no literal metadata title' }); continue; }
  const sourceTitle = match[2].replace(/\\'/g, "'").replace(/\\"/g, '"');
  if (normalize(sourceTitle) !== normalize(title)) { skipped.push({ route, reason: 'first title is not document metadata' }); continue; }
  const suffix = route.startsWith('/calculators/') ? ' | Free Tool' : route.startsWith('/articles/') ? ' | Key Facts' : route.startsWith('/blog/') ? ' | Guide' : ' | USFinNexus';
  const limit = 75 - suffix.length;
  let base = sourceTitle.replace(/\s*[|—–-]\s*USFinNexus.*$/i, '').trim();
  if (base.length > limit) base = base.slice(0, limit + 1).replace(/\s+\S*$/, '').replace(/[,:;\-–—\s]+$/, '');
  const replacement = `title: ${JSON.stringify(base + suffix)}`;
  const updated = original.replace(property, replacement);
  if (updated === original) { skipped.push({ route, reason: 'replacement failed' }); continue; }
  fs.writeFileSync(source, updated);
  changed.push({ route, source, from: sourceTitle, to: base + suffix });
}
console.log(JSON.stringify({ changed: changed.length, skipped }, null, 2));
