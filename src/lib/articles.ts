import { canonicalPath } from '@/lib/canonical-routes';
export interface ArticleEntry {
 slug: string; title: string; category: string; readTime: string; excerpt: string; image: string; date: string;
}
export const ALL_ARTICLES: ArticleEntry[] = [
 { slug: 'fincen-real-estate-reporting-rule-what-llc-buyers-must-do', title: 'FinCEN Real Estate Reporting Rule: Vacatur and Current Status', category: 'Real Estate', readTime: '4 min', excerpt: 'Current FinCEN guidance after the March 19, 2026 court vacatur, with a closing checklist and links to the official status.', image: '/images/real_estate_rule_hero_1772351582917.png', date: 'Oct 17, 2026' },
 { slug: 'new-york-llc-transparency-act-2026-foreign-owners', title: 'New York LLC Transparency Act 2026: Who Must File and When', category: 'State Compliance', readTime: '4 min', excerpt: 'Check the country of formation, exemption-attestation rules and the correct state filing window.', image: '/images/ny_llc_transparency_hero_1772351646909.png', date: 'Oct 17, 2026' },
 { slug: '2026-tax-changes-20-percent-qbi-deduction-permanent', title: '2026 Tax Changes: The Permanent QBI Deduction', category: 'Tax', readTime: '8 min', excerpt: 'How the qualified business income deduction fits into a business owner’s tax planning.', image: '/images/tax_deduction_hero_1772351400720.png', date: 'Feb 24, 2026' },
 { slug: 'california-new-york-texas-state-boi-rules-2026', title: 'California, New York and Texas: Separate State LLC Filing Checks', category: 'State Compliance', readTime: '5 min', excerpt: 'Separate federal BOI from state entity records, ownership disclosure and tax reporting.', image: '/images/state_rules_hero_1772351467101.png', date: 'Oct 17, 2026' },
].filter(a => canonicalPath('/articles/' + a.slug) === '/articles/' + a.slug);

export function getRelatedArticles(currentSlug: string, count = 4): ArticleEntry[] {
 const current = ALL_ARTICLES.find(a => a.slug === currentSlug);
 return ALL_ARTICLES.filter(a => a.slug !== currentSlug)
  .sort((a,b) => Number(b.category === current?.category) - Number(a.category === current?.category)).slice(0,count);
}
