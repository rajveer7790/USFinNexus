import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calcMonthlyPI, calcRefinance } from '../src/lib/formulas.ts';
import { calculateCDLadder } from '../src/lib/cd-ladder.ts';

const input = {
    currentBalance: 200000, currentRate: 7, currentMonthlyPayment: 1700,
    currentMonthsRemaining: 300, newRate: 5, newTermYears: 25, closingCosts: 3000,
};
const cashFees = calcRefinance(input);
assert.equal(cashFees.newLoanAmount, 200000);
assert.equal(cashFees.upfrontClosingCosts, 3000);
assert.equal(cashFees.breakEvenMonths, Math.ceil(3000 / cashFees.monthlySavings));

const financed = calcRefinance({ ...input, cashOut: 20000, financeClosingCosts: true });
assert.equal(financed.newLoanAmount, 223000);
assert.equal(financed.upfrontClosingCosts, 0);
assert.equal(financed.breakEvenMonths, Infinity);
assert.equal(financed.newMonthlyPayment, calcMonthlyPI(223000, 5, 25));
assert.equal(financed.netSavings, financed.totalCurrentCost - financed.totalNewCost + 20000);

const ladder = calculateCDLadder([{ principal: 5000, apy: 4, months: 12 }, { principal: 1000, apy: 0, months: 6 }]);
assert.deepEqual(ladder.schedule.map(rung => rung.months), [6, 12]);
assert.equal(ladder.schedule[1].maturity, 5200);
assert.equal(ladder.interest, 200);
assert.throws(() => calculateCDLadder([{ principal: 100, apy: 4, months: 0 }]));

for (const slug of [
    'mortgage', 'affordability', 'refinance', 'dti', 'auto-loan', 'retirement',
    'income-tax', 'amortization', 'personal-loan', 'down-payment', 'student-loan', 'comparison', 'cd-ladder',
]) {
    const html = readFileSync(`out/calculators/${slug}.html`, 'utf8');
    assert.ok(html.includes('Quick answer:'), `Missing rendered quick answer: ${slug}`);
    assert.ok(html.includes('Formulas and sources'), `Missing methodology link: ${slug}`);
    assert.ok(html.includes(`href="https://usfinnexus.com/calculators/${slug}"`), `Missing canonical: ${slug}`);
}

const sitemap = readFileSync('out/sitemap.xml', 'utf8');
assert.equal(sitemap.split('<loc>https://usfinnexus.com/calculators/cd-ladder</loc>').length, 2);
console.log('Refinance, CD ladder, calculator answers and sitemap checks passed.');
