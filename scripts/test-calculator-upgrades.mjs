import assert from 'node:assert/strict';
import { calcPaycheck, calcStatePaycheck } from '../src/lib/paycheck.ts';
import { lookupMortgageZip } from '../src/lib/taxEstimates.ts';
import { calcAmortization, calcCardPayoff, calcClosingCosts, calcDebtPayoff, calcGovLoan, calcHELOC, calcRentVsBuy, calcYearlyAmortization } from '../src/lib/formulas.ts';

const paycheck = { gross: 1000, periods: 52, filing: 'single', multipleJobs: false, otherIncome: 0, w4Deductions: 0, credits: 0, extraFederal: 0, retirement: 0, section125: 0, postTax: 0, ytdFicaWages: 0, stateTax: 0, localTax: 0 };
assert.deepEqual(calcPaycheck(paycheck), { gross: 1000, federal: 78.08, socialSecurity: 62, medicare: 14.5, additionalMedicare: 0, deductions: 0, beforeState: 845.42, net: 845.42 });
assert.equal(calcPaycheck({ ...paycheck, multipleJobs: true }).federal, 135.10);
assert.equal(calcPaycheck({ ...paycheck, ytdFicaWages: 184000 }).socialSecurity, 31);
assert.equal(calcPaycheck({ ...paycheck, ytdFicaWages: 199500 }).additionalMedicare, 4.5);
assert.equal(calcPaycheck({ ...paycheck, section125: 100, retirement: 100 }).socialSecurity, 55.8);
assert.equal(calcPaycheck({ ...paycheck, stateTax: undefined }).net, undefined);
assert.equal(calcStatePaycheck('IL', 1000, 26, 1), 43.93);
assert.equal(calcStatePaycheck('MI', 1000, 26, 1), 32.86);
assert.equal(calcStatePaycheck('TX', 1000, 26), 0);
assert.equal(calcStatePaycheck('CA', 1000, 26), undefined);

assert.equal(lookupMortgageZip('75201').county, true);
assert.equal(lookupMortgageZip('90025').county, true);
assert.equal(lookupMortgageZip('98660').county, false);
assert.equal(lookupMortgageZip('00000'), null);

const mortgage = { homePrice: 400000, downPayment: 80000, annualInterestRate: 7.18, loanTermYears: 30, annualPropertyTax: 4000, annualInsurance: 1500, monthlyHOA: 0, pmiRate: 0, startDate: new Date('2026-11-01') };
const monthly = calcAmortization(mortgage);
const biweekly = calcAmortization({ ...mortgage, biWeekly: true });
assert.equal(monthly.length, 360);
assert.ok(biweekly.length < monthly.length);
assert.ok(biweekly.at(-1).cumulativeInterest < monthly.at(-1).cumulativeInterest);
assert.ok(calcYearlyAmortization(monthly).find(row => row.principalPaid > row.interestPaid).year > 13);
assert.equal(biweekly.at(-1).balance, 0);

const heloc = calcHELOC({ homeValue: 500000, mortgageBalance: 250000, creditLimitPercent: 85, drawAmount: 200000, drawPeriodYears: 10, repaymentPeriodYears: 20, drawRate: 8, repaymentRate: 9 });
assert.equal(heloc.maxCreditLine, 175000);
assert.equal(heloc.modeledDraw, 175000);
assert.ok(heloc.repaymentMonthlyPayment > heloc.drawMonthlyPayment);

const gov = { ...mortgage, loanType: 'va', downPaymentPercent: 0, vaFirstTimeUse: true, vaDisabilityExempt: false };
assert.equal(calcGovLoan(gov).upfrontFeePercent, 2.15);
assert.equal(calcGovLoan({ ...gov, vaFirstTimeUse: false }).upfrontFeePercent, 3.3);
assert.equal(calcGovLoan({ ...gov, vaDisabilityExempt: true }).upfrontFee, 0);
assert.equal(calcGovLoan({ ...gov, downPaymentPercent: 5 }).upfrontFeePercent, 1.5);
assert.equal(calcGovLoan({ ...gov, downPaymentPercent: 10 }).upfrontFeePercent, 1.25);
const fha = calcGovLoan({ ...gov, loanType: 'fha', downPaymentPercent: 3.5 });
assert.equal(fha.upfrontFee, 6755);
assert.equal(fha.feeMonths, 360);
assert.ok(fha.totalAnnualFees < fha.monthlyMIP * fha.feeMonths);
const fhaCash = calcGovLoan({ ...gov, loanType: 'fha', downPaymentPercent: 10, financeUpfrontFee: false });
assert.equal(fhaCash.feeMonths, 132);
assert.equal(fhaCash.upfrontCash, 6300);
assert.equal(fhaCash.loanAmount, 360000);

const rent = { homePrice: 400000, downPayment: 80000, mortgageRate: 7, loanTermYears: 30, annualPropertyTax: 1.2, annualInsurance: 1400, monthlyHOA: 0, annualHomeAppreciation: 3, monthlyRent: 2200, annualRentIncrease: 3, yearsToStay: 10, investmentReturn: 7, sellingCostPercent: 7, buyingCostPercent: 3, annualMaintenancePercent: 1 };
const comparison = calcRentVsBuy(rent);
assert.equal(comparison.yearlyData.length, 10);
assert.ok(Math.abs(comparison.renterInitialInvestmentValue - 92000 * 1.07 ** 10) < .01);
assert.ok(calcRentVsBuy({ ...rent, annualPropertyTaxIncrease: 4 }).netBuyCost > comparison.netBuyCost);
assert.ok(calcRentVsBuy({ ...rent, annualMaintenancePercent: 2 }).netBuyCost > comparison.netBuyCost);
assert.ok(Math.abs(calcRentVsBuy({ ...rent, investmentReturn: 0 }).netRentCost - calcRentVsBuy({ ...rent, investmentReturn: 0 }).rentTotalCost) < .01);

const closing = { homePrice: 400000, loanAmount: 320000, state: 'CA', loanType: 'conventional', isNewConstruction: false };
const close = calcClosingCosts({ ...closing, quote: { credits: 5000, deposit: 10000, recording: 0 } });
assert.equal(close.buyerItems.find(x => x.label === 'Recording Fees').amount, 0);
assert.ok(Math.abs(close.cashToClose - (65000 + close.buyerTotal)) < .01);
assert.equal(calcClosingCosts({ ...closing, loanType: 'fha', payFhaUpfrontInCash: false }).buyerTotal, calcClosingCosts(closing).buyerTotal);

const minOnly = calcCardPayoff(5000, 22, (b, i) => Math.max(25, b / 100 + i));
const withExtra = calcCardPayoff(5000, 22, (b, i) => Math.max(25, b / 100 + i) + 150);
assert.ok(minOnly.paidOff && withExtra.paidOff && withExtra.months < minOnly.months && withExtra.totalInterest < minOnly.totalInterest);
assert.equal(calcCardPayoff(5000, 24, () => 100).paidOff, false);
const debts = [{ name: 'A', balance: 100, rate: 0, minPayment: 100 }, { name: 'B', balance: 300, rate: 0, minPayment: 50 }];
assert.equal(calcDebtPayoff({ debts, extraMonthly: 0 }, 'avalanche').totalMonths, 3);
assert.equal(calcDebtPayoff({ debts, extraMonthly: 0, rollMinimums: false }, 'avalanche').totalMonths, 6);
assert.ok(calcDebtPayoff({ debts: [{ name: 'Card', balance: 1000, rate: 24, minPayment: 10 }], extraMonthly: 0 }, 'snowball').remainingBalance > 1000);
console.log('Paycheck, mortgage, ZIP, HELOC, FHA/VA, rent-vs-buy, closing costs, and debt tests passed.');
