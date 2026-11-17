import assert from 'node:assert/strict';
import fs from 'node:fs';
import { calcGovLoan } from '../src/lib/formulas.ts';

const base = { homePrice: 300000, downPaymentPercent: 0, annualInterestRate: 6.25, loanTermYears: 30, annualPropertyTax: 0, annualInsurance: 0, loanType: 'va', vaFirstTimeUse: true };
assert.equal(calcGovLoan(base).upfrontFee, 6450);
assert.equal(calcGovLoan(base).loanAmount, 306450);
assert.equal(calcGovLoan({ ...base, downPaymentPercent: 5 }).upfrontFee, 4275);
assert.equal(calcGovLoan({ ...base, vaDisabilityExempt: true }).upfrontFee, 0);
const fha = calcGovLoan({ ...base, loanType: 'fha', downPaymentPercent: 3.5 });
assert.equal(fha.baseLoanAmount, 289500);
assert.equal(fha.upfrontFee, 5066.25);
assert.equal(fha.loanAmount, 294566.25);
assert.equal(fha.annualFeePercent, .55);
assert.equal(calcGovLoan({ ...base, loanType: 'fha', downPaymentPercent: 5 }).annualFeePercent, .50);
assert.equal(calcGovLoan({ ...base, loanType: 'fha', downPaymentPercent: 10 }).feeMonths, 132);
assert.equal(calcGovLoan({ ...base, loanType: 'fha', downPaymentPercent: 3.5, loanTermYears: 15 }).annualFeePercent, .40);
assert.equal(calcGovLoan({ ...base, loanType: 'fha', downPaymentPercent: 10, loanTermYears: 15 }).annualFeePercent, .15);

for (const slug of ['pmi-removal', 'fha', 'va']) {
  const html = fs.readFileSync(`out/calculators/${slug}.html`, 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${slug}: one H1`);
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const faq = scripts.filter(s => s['@type'] === 'FAQPage');
  assert.equal(faq.length, 1, `${slug}: one FAQ schema`);
  assert.equal(faq[0].mainEntity.length, 6, `${slug}: six visible FAQs`);
  assert.ok(html.includes(`href="https://usfinnexus.com/calculators/${slug}"`), `${slug}: canonical`);
  assert.ok(html.includes('2026-11-17'), `${slug}: reviewed date`);
}
console.log('Mortgage-insurance examples, rate boundaries, canonicals, H1 and FAQ checks passed.');
