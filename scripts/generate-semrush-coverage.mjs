import fs from 'node:fs';
import crypto from 'node:crypto';

const [sourceJson, workbookPath, outputPath = 'reports/semrush-keyword-coverage.json'] = process.argv.slice(2);
if (!sourceJson || !workbookPath) throw new Error('Usage: node scripts/generate-semrush-coverage.mjs <all-sheets.json> <workbook.xlsx> [output.json]');

const sheets = JSON.parse(fs.readFileSync(sourceJson, 'utf8'));
const workbookSha256 = crypto.createHash('sha256').update(fs.readFileSync(workbookPath)).digest('hex');
const targetSheets = ['Keyword Master', 'Keyword Universe B2', 'Questions Research B3', 'Payoff Keywords B4', 'Get Can Keywords B5', 'Much Keywords B6'];

const rules = [
  [/do not target|brand|provider|competitor|login|directory/i, null, 'excluded-intent'],
  [/avoid implying|only if daily freshness|only if lender comparison|only if comparison scope/i, null, 'excluded-product-scope'],
  [/mortgage payoff/i, '/calculators/mortgage-payoff', 'implemented'],
  [/payoff vs invest/i, '/blog/paying-off-mortgage-early-vs-investing', 'consolidated-existing'],
  [/payment methods|credit card payment/i, '/blog/pay-mortgage-with-credit-card', 'implemented'],
  [/selling.*mortgage/i, '/blog/selling-house-with-mortgage', 'implemented'],
  [/second mortgage/i, '/blog/second-mortgage-guide', 'implemented'],
  [/broker fee/i, '/blog/mortgage-broker-fees', 'implemented'],
  [/preapproval|pre-approval|prequalification|qualification guide/i, '/blog/mortgage-preapproval-prequalification', 'consolidated-existing'],
  [/reverse mortgage/i, '/blog/reverse-mortgage-hecm-explained', 'consolidated-existing'],
  [/refinance.*cost|cost.*refinance|refinance calculator|refinance guide|refinance hub/i, '/calculators/refinance', 'implemented'],
  [/refinanc|\brefi\b|cash out/i, '/calculators/refinance', 'implemented'],
  [/refinance rate/i, '/mortgage-rates', 'consolidated-existing'],
  [/mortgage rate|rates hub|30-year rate|15-year rate|current rates|rate outlook|prime rate/i, '/mortgage-rates', 'consolidated-existing'],
  [/interest rate|rates explainer|rates.news/i, '/mortgage-rates', 'consolidated-existing'],
  [/affordability|how much.*afford|qualification calculator|approval amount/i, '/calculators/affordability', 'implemented'],
  [/(^|\b)dti\b|debt.to.income/i, '/calculators/dti', 'implemented'],
  [/amortization/i, '/calculators/amortization', 'implemented'],
  [/heloc|home equity/i, '/calculators/heloc', 'implemented'],
  [/fha.*va.*usda|government/i, '/calculators/fha-va-usda', 'implemented'],
  [/\bfha\b|mortgage insurance|\bpmi\b|\bmip\b/i, '/calculators/fha', 'consolidated-existing'],
  [/\bva\b/i, '/calculators/va', 'consolidated-existing'],
  [/\barm\b|adjustable/i, '/calculators/arm', 'implemented'],
  [/interest.only/i, '/calculators/interest-only', 'implemented'],
  [/student loan/i, '/calculators/student-loan', 'implemented'],
  [/debt payoff|pay off debt/i, '/calculators/debt-payoff', 'consolidated-existing'],
  [/down payment/i, '/calculators/down-payment', 'consolidated-existing'],
  [/closing cost|mortgage closing/i, '/calculators/closing-costs', 'consolidated-existing'],
  [/annual percentage rate|\bapr\b/i, '/calculators/mortgage', 'consolidated-existing'],
  [/home value|house estimate/i, null, 'excluded-specialized-tool-not-built'],
  [/mortgage broker/i, '/blog/mortgage-broker-fees', 'implemented'],
  [/fannie mae/i, '/calculators/mortgage', 'consolidated-existing'],
  [/escrow/i, '/blog/how-does-mortgage-escrow-work', 'consolidated-existing'],
  [/mortgage interest deduction|mortgage tax/i, '/blog/mortgage-interest-tax-deduction-2026', 'consolidated-existing'],
  [/assumable/i, '/blog/assumable-mortgages-2026-strategy', 'consolidated-existing'],
  [/jumbo/i, '/blog/what-is-a-jumbo-loan-2026', 'consolidated-existing'],
  [/rent vs buy/i, '/calculators/rent-vs-buy', 'consolidated-existing'],
  [/rental property/i, '/calculators/rental-property', 'consolidated-existing'],
  [/state mortgage|local mortgage|state loan/i, '/calculators/mortgage', 'consolidated-no-thin-location-page'],
  [/loan comparison|mortgage comparison/i, '/calculators/comparison', 'consolidated-existing'],
  [/auto refinance/i, '/calculators/auto-loan', 'consolidated-existing'],
  [/generic loan|loan calculator|loan interest|generic interest/i, '/calculators/personal-loan', 'consolidated-existing'],
  [/mortgage|home loan|finance hub|application|approval|servicing|basics/i, '/calculators/mortgage', 'consolidated-existing'],
];

function mapDestination(text) {
  for (const [pattern, url, status] of rules) if (pattern.test(text)) return { canonicalUrl: url, status };
  return { canonicalUrl: null, status: 'reviewed-no-dedicated-page' };
}

const rows = [];
for (const sheetName of targetSheets) {
  const sheet = sheets.find((item) => item.name === sheetName);
  if (!sheet) continue;
  const headerIndex = sheet.values.findIndex((row) => row?.[0] === 'Keyword' || row?.[0] === 'Question Keyword');
  const headers = sheet.values[headerIndex];
  for (let index = headerIndex + 1; index < sheet.values.length; index += 1) {
    const row = sheet.values[index];
    if (!row?.[0]) continue;
    const record = Object.fromEntries(headers.map((header, column) => [header, row[column]]));
    const recommendation = [record['Recommended Destination'], record['Recommended Canonical'], record['Current Page'], record.Cluster, record.Subcluster, record['Recommended Action'], record.Action].filter(Boolean).join(' | ');
    rows.push({
      sheet: sheetName,
      sourceRow: index + 1,
      keyword: record.Keyword ?? record['Question Keyword'],
      intent: record.Intent ?? null,
      volume: record['US Volume'] ?? record.Volume ?? null,
      kd: record['KD %'] ?? null,
      priority: record.Priority ?? null,
      classification: record.Classification ?? null,
      recommendation,
      ...mapDestination(`${record.Keyword ?? record['Question Keyword']} | ${recommendation}`),
    });
  }
}

const counts = rows.reduce((result, row) => {
  result[row.status] = (result[row.status] ?? 0) + 1;
  return result;
}, {});
const report = {
  generatedAt: '2026-08-09',
  sourceWorkbook: 'USFinNexus_SEMrush_Master_Plan_Batch6_2026-08-09(2).xlsx',
  workbookSha256,
  policy: 'Every visible actionable keyword row is mapped to one canonical URL or an explicit exclusion/review status. Synonyms do not create thin duplicate URLs.',
  summary: { totalRows: rows.length, byStatus: counts },
  rows,
};
fs.mkdirSync(new URL('../reports/', import.meta.url), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report.summary));
