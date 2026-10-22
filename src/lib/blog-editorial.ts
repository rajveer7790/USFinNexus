import fs from 'fs';
import path from 'path';

export function blogCategory(slug: string): string {
    if (/snap|benefits/.test(slug) && !/va-loan/.test(slug)) return 'Government Benefits';
    if (/medicare|social-security|retire|401k|(?:^|-)ira(?:-|$)|roth|rmd|fire|savers-credit/.test(slug)) return 'Retirement';
    if (/student-loan|fafsa|pell-grant/.test(slug)) return 'Education';
    if (/(?:^|-)fsa(?:-|$)|flexible-spending/.test(slug)) return 'Employee Benefits';
    if (/(?:^|-)cd(?:-|$)|certificate-of-deposit/.test(slug)) return 'Banking';
    if (/auto|(?:^|-)car(?:-|$)|vehicle|trade-in/.test(slug)) return 'Auto Loans';
    if (/credit-card|balance-transfer|deferred-interest|store-cards/.test(slug)) return 'Credit Cards';
    if (/tax|irs|deduction|withholding|salt/.test(slug)) return 'Taxes';
    if (/personal-loan|debt-payoff|debt-consolidation/.test(slug)) return 'Personal Finance';
    if (/mortgage|refinance|fha|(?:^|-)va(?:-|$)|usda|pmi|heloc|buydown|closing|escrow|down-payment|afford|appraisal/.test(slug)) return 'Mortgage';
    if (/invest|stock|bond|treasury|dividend|compound|crypto/.test(slug)) return 'Investing';
    if (/fdic|sipc|bank|savings|checking|emergency/.test(slug)) return 'Banking';
    if (/home|housing|house|real-estate/.test(slug)) return 'Housing Market';
    return 'Personal Finance';
}

const FALLBACKS: Record<string, string> = {
    Mortgage: '/images/mortgage-recast-vs-refinance-2026.webp',
    'Housing Market': '/images/mortgage-cash-reserves-after-closing-2026.webp',
    Taxes: '/images/2026-federal-tax-brackets-standard-deduction.webp',
    Investing: '/images/resilient-investor-checklist-2026.webp',
    Retirement: '/images/401k-contribution-limits-2026.webp',
    'Auto Loans': '/images/car-loan-interest-tax-deduction-2026.webp',
    Education: '/images/federal-student-loan-interest-rates-2026-27.webp',
    'Government Benefits': '/images/snap-benefits-2027.webp',
};

function exists(url: string): boolean {
    return url.startsWith('/images/') && fs.existsSync(path.join(process.cwd(), 'public', url));
}

export function blogImage(source: string, slug: string, category: string): string {
    // Prefer the article's own hero, not an unrelated category placeholder.
    const candidates = [
        ...[...source.matchAll(/const\s+image\s*=\s*['"](\/images\/[^'"]+)['"]/g)].map(m => m[1]),
        ...[...source.matchAll(/(?:src|image)\s*=\s*['"](\/images\/[^'"]+)['"]/g)].map(m => m[1]),
        ...[...source.matchAll(/['"]https:\/\/usfinnexus\.com(\/images\/[^'"]+)['"]/g)].map(m => m[1]),
        `/images/${slug}.webp`, `/images/${slug}.svg`,
    ];
    return candidates.find(exists) || FALLBACKS[category] || '/images/emergency-fund-how-much-2026.webp';
}

export function blogTitle(source: string, slug: string): string {
    const match = source.match(/(?:title\s*:|const\s+title\s*=)\s*(['"])((?:\\.|(?!\1).)*)\1/);
    return (match?.[2] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))
        .replace(/\\(['"])/g, '$1').replace(/\s*\|\s*(?:USFinNexus|Guide)\s*$/gi, '');
}

export function blogExcerpt(source: string): string {
    const description = source.match(/(?:const\s+description\s*=|description\s*:)\s*(['"])((?:\\.|(?!\1).)*)\1/)?.[2];
    const lead = source.match(/<p\b[^>]*className=['"][^'"]*\blead\b[^'"]*['"][^>]*>([\s\S]*?)<\/p>/)?.[1];
    const text = (description || lead || 'Explore the assumptions, examples and practical next steps in this guide.')
        .replace(/<[^>]+>/g, '').replace(/\{[^}]*\}/g, '').replace(/\\(['"])/g, '$1').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
    return text.length > 220 ? `${text.slice(0, 217).replace(/\s+\S*$/, '')}…` : text;
}
