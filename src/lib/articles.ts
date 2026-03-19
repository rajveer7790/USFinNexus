export interface ArticleEntry {
    slug: string;
    title: string;
    category: string;
    readTime: string;
    excerpt: string;
    image: string;
    date: string;
}

export const ALL_ARTICLES: ArticleEntry[] = [
    { slug: 'march-1-2026-fincen-rule-all-cash-home-buyers', title: 'March 1, 2026: New FinCEN Rule Forces All-Cash Home Buyers to Reveal Owners', category: 'Real Estate', readTime: '8 min', excerpt: 'The era of anonymous, all-cash luxury real estate purchases is officially ending. Here is what you need to know.', image: '/images/march_1_rule_hero_1772351631601.png', date: 'Feb 25, 2026' },
    { slug: '2026-boi-filing-why-95-percent-american-llcs-exempt', title: '2026 BOI Filing: Why 95% of American LLCs Are Now Exempt (But Foreign Owners Still Pay)', category: 'BOI Exemption', readTime: '7 min', excerpt: 'Most domestic US LLCs are now exempt from federal BOI reporting, but foreign owners face strict 30-day deadlines.', image: '/images/boi_exempt_hero_1772351361725.png', date: 'Feb 24, 2026' },
    { slug: 'new-york-llc-transparency-act-2026-foreign-owners', title: 'New York LLC Transparency Act 2026: What Foreign Owners Must File by Jan 1', category: 'State Compliance', readTime: '6 min', excerpt: "NY's new law imposes state-level BOI requirements regardless of your federal exemption status.", image: '/images/ny_llc_transparency_hero_1772351646909.png', date: 'Feb 26, 2026' },
    { slug: 'fincen-killed-boi-us-companies-what-llc-owners-must-know', title: 'FinCEN Just Killed BOI for Most US Companies — What Every LLC Owner Must Know in 2026', category: 'BOI Exemption', readTime: '7 min', excerpt: 'The regulatory landscape shifted dramatically—find out if your company is affected.', image: '/images/fincen_killed_boi_hero_1772351566690.png', date: 'Feb 24, 2026' },
    { slug: 'foreign-owned-us-llcs-new-30-day-boi-deadline', title: "Foreign-Owned US LLCs: Your New 30-Day BOI Deadline in 2026 – Don't Miss It!", category: 'BOI Updates', readTime: '5 min', excerpt: 'The grace period is gone. Foreign-owned entities now have just 30 days to file after formation.', image: '/images/foreign_owned_deadline_hero_1772351616208.png', date: 'Feb 25, 2026' },
    { slug: '2026-fincen-boi-rule-changes-what-changed-march-2025', title: '2026 FinCEN BOI Rule Changes: What Changed in March 2025 and Why It Matters Now', category: 'BOI Updates', readTime: '8 min', excerpt: 'A comprehensive timeline of every major BOI rule change leading into 2026.', image: '/images/fincen_changes_hero_1772351375738.png', date: 'Feb 24, 2026' },
    { slug: 'fincen-real-estate-reporting-rule-what-llc-buyers-must-do', title: 'FinCEN Real Estate Reporting Rule 2026: What LLC Buyers Must Do Before Closing', category: 'Real Estate', readTime: '9 min', excerpt: 'Step-by-step closing checklist for LLC buyers under the new reporting framework.', image: '/images/real_estate_rule_hero_1772351582917.png', date: 'Feb 25, 2026' },
    { slug: 'title-companies-investors-10000-penalty-march-1-2026', title: "Title Companies & Investors: The $10,000 Penalty You'll Face After March 1, 2026", category: 'Real Estate', readTime: '6 min', excerpt: 'Settlement agents bear the brunt of non-compliance. Here is what is at stake.', image: '/images/saves_penalties_hero_1772351599113.png', date: 'Feb 24, 2026' },
    { slug: 'avoid-costly-mistakes-fincen-real-estate-reporting-guide', title: 'Avoid Costly Mistakes: Complete Guide to FinCEN Real Estate Reporting Rule 2026', category: 'Real Estate', readTime: '10 min', excerpt: 'The definitive compliance manual for investors, title agents, and attorneys.', image: '/images/real_estate_hero_1772351421933.png', date: 'Feb 24, 2026' },
    { slug: 'buying-house-through-llc-2026-fincen-rule-changes', title: 'Buying a House Through an LLC in 2026? New FinCEN Rule Changes Everything', category: 'Real Estate', readTime: '7 min', excerpt: 'Why purchasing residential property via an LLC now triggers mandatory FinCEN reporting.', image: '/images/llc_house_hero_1772351452372.png', date: 'Feb 24, 2026' },
    { slug: 'boi-exemption-confirmed-2026-free-checklist', title: 'BOI Exemption Confirmed 2026: How to Check If You Still Need to File (Free Checklist)', category: 'BOI Exemption', readTime: '5 min', excerpt: 'Use our free 4-step checklist to determine your exact federal BOI filing status.', image: '/images/checklist_hero_1772351437548.png', date: 'Feb 24, 2026' },
    { slug: 'stop-wasting-money-boi-filing-domestic-llc-2026', title: 'Stop Wasting Money on BOI Filing If You Are a Domestic LLC — 2026 Update', category: 'BOI Exemption', readTime: '6 min', excerpt: 'If your LLC is 100% US-owned, you may be paying for a filing you no longer need.', image: '/images/boi_exempt_hero_1772351361725.png', date: 'Feb 25, 2026' },
    { slug: 'fincen-saves-us-small-businesses-500-penalties-2026', title: 'How the New FinCEN Rule Saves US Small Businesses $500+ in Penalties in 2026', category: 'BOI Updates', readTime: '5 min', excerpt: 'The domestic exemption is saving millions of small businesses from costly compliance.', image: '/images/saves_penalties_hero_1772351599113.png', date: 'Feb 25, 2026' },
    { slug: 'california-new-york-texas-state-boi-rules-2026', title: 'California, New York & Texas: State BOI Rules Every LLC Must Know in 2026', category: 'State Compliance', readTime: '8 min', excerpt: 'Federal exemption does not protect you from aggressive state-level transparency laws.', image: '/images/state_rules_hero_1772351467101.png', date: 'Feb 25, 2026' },
    { slug: 'end-of-anonymous-all-cash-home-buying-fincen-march-2026', title: 'The End of Anonymous All-Cash Home Buying: FinCEN Rule Starts March 2026', category: 'Real Estate', readTime: '7 min', excerpt: 'Shell company secrecy in US real estate is being dismantled, one transaction at a time.', image: '/images/all_cash_hero_1772351515723.png', date: 'Feb 25, 2026' },
    { slug: 'ny-boi-law-starts-january-2026-even-if-federal-exempt', title: "NY BOI Law Starts January 2026 — Even If Federal BOI Is Exempt", category: 'State Compliance', readTime: '6 min', excerpt: 'New York marches ahead with its own transparency framework regardless of federal changes.', image: '/images/ny_llc_transparency_hero_1772351646909.png', date: 'Feb 26, 2026' },
    { slug: '2026-tax-changes-20-percent-qbi-deduction-permanent', title: '2026 Tax Changes: 20% QBI Deduction Made Permanent — Save Big on Your LLC', category: 'Tax', readTime: '8 min', excerpt: 'The One Big Beautiful Bill locked in LLC tax savings permanently. Here is what it means for you.', image: '/images/tax_deduction_hero_1772351400720.png', date: 'Feb 24, 2026' },
    { slug: 'fincen-irs-compliance-checklist-us-llc-2026', title: 'FinCEN + IRS Compliance Checklist Every US LLC Needs in 2026', category: 'Tax', readTime: '7 min', excerpt: 'A combined federal compliance roadmap covering BOI, real estate reporting, and tax filings.', image: '/images/irs_compliance_hero_1772351552653.png', date: 'Feb 25, 2026' },
    { slug: '2026-income-tax-brackets-how-the-tcja-sunset-affects-you', title: '2026 Income Tax Brackets: Navigating the TCJA Sunset and New Legislation', category: 'Tax', readTime: '9 min', excerpt: 'A comprehensive guide to the 2026 income tax bracket changes and how the TCJA sunset impacts your taxable income.', image: '/images/tax_deduction_hero_1772351400720.png', date: 'Feb 26, 2026' },
];

export function getRelatedArticles(currentSlug: string, count = 4): ArticleEntry[] {
    const current = ALL_ARTICLES.find(a => a.slug === currentSlug);
    if (!current) return ALL_ARTICLES.filter(a => a.slug !== currentSlug).slice(0, count);

    const sameCategory = ALL_ARTICLES.filter(a => a.slug !== currentSlug && a.category === current.category);
    const others = ALL_ARTICLES.filter(a => a.slug !== currentSlug && a.category !== current.category);

    return [...sameCategory, ...others].slice(0, count);
}
