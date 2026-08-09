import fs from 'node:fs';
import path from 'node:path';

const replacements = new Map([
  ['/blog/first-time-home-buyer-programs-2026', '/blog/first-time-homebuyer-programs-grants-2026'],
  ['/blog/free-mortgage-calculator-2026-pdf', '/calculators/mortgage'],
  ['/blog/how-much-house-can-afford-2026', '/blog/how-much-house-can-i-afford-2026'],
  ['/blog/interest-only-mortgages-explained', '/blog/interest-only-mortgage-pros-cons'],
  ['/blog/mortgage-affordability-28-36-rule', '/blog/28-36-rule-explained-lender-standards'],
  ['/blog/mortgage-amortization-schedule', '/blog/mortgage-amortization-schedule-guide'],
  ['/blog/mortgage-closing-costs-2026-guide', '/blog/closing-costs-itemized-breakdown-2026'],
  ['/blog/mortgage-help-guide-2026', '/blog/first-time-homebuyer-mortgage-guide-2026'],
  ['/blog/mortgage-points-discount-points-calculator', '/blog/mortgage-points-buydown-calculator'],
  ['/blog/negotiate-closing-costs-strategies', '/blog/closing-costs-itemized-breakdown-2026'],
  ['/blog/paying-off-mortgage-early-vs-investing', '/blog/pay-off-mortgage-early-strategy'],
  ['/blog/pmi-explained-avoid-cancel', '/blog/pmi-explained-cost-removal-2026'],
  ['/blog/remove-pmi-mortgage-hpa-rules-2026', '/blog/pmi-explained-cost-removal-2026'],
  ['/blog/reverse-mortgage-hecm-explained', '/blog/reverse-mortgage-hecm-pros-cons-2026'],
  ['/blog/va-loans-military-benefits', '/blog/va-loan-benefits-2026-military-guide'],
  ['/blog/what-is-a-good-debt-to-income-ratio', '/blog/debt-to-income-ratio-dti-calculator-2026'],
  ['/blog/what-is-a-jumbo-loan-2026', '/blog/jumbo-mortgages-over-loan-limit'],
  ['/blog/when-to-refinance-1-percent-rule', '/blog/should-i-refinance-2026'],
]);

const files = [];
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
  const full = path.join(dir, entry.name);
  if (entry.isDirectory()) walk(full);
  else if (/\.(?:ts|tsx|js|mjs)$/.test(entry.name)) files.push(full);
});
walk('src');
let changed = 0;
for (const file of files) {
  if (file === path.join('src', 'app', 'sitemap.ts')) continue;
  let source = fs.readFileSync(file, 'utf8');
  const original = source;
  for (const [from, to] of replacements) source = source.replace(new RegExp(`${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![a-z0-9-])`, 'g'), to);
  if (source !== original) { fs.writeFileSync(file, source); changed += 1; }
}
console.log(JSON.stringify({ changedFiles: changed }));
