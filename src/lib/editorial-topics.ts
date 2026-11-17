/** Intent-first grouping: generic words such as income must not connect DTI to tax credits. */
export function editorialTopic(slug: string): string {
    if (/fincen|boi|llc-transparency/.test(slug)) return 'compliance';
    if (/student|fafsa|pell|529/.test(slug)) return 'education';
    if (/social-security|medicare|aca|cobra|snap|benefit/.test(slug)) return 'benefits';
    if (/401k|(?:^|-)ira(?:-|$)|roth|retire|rmd|pension|fire/.test(slug)) return 'retirement';
    if (/crypto/.test(slug)) return 'crypto';
    if (/tax|irs|qbi|deduction|withholding/.test(slug)) return 'tax';
    if (/auto|(?:^|-)car(?:-|$)|vehicle|chattel/.test(slug)) return 'auto';
    if (/dti|debt-to-income|afford|28-36|salary.*house/.test(slug)) return 'affordability';
    if (/pmi|mortgage-insurance/.test(slug)) return 'insurance';
    if (/refinance|recast|heloc|home-equity/.test(slug)) return 'equity';
    if (/closing|down-payment|homebuyer|preapproval|fha|(?:^|-)va(?:-|$)|usda|conforming|loan-limit|assumable/.test(slug)) return 'homebuying';
    if (/payoff|pay-off|amortization|biweekly|mortgage-payment|points|buydown|interest-only|reverse-mortgage/.test(slug)) return 'mortgage';
    if (/credit-card|debt|personal-loan|buy-now-pay-later|apr|store-card/.test(slug)) return 'debt';
    if (/treasur|savings|(?:^|-)cd(?:-|$)|fdic|checking|bank|emergency/.test(slug)) return 'banking';
    if (/invest|stock|bond|portfolio|sp500|fractional|multifamily/.test(slug)) return 'investing';
    if (/home|house|housing|real-estate|sunbelt|mortgage|rent/.test(slug)) return 'housing';
    return 'budget';
}

const families: Record<string, string> = {
    affordability: 'housing', insurance: 'housing', equity: 'housing', homebuying: 'housing', mortgage: 'housing', housing: 'housing',
    retirement: 'savings', banking: 'savings', investing: 'savings', crypto: 'savings',
    debt: 'cashflow', auto: 'cashflow', education: 'cashflow', budget: 'cashflow',
};
export const editorialFamily = (topic: string) => families[topic] || topic;
const generic = new Set(['2026','2027','2028','guide','calculator','how','what','your','with','the','and','for','vs','explained','rules','income','loan','interest','payment','payments','good','best','strategy','comparison','why','when','pay','buy']);
export function meaningfulTerms(slug: string): Set<string> {
    return new Set(slug.toLowerCase().split('-').filter(t => t.length > 2 && !generic.has(t)).map(t => t.replace(/s$/, '')));
}

export const TOPIC_CALCULATORS: Record<string, string[]> = {
    affordability: ['affordability','dti','mortgage'], insurance: ['pmi-removal','fha','mortgage'],
    equity: ['refinance','heloc','mortgage'], homebuying: ['mortgage','down-payment','closing-costs'],
    mortgage: ['mortgage','mortgage-payoff','amortization'], housing: ['rent-vs-buy','affordability','mortgage'],
    debt: ['debt-payoff','credit-card','personal-loan'], auto: ['auto-loan','dti','budget'],
    banking: ['investment','budget'], investing: ['investment','retirement'], retirement: ['retirement','investment'],
    crypto: ['crypto-tax','investment'], tax: ['income-tax','paycheck'], benefits: ['budget','retirement'],
    education: ['student-loan','budget'], compliance: ['income-tax','closing-costs'], budget: ['budget','paycheck'],
};

export const CURATED_RELATED: Record<string, string[]> = {
    'credit-card-grace-period-interest': ['deferred-interest-vs-zero-apr-store-cards-2026', 'pay-mortgage-with-credit-card', 'credit-card-payoff-calculator-strategies'],
    'buy-now-pay-later-holiday-budget': ['deferred-interest-vs-zero-apr-store-cards-2026', 'credit-card-grace-period-interest', 'emergency-fund-how-much-2026'],
    'treasury-bill-ladder': ['treasury-bills-vs-high-yield-savings-2026', 'fdic-deposit-insurance-limits-2026', 'emergency-fund-how-much-2026'],
    'ai-personal-finance-investing-2026': ['tax-loss-harvesting-calculator-strategy', 'sp500-vs-real-estate-investing-2026', 'treasury-bills-vs-high-yield-savings-2026'],
};
