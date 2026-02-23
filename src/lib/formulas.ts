/**
 * USFinNexus.com — Core Finance Formulas
 * All calculations follow CFPB guidelines and standard US mortgage math.
 * CFPB Reference: consumerfinance.gov
 * FHFA 2026 Conforming Loan Limit: $832,750
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MortgageInputs {
    homePrice: number;
    downPayment: number;         // dollar amount
    annualInterestRate: number;  // as percent, e.g. 6.8
    loanTermYears: number;       // 10, 15, 20, 30, or custom
    annualPropertyTax: number;   // dollars
    annualInsurance: number;     // dollars
    monthlyHOA: number;
    pmiRate: number;             // annual percent (0 if down >= 20%)
    startDate: Date;
    extraMonthly?: number;
    extraAnnual?: number;
    biWeekly?: boolean;
}

export interface MonthlyPayment {
    principalAndInterest: number;
    monthlyPropertyTax: number;
    monthlyInsurance: number;
    monthlyHOA: number;
    monthlyPMI: number;
    totalMonthly: number;
}

export interface MortgageSummary extends MonthlyPayment {
    loanAmount: number;
    downPaymentAmount: number;
    downPaymentPercent: number;
    totalPayments: number;
    totalInterest: number;
    payoffDate: Date;
    ltv: number;               // loan-to-value ratio (percent)
    loanType: 'conforming' | 'jumbo' | 'fha_floor' | 'fha_ceiling';
}

export interface AmortizationRow {
    month: number;
    date: Date;
    payment: number;
    principal: number;
    interest: number;
    extraPayment: number;
    balance: number;
    cumulativeInterest: number;
    cumulativePrincipal: number;
}

export interface AffordabilityInputs {
    grossMonthlyIncome: number;
    monthlyDebts: number;       // car, student loans, credit cards
    downPayment: number;        // dollar amount
    annualInterestRate: number;
    loanTermYears: number;
    annualPropertyTax: number;  // percent of home value (e.g. 1.2)
    annualInsurance: number;    // dollars/year
    monthlyHOA: number;
    creditScore: 'excellent' | 'good' | 'fair' | 'poor';
}

export interface AffordabilityResult {
    maxHomePrice: number;
    conservativeHomePrice: number;  // 28% front-end DTI
    aggressiveHomePrice: number;    // 43% back-end DTI
    maxLoanAmount: number;
    monthlyPaymentAtMax: number;
    frontEndDTI: number;
    backEndDTI: number;
    loanType: string;
    conformingLimit: number;        // 2026: $832,750
    fhaFloor: number;               // 2026: $541,287
}

export interface RefinanceInputs {
    currentBalance: number;
    currentRate: number;
    currentMonthlyPayment: number;
    currentMonthsRemaining: number;
    newRate: number;
    newTermYears: number;
    closingCosts: number;
}

export interface RefinanceResult {
    newMonthlyPayment: number;
    monthlySavings: number;
    breakEvenMonths: number;
    breakEvenDate: Date;
    totalCurrentCost: number;
    totalNewCost: number;
    lifetimeSavings: number;
    netSavings: number;
}

export interface AutoLoanInputs {
    vehiclePrice: number;
    downPayment: number;
    tradeInValue: number;
    salesTaxRate: number;     // percent
    annualInterestRate: number;
    loanTermMonths: number;
}

export interface AutoLoanResult {
    loanAmount: number;
    monthlyPayment: number;
    totalInterest: number;
    totalCost: number;
    amortization: AutoAmortRow[];
}

export interface AutoAmortRow {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}

export interface RentVsBuyInputs {
    homePrice: number;
    downPayment: number;
    mortgageRate: number;
    loanTermYears: number;
    annualPropertyTax: number;
    annualInsurance: number;
    monthlyHOA: number;
    annualHomeAppreciation: number;  // percent
    monthlyRent: number;
    annualRentIncrease: number;      // percent
    yearsToStay: number;
    investmentReturn: number;        // if renting, what return on down payment? percent
    sellingCostPercent: number;      // realtor + closing costs on sale
}

export interface RentVsBuyResult {
    buyTotalCost: number;
    rentTotalCost: number;
    homeEquity: number;
    netBuyCost: number;
    netRentCost: number;
    winner: 'buy' | 'rent' | 'tie';
    breakEvenYear: number;
    yearlyData: { year: number; buyCumulative: number; rentCumulative: number; equity: number }[];
}

export interface PointsBuyDownInputs {
    loanAmount: number;
    baseRate: number;
    points: number;             // number of points (1 point = 1% of loan)
    rateReductionPerPoint: number; // typically 0.25% per point
    loanTermYears: number;
}

export interface PointsBuyDownResult {
    originalRate: number;
    newRate: number;
    pointsCost: number;
    originalPayment: number;
    newPayment: number;
    monthlySavings: number;
    breakEvenMonths: number;
    totalInterestSaved: number;
}

// ─── Phase 2 Advanced Features ────────────────────────────────────────────────

export interface ArmInputs {
    loanAmount: number;
    initialTermYears: number; // e.g., 5 or 7
    initialRate: number;      // e.g., 6.0
    margin: number;           // e.g., 2.75
    indexRate: number;        // e.g., SOFR at 4.5
    capInitial: number;       // e.g., 2 (%) First adjustment cap
    capPeriodic: number;      // e.g., 2 (%) Subsequent periodic cap
    capLifetime: number;      // e.g., 5 (%) Lifetime cap above initial rate
    loanTermYears: number;    // typically 30
}

export interface ArmResult {
    initialPayment: number;
    monthsAtInitialRate: number;
    worstCaseRate: number;
    worstCasePayment: number;
    bestCaseRate: number;
    bestCasePayment: number;
    fullyIndexedRate: number;
    fullyIndexedPayment: number;
}

export interface InterestOnlyInputs {
    loanAmount: number;
    annualInterestRate: number;
    ioTermYears: number;      // e.g., 10 years of interest only
    loanTermYears: number;    // e.g., 30 years total
}

export interface InterestOnlyResult {
    ioMonthlyPayment: number;
    ioMonths: number;
    amortizedMonthlyPayment: number;
    amortizedMonths: number;
    totalInterest: number;
    totalPayments: number;
}

// ─── Constants (2026 US Standards) ───────────────────────────────────────────

export const US_MORTGAGE_CONSTANTS = {
    // 2026 FHFA Conforming Loan Limits (Single-Family)
    CONFORMING_LOAN_LIMIT: 832750,
    CONFORMING_HIGH_COST_LIMIT: 1249125,
    // 2026 FHA Loan Limits
    FHA_FLOOR: 541287,
    FHA_CEILING: 1249125,
    // 2026 VA Baseline
    VA_BASELINE: 832750,
    // CFPB Standard DTI Guidelines
    FRONT_END_DTI_MAX: 0.28,    // 28% of gross income for housing (CFPB recommended)
    BACK_END_DTI_MAX: 0.43,     // 43% total debt (Qualified Mortgage standard)
    FHA_DTI_MAX: 0.50,          // FHA allows up to 50% with compensating factors
    // PMI thresholds
    PMI_LTV_THRESHOLD: 0.80,    // PMI required when LTV > 80%
    PMI_CANCEL_LTV: 0.78,       // PMI auto-cancel at 78% LTV (Homeowners Protection Act)
    // Standard PMI range (annual % of original loan)
    PMI_RATE_MIN: 0.0046,
    PMI_RATE_MAX: 0.0185,
    PMI_RATE_DEFAULT: 0.0085,   // ~0.85% — typical for 5-10% down, good credit
};

// ─── Core Functions ───────────────────────────────────────────────────────────

/**
 * Standard US fixed-rate mortgage monthly payment (P&I only).
 * Formula: M = P[r(1+r)^n] / [(1+r)^n – 1]
 * Source: CFPB mortgage payment formula
 */
export function calcMonthlyPI(
    loanAmount: number,
    annualRatePercent: number,
    termYears: number
): number {
    if (annualRatePercent === 0) return loanAmount / (termYears * 12);
    const r = annualRatePercent / 100 / 12;
    const n = termYears * 12;
    return loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

/**
 * Auto-calculate PMI rate based on LTV and credit score.
 * Based on industry standard PMI tables.
 */
export function calcPMIRate(ltv: number, creditScore: 'excellent' | 'good' | 'fair' | 'poor' = 'good'): number {
    if (ltv <= 0.80) return 0;
    const baseRates: Record<string, Record<string, number>> = {
        excellent: { '81-85': 0.0046, '86-90': 0.0078, '91-95': 0.0095, '96+': 0.0115 },
        good: { '81-85': 0.0058, '86-90': 0.0098, '91-95': 0.0125, '96+': 0.0155 },
        fair: { '81-85': 0.0085, '86-90': 0.0125, '91-95': 0.0155, '96+': 0.0185 },
        poor: { '81-85': 0.0110, '86-90': 0.0150, '91-95': 0.0180, '96+': 0.0185 },
    };
    const ltvPct = ltv * 100;
    const bracket = ltvPct <= 85 ? '81-85' : ltvPct <= 90 ? '86-90' : ltvPct <= 95 ? '91-95' : '96+';
    return baseRates[creditScore][bracket];
}

/**
 * Full PITI monthly payment breakdown.
 */
export function calcMortgagePayment(inputs: MortgageInputs): MonthlyPayment {
    const loanAmount = inputs.homePrice - inputs.downPayment;
    const pi = calcMonthlyPI(loanAmount, inputs.annualInterestRate, inputs.loanTermYears);
    const monthlyTax = inputs.annualPropertyTax / 12;
    const monthlyIns = inputs.annualInsurance / 12;
    const ltv = loanAmount / inputs.homePrice;
    const monthlyPMI = ltv > 0.80 ? (loanAmount * inputs.pmiRate) / 12 : 0;
    const total = pi + monthlyTax + monthlyIns + inputs.monthlyHOA + monthlyPMI;
    return {
        principalAndInterest: pi,
        monthlyPropertyTax: monthlyTax,
        monthlyInsurance: monthlyIns,
        monthlyHOA: inputs.monthlyHOA,
        monthlyPMI,
        totalMonthly: total,
    };
}

/**
 * Full mortgage summary including totals and payoff info.
 */
export function calcMortgageSummary(inputs: MortgageInputs): MortgageSummary {
    const loanAmount = inputs.homePrice - inputs.downPayment;
    const payment = calcMortgagePayment(inputs);
    const n = inputs.loanTermYears * 12;
    const totalPayments = payment.principalAndInterest * n;
    const totalInterest = totalPayments - loanAmount;
    const ltv = loanAmount / inputs.homePrice;

    // Payoff date
    const payoffDate = new Date(inputs.startDate);
    payoffDate.setMonth(payoffDate.getMonth() + n);

    // Loan type classification
    let loanType: MortgageSummary['loanType'] = 'conforming';
    if (loanAmount > US_MORTGAGE_CONSTANTS.CONFORMING_HIGH_COST_LIMIT) loanType = 'jumbo';
    else if (loanAmount <= US_MORTGAGE_CONSTANTS.FHA_FLOOR) loanType = 'fha_floor';
    else if (loanAmount <= US_MORTGAGE_CONSTANTS.FHA_CEILING) loanType = 'fha_ceiling';

    return {
        ...payment,
        loanAmount,
        downPaymentAmount: inputs.downPayment,
        downPaymentPercent: (inputs.downPayment / inputs.homePrice) * 100,
        totalPayments,
        totalInterest,
        payoffDate,
        ltv: ltv * 100,
        loanType,
    };
}

/**
 * Generate full amortization schedule with optional extra payments.
 * Follows standard US amortization math.
 */
export function calcAmortization(inputs: MortgageInputs): AmortizationRow[] {
    const loanAmount = inputs.homePrice - inputs.downPayment;
    if (loanAmount <= 0) return [];
    const monthlyRate = inputs.annualInterestRate / 100 / 12;
    const n = inputs.loanTermYears * 12;
    const basePayment = calcMonthlyPI(loanAmount, inputs.annualInterestRate, inputs.loanTermYears);

    let balance = loanAmount;
    let cumulativeInterest = 0;
    let cumulativePrincipal = 0;
    const rows: AmortizationRow[] = [];
    const startDate = new Date(inputs.startDate);

    for (let month = 1; month <= n; month++) {
        if (balance <= 0) break;

        const interestCharge = balance * monthlyRate;
        let principalCharge = Math.min(basePayment - interestCharge, balance);
        const extraPayment = Math.min(inputs.extraMonthly ?? 0, balance - principalCharge);
        principalCharge += extraPayment;

        // Annual lump sum (applied in month 12, 24, 36, ...)
        if (inputs.extraAnnual && month % 12 === 0) {
            principalCharge += Math.min(inputs.extraAnnual, balance - principalCharge);
        }

        balance -= principalCharge;
        if (balance < 0.005) balance = 0; // floating point fix

        cumulativeInterest += interestCharge;
        cumulativePrincipal += principalCharge;

        const rowDate = new Date(startDate);
        rowDate.setMonth(startDate.getMonth() + month);

        rows.push({
            month,
            date: rowDate,
            payment: principalCharge + interestCharge,
            principal: principalCharge - extraPayment,
            interest: interestCharge,
            extraPayment,
            balance,
            cumulativeInterest,
            cumulativePrincipal,
        });
    }

    return rows;
}

/**
 * Group amortization into yearly summaries.
 */
export function calcYearlyAmortization(rows: AmortizationRow[]): {
    year: number;
    principalPaid: number;
    interestPaid: number;
    endingBalance: number;
    cumulativeInterest: number;
}[] {
    const yearly: typeof calcYearlyAmortization extends (...args: never[]) => infer R ? R : never = [];
    for (let y = 0; y < Math.ceil(rows.length / 12); y++) {
        const chunk = rows.slice(y * 12, y * 12 + 12);
        yearly.push({
            year: y + 1,
            principalPaid: chunk.reduce((s, r) => s + r.principal + r.extraPayment, 0),
            interestPaid: chunk.reduce((s, r) => s + r.interest, 0),
            endingBalance: chunk[chunk.length - 1]?.balance ?? 0,
            cumulativeInterest: chunk[chunk.length - 1]?.cumulativeInterest ?? 0,
        });
    }
    return yearly;
}

/**
 * Affordability calculator — CFPB standard 28%/43% DTI guidelines.
 */
export function calcAffordability(inputs: AffordabilityInputs): AffordabilityResult {
    const { grossMonthlyIncome, monthlyDebts, downPayment, annualInterestRate, loanTermYears } = inputs;
    const C = US_MORTGAGE_CONSTANTS;

    // Max housing payment per CFPB front-end (28%) and back-end (43%) DTI
    const maxFrontEnd = grossMonthlyIncome * C.FRONT_END_DTI_MAX;
    const maxBackEnd = (grossMonthlyIncome * C.BACK_END_DTI_MAX) - monthlyDebts;
    const maxHousingPayment = Math.min(maxFrontEnd, maxBackEnd);

    // Estimate monthly non-PI costs (tax ~1.2%, insurance ~$1,200/yr default)
    const estimatedNonPI = (inputs.annualInsurance / 12) + inputs.monthlyHOA;

    const maxPI = maxHousingPayment - estimatedNonPI;
    if (maxPI <= 0) {
        return {
            maxHomePrice: 0, conservativeHomePrice: 0, aggressiveHomePrice: 0,
            maxLoanAmount: 0, monthlyPaymentAtMax: 0, frontEndDTI: 0, backEndDTI: 0,
            loanType: 'Conventional', conformingLimit: C.CONFORMING_LOAN_LIMIT, fhaFloor: C.FHA_FLOOR,
        };
    }

    // Reverse-engineer max loan amount from max P&I payment
    const r = annualInterestRate / 100 / 12;
    const n = loanTermYears * 12;
    const maxLoanAmount = r > 0
        ? maxPI * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n))
        : maxPI * n;

    const maxHomePrice = maxLoanAmount + downPayment;

    // Tax-adjusted conservative estimate (28% front-end with property tax)
    const conservativeTaxCost = maxHomePrice * (inputs.annualPropertyTax / 100) / 12;
    const conservativePI = maxFrontEnd - estimatedNonPI - conservativeTaxCost;
    const conservativeLoan = r > 0
        ? conservativePI * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n))
        : conservativePI * n;
    const conservativeHomePrice = Math.max(0, conservativeLoan + downPayment);

    const monthlyPaymentAtMax = calcMonthlyPI(maxLoanAmount, annualInterestRate, loanTermYears) + estimatedNonPI;
    const frontEndDTI = (monthlyPaymentAtMax / grossMonthlyIncome) * 100;
    const backEndDTI = ((monthlyPaymentAtMax + monthlyDebts) / grossMonthlyIncome) * 100;

    // Loan type
    let loanType = 'Conventional';
    if (maxLoanAmount > C.CONFORMING_HIGH_COST_LIMIT) loanType = 'Jumbo';
    else if (maxLoanAmount > C.CONFORMING_LOAN_LIMIT) loanType = 'High-Cost Conventional';
    else if (maxLoanAmount <= C.FHA_FLOOR) loanType = 'FHA Eligible';

    return {
        maxHomePrice,
        conservativeHomePrice,
        aggressiveHomePrice: maxHomePrice,
        maxLoanAmount,
        monthlyPaymentAtMax,
        frontEndDTI,
        backEndDTI,
        loanType,
        conformingLimit: C.CONFORMING_LOAN_LIMIT,
        fhaFloor: C.FHA_FLOOR,
    };
}

/**
 * Refinance break-even analysis.
 */
export function calcRefinance(inputs: RefinanceInputs): RefinanceResult {
    const { currentBalance, currentMonthsRemaining, newRate, newTermYears, closingCosts } = inputs;
    const newPayment = calcMonthlyPI(currentBalance, newRate, newTermYears);
    const oldPayment = inputs.currentMonthlyPayment;
    const monthlySavings = oldPayment - newPayment;
    const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : Infinity;

    const breakEvenDate = new Date();
    if (breakEvenMonths !== Infinity) {
        breakEvenDate.setMonth(breakEvenDate.getMonth() + breakEvenMonths);
    }

    const totalCurrentCost = oldPayment * currentMonthsRemaining;
    const totalNewCost = newPayment * newTermYears * 12 + closingCosts;
    const lifetimeSavings = totalCurrentCost - totalNewCost;
    const netSavings = lifetimeSavings;

    return {
        newMonthlyPayment: newPayment,
        monthlySavings,
        breakEvenMonths,
        breakEvenDate,
        totalCurrentCost,
        totalNewCost,
        lifetimeSavings,
        netSavings,
    };
}

/**
 * Auto / Personal loan calculator.
 */
export function calcAutoLoan(inputs: AutoLoanInputs): AutoLoanResult {
    const { vehiclePrice, downPayment, tradeInValue, salesTaxRate, annualInterestRate, loanTermMonths } = inputs;
    const taxableAmount = vehiclePrice - tradeInValue;
    const salesTax = taxableAmount * (salesTaxRate / 100);
    const loanAmount = vehiclePrice + salesTax - downPayment - tradeInValue;

    const monthlyPayment = calcMonthlyPI(loanAmount, annualInterestRate, loanTermMonths / 12);
    const totalCost = monthlyPayment * loanTermMonths + downPayment + tradeInValue;
    const totalInterest = monthlyPayment * loanTermMonths - loanAmount;

    const r = annualInterestRate / 100 / 12;
    let balance = loanAmount;
    const amortization: AutoAmortRow[] = [];
    for (let m = 1; m <= loanTermMonths; m++) {
        const interest = balance * r;
        const principal = Math.min(monthlyPayment - interest, balance);
        balance -= principal;
        amortization.push({ month: m, payment: monthlyPayment, principal, interest, balance: Math.max(0, balance) });
    }

    return { loanAmount, monthlyPayment, totalInterest, totalCost, amortization };
}

/**
 * Rent vs. Buy analysis.
 */
export function calcRentVsBuy(inputs: RentVsBuyInputs): RentVsBuyResult {
    const {
        homePrice, downPayment, mortgageRate, loanTermYears, annualPropertyTax,
        annualInsurance, monthlyHOA, annualHomeAppreciation, monthlyRent,
        annualRentIncrease, yearsToStay, investmentReturn, sellingCostPercent,
    } = inputs;

    const loanAmount = homePrice - downPayment;
    const monthlyPI = calcMonthlyPI(loanAmount, mortgageRate, loanTermYears);
    const monthlyTax = (homePrice * (annualPropertyTax / 100)) / 12;
    const monthlyIns = annualInsurance / 12;

    let buyTotal = 0;
    let rentTotal = 0;
    let homeValue = homePrice;
    let balance = loanAmount;
    let rent = monthlyRent;
    const yearlyData = [];

    // Investment growth on down payment (opportunity cost for buyer)
    let investmentBalance = downPayment;

    for (let year = 1; year <= yearsToStay; year++) {
        const monthlyMaintenance = (homeValue * 0.01) / 12; // 1% annual maintenance

        for (let m = 0; m < 12; m++) {
            const monthlyRate = mortgageRate / 100 / 12;
            const interest = balance * monthlyRate;
            const principal = monthlyPI - interest;
            balance = Math.max(0, balance - principal);

            buyTotal += monthlyPI + monthlyTax + monthlyIns + monthlyHOA + monthlyMaintenance;
            rentTotal += rent;
        }
        rent *= (1 + annualRentIncrease / 100);
        homeValue *= (1 + annualHomeAppreciation / 100);
        investmentBalance *= (1 + investmentReturn / 100);

        const equity = homeValue - balance - homeValue * (sellingCostPercent / 100);
        yearlyData.push({ year, buyCumulative: buyTotal, rentCumulative: rentTotal, equity });
    }

    const homeEquity = homeValue - balance - homeValue * (sellingCostPercent / 100);
    const netBuyCost = buyTotal - homeEquity + downPayment;
    const netRentCost = rentTotal - (investmentBalance - downPayment); // renter gains investment reduce the net cost

    const breakEvenYear = yearlyData.findIndex(d => d.equity > d.rentCumulative - d.buyCumulative) + 1;

    return {
        buyTotalCost: buyTotal,
        rentTotalCost: rentTotal,
        homeEquity,
        netBuyCost,
        netRentCost,
        winner: netBuyCost < netRentCost ? 'buy' : netRentCost < netBuyCost ? 'rent' : 'tie',
        breakEvenYear: breakEvenYear || yearsToStay,
        yearlyData,
    };
}

/**
 * Mortgage points buy-down calculator.
 * 1 point = 1% of loan amount; typically reduces rate by 0.25% per point.
 */
export function calcPointsBuyDown(inputs: PointsBuyDownInputs): PointsBuyDownResult {
    const { loanAmount, baseRate, points, rateReductionPerPoint, loanTermYears } = inputs;
    const newRate = Math.max(0, baseRate - points * rateReductionPerPoint);
    const pointsCost = loanAmount * (points / 100);
    const originalPayment = calcMonthlyPI(loanAmount, baseRate, loanTermYears);
    const newPayment = calcMonthlyPI(loanAmount, newRate, loanTermYears);
    const monthlySavings = originalPayment - newPayment;
    const breakEvenMonths = monthlySavings > 0 ? Math.ceil(pointsCost / monthlySavings) : Infinity;

    const n = loanTermYears * 12;
    const totalInterestOld = originalPayment * n - loanAmount;
    const totalInterestNew = newPayment * n - loanAmount;
    const totalInterestSaved = totalInterestOld - totalInterestNew;

    return {
        originalRate: baseRate,
        newRate,
        pointsCost,
        originalPayment,
        newPayment,
        monthlySavings,
        breakEvenMonths,
        totalInterestSaved,
    };
}

/**
 * Adjustable Rate Mortgage (ARM) analysis.
 */
export function calcArmMortgage(inputs: ArmInputs): ArmResult {
    const { loanAmount, initialTermYears, initialRate, margin, indexRate, capInitial, capLifetime, loanTermYears } = inputs;

    // Initial period
    const initialPayment = calcMonthlyPI(loanAmount, initialRate, loanTermYears);
    const monthsAtInitialRate = initialTermYears * 12;

    // Balance after initial period
    let balanceAtAdj = loanAmount;
    const initialMonthlyRate = initialRate / 100 / 12;
    for (let m = 0; m < monthsAtInitialRate; m++) {
        const interest = balanceAtAdj * initialMonthlyRate;
        const principal = initialPayment - interest;
        balanceAtAdj -= principal;
    }

    const remainingYears = loanTermYears - initialTermYears;

    // Worst case rate
    const worstCaseRate = initialRate + capLifetime;
    const worstCasePayment = calcMonthlyPI(balanceAtAdj, worstCaseRate, remainingYears);

    // Best case rate (fully indexed rate, but floored by margin)
    const fullyIndexedRate = indexRate + margin;
    // The rate could drop, but usually not below the margin
    const bestCaseRate = Math.max(margin, Math.min(initialRate + capInitial, fullyIndexedRate));
    const bestCasePayment = calcMonthlyPI(balanceAtAdj, bestCaseRate, remainingYears);

    // Fully indexed current assumption
    const fullyIndexedPayment = calcMonthlyPI(balanceAtAdj, fullyIndexedRate, remainingYears);

    return {
        initialPayment,
        monthsAtInitialRate,
        worstCaseRate,
        worstCasePayment,
        bestCaseRate,
        bestCasePayment,
        fullyIndexedRate,
        fullyIndexedPayment
    };
}

/**
 * Interest-Only Mortgage calculations.
 */
export function calcInterestOnly(inputs: InterestOnlyInputs): InterestOnlyResult {
    const { loanAmount, annualInterestRate, ioTermYears, loanTermYears } = inputs;
    const ioMonths = ioTermYears * 12;
    const amortizedMonths = (loanTermYears - ioTermYears) * 12;

    const ioMonthlyPayment = loanAmount * (annualInterestRate / 100 / 12);
    const amortizedMonthlyPayment = amortizedMonths > 0
        ? calcMonthlyPI(loanAmount, annualInterestRate, loanTermYears - ioTermYears)
        : 0;

    const totalPayments = (ioMonthlyPayment * ioMonths) + (amortizedMonthlyPayment * amortizedMonths);
    const totalInterest = totalPayments - loanAmount;

    return {
        ioMonthlyPayment,
        ioMonths,
        amortizedMonthlyPayment,
        amortizedMonths,
        totalInterest,
        totalPayments
    };
}

// ─── Formatting Utilities ─────────────────────────────────────────────────────

/** Format as US dollar currency */
export function formatCurrency(value: number, decimals = 0): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
}

/** Format as percent */
export function formatPercent(value: number, decimals = 2): string {
    return `${value.toFixed(decimals)}%`;
}

/** Format date as "Jan 2026" */
export function formatMonthYear(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/** Parse currency input string to number */
export function parseCurrency(str: string): number {
    return parseFloat(str.replace(/[$,]/g, '')) || 0;
}
