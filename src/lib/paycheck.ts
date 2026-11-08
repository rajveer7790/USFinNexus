export type FilingStatus = 'single' | 'joint' | 'head';

export const PAY_PERIODS = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 } as const;
export const NO_STATE_WAGE_TAX = new Set(['AK', 'FL', 'NV', 'NH', 'SD', 'TN', 'TX', 'WA', 'WY']);

// IRS 2026 Pub. 15-T, Worksheet 1A, Section 1. Lower edges of marginal bands.
const STANDARD: Record<FilingStatus, number[]> = {
    single: [7500, 19900, 57900, 113200, 209275, 263725, 648100],
    joint: [19300, 44100, 120100, 230700, 422850, 531750, 788000],
    head: [15550, 33250, 83000, 121250, 217300, 271750, 656150],
};
const STEP_TWO: Record<FilingStatus, number[]> = {
    single: [8050, 14250, 33250, 60900, 108938, 136163, 328350],
    joint: [16100, 28500, 66500, 121800, 217875, 272325, 400450],
    head: [12075, 20925, 45800, 64925, 112950, 140175, 332375],
};
const RATES = [.10, .12, .22, .24, .32, .35, .37];
const money = (x: number) => Math.round((x + Number.EPSILON) * 100) / 100;

export const STATE_PAYROLL_SOURCES: Record<string, string> = {
    IL: 'https://tax.illinois.gov/forms/withholding/currentyear/il-700-t-withholding-guide-tables.html',
    MI: 'https://www.michigan.gov/taxes/-/media/Project/Websites/taxes/Forms/SUW/TY2026/446_Withholding-Guide_2026.pdf',
};

export function calcStatePaycheck(state: string, taxableWages: number, periods: number, allowances = 0, extraAllowances = 0) {
    if (NO_STATE_WAGE_TAX.has(state)) return 0;
    if (state === 'IL') return money(.0495 * Math.max(0, taxableWages - (2925 * allowances + 1000 * extraAllowances) / periods));
    if (state === 'MI') return money(.0425 * Math.max(0, taxableWages - 5900 * allowances / periods));
    return undefined;
}

export interface PaycheckInputs {
    gross: number;
    periods: number;
    filing: FilingStatus;
    multipleJobs: boolean;
    otherIncome: number;
    w4Deductions: number;
    credits: number;
    extraFederal: number;
    retirement: number;
    section125: number;
    postTax: number;
    ytdFicaWages: number;
    stateTax?: number;
    localTax: number;
}

export function calcPaycheck(input: PaycheckInputs) {
    const gross = money(Math.max(0, input.gross));
    const ficaWages = Math.max(0, gross - input.section125);
    const federalWages = Math.max(0, ficaWages - input.retirement);
    const offset = input.multipleJobs ? 0 : input.filing === 'joint' ? 12900 : 8600;
    const adjusted = Math.max(0, federalWages * input.periods + input.otherIncome - input.w4Deductions - offset);
    const bands = (input.multipleJobs ? STEP_TWO : STANDARD)[input.filing];
    const annualTentative = bands.reduce((tax, start, index) =>
        tax + Math.max(0, Math.min(adjusted, bands[index + 1] ?? Infinity) - start) * RATES[index], 0);
    const federal = money(Math.max(0, annualTentative - input.credits) / input.periods + input.extraFederal);
    const socialSecurity = money(Math.max(0, Math.min(ficaWages, 184500 - input.ytdFicaWages)) * .062);
    const medicare = money(ficaWages * .0145);
    const additionalMedicare = money(Math.min(ficaWages, Math.max(0, input.ytdFicaWages + ficaWages - 200000)) * .009);
    const deductions = money(input.section125 + input.retirement + input.postTax);
    const beforeState = money(gross - deductions - federal - socialSecurity - medicare - additionalMedicare - input.localTax);
    const net = input.stateTax === undefined ? undefined : money(beforeState - input.stateTax);
    return { gross, federal, socialSecurity, medicare, additionalMedicare, deductions, beforeState, net };
}
