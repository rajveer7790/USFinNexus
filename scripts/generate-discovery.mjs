import fs from 'node:fs';
import path from 'node:path';
const xml=fs.readFileSync('out/sitemap.xml','utf8');
const entries=[...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m=>({xml:m[0],url:m[1].match(/<loc>([^<]+)<\/loc>/)[1]}));
const regionalCalculators = new Set([
  'arizona', 'california', 'colorado', 'florida', 'georgia', 'illinois', 'massachusetts',
  'new-jersey', 'new-york', 'north-carolina', 'ohio', 'pennsylvania', 'texas', 'virginia', 'washington',
]);
const groups = { blog: [], calculators: [], articles: [], geo: [], pages: [] };
for (const entry of entries) {
  const route = new URL(entry.url).pathname;
  if (route.startsWith('/blog/')) groups.blog.push(entry);
  else if (route.startsWith('/articles/') || route.startsWith('/guides/')) groups.articles.push(entry);
  else if (route.startsWith('/data/home-affordability-by-') || route === '/canada' || route.startsWith('/canada/') ||
      regionalCalculators.has(route.replace(/^\/calculators\//, ''))) groups.geo.push(entry);
  else if (route.startsWith('/calculators/')) groups.calculators.push(entry);
  else groups.pages.push(entry);
}
for(const [name,items] of Object.entries(groups))fs.writeFileSync('public/sitemap-'+name+'.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+items.map(e=>e.xml).join('')+'</urlset>\n');
fs.writeFileSync('public/sitemap-index.xml','<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(groups).map(n=>'<sitemap><loc>https://usfinnexus.com/sitemap-'+n+'.xml</loc></sitemap>').join('')+'</sitemapindex>\n');
const strip=s=>s.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&#x27;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
const tools=entries.filter(e=>new URL(e.url).pathname.startsWith('/calculators/')).map(e=>{const route=new URL(e.url).pathname;const h=fs.readFileSync(path.join('out',route+'.html'),'utf8');return {...e,title:strip(h.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]||route),description:strip(h.match(/<meta name="description" content="([^"]+)"/)?.[1]||'Educational estimate; see page assumptions.')};});
const intro='# USFinNexus\n\n> Free U.S. educational finance calculators and source-based guides. No account required. Calculator inputs run in the browser; advertising and hosting data are disclosed in the Privacy Policy.\n\nThese optional discovery files are not an indexing or AI-citation guarantee. Examples are not loan offers, approvals, investment forecasts or tax returns. Download formats vary by tool.\n\n';
const sources='## Sources and formulas\n\n- [Methodology](https://usfinnexus.com/methodology): amortization, DTI, LTV, assumptions and limitations.\n- [Privacy](https://usfinnexus.com/privacy)\n- [Disclaimer](https://usfinnexus.com/disclaimer)\n- [Mortgage market context](https://usfinnexus.com/mortgage-rates): source-dated Freddie Mac PMMS, not a lender quote.\n- [IRS 2026 inflation adjustments](https://www.irs.gov/pub/irs-drop/rp-25-32.pdf)\n- [HUD FHA MIP schedule](https://www.hud.gov/sites/dfiles/OCHCO/documents/2023-05hsgml.pdf)\n- [VA funding fees](https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/)\n\nM = P*r/(1-(1+r)^(-n)); at zero interest M=P/n. DTI=monthly debt/gross monthly income. LTV=loan/property value. Cap rate=annual operating income/purchase price. Cash-on-cash=annual cash flow/initial cash invested. Each tool discloses exclusions and user assumptions.\n\n';
const catalog='## Canonical U.S. calculator catalog\n\n'+tools.map(t=>'- ['+t.title+']('+t.url+') — '+t.description).join('\n')+'\n';
fs.writeFileSync('public/llms.txt',intro+sources+catalog);
fs.writeFileSync('public/llms-full.txt',intro+sources+catalog+'\n## Editorial library\n\n'+[...groups.articles, ...groups.blog].map(e=>'- '+e.url).join('\n')+'\n');
// Static export has already copied public/; keep this build's output and next source build in sync.
for(const file of [...Object.keys(groups).map(name => `sitemap-${name}.xml`), 'sitemap-index.xml', 'llms.txt', 'llms-full.txt'])fs.copyFileSync(path.join('public',file),path.join('out',file));
console.log(JSON.stringify({sitemapEntries:entries.length,calculators:tools.length,segments:Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,v.length]))},null,2));
