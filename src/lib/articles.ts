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
    { slug: 'new-york-llc-transparency-act-2026-foreign-owners', title: 'New York LLC Transparency Act 2026: What Foreign Owners Must File by Jan 1', category: 'State Compliance', readTime: '6 min', excerpt: "NY's new law imposes state-level BOI requirements regardless of your federal exemption status.", image: '/images/ny_llc_transparency_hero_1772351646909.png', date: 'Feb 26, 2026' },
    { slug: 'fincen-real-estate-reporting-rule-what-llc-buyers-must-do', title: 'FinCEN Real Estate Reporting Rule 2026: What LLC Buyers Must Do Before Closing', category: 'Real Estate', readTime: '9 min', excerpt: 'Step-by-step closing checklist for LLC buyers under the new reporting framework.', image: '/images/real_estate_rule_hero_1772351582917.png', date: 'Feb 25, 2026' },
    { slug: 'title-companies-investors-10000-penalty-march-1-2026', title: "Title Companies & Investors: The $10,000 Penalty You'll Face After March 1, 2026", category: 'Real Estate', readTime: '6 min', excerpt: 'Settlement agents bear the brunt of non-compliance. Here is what is at stake.', image: '/images/saves_penalties_hero_1772351599113.png', date: 'Feb 24, 2026' },
    { slug: 'avoid-costly-mistakes-fincen-real-estate-reporting-guide', title: 'Avoid Costly Mistakes: Complete Guide to FinCEN Real Estate Reporting Rule 2026', category: 'Real Estate', readTime: '10 min', excerpt: 'The definitive compliance manual for investors, title agents, and attorneys.', image: '/images/real_estate_hero_1772351421933.png', date: 'Feb 24, 2026' },
    { slug: 'buying-house-through-llc-2026-fincen-rule-changes', title: 'Buying a House Through an LLC in 2026? New FinCEN Rule Changes Everything', category: 'Real Estate', readTime: '7 min', excerpt: 'Why purchasing residential property via an LLC now triggers mandatory FinCEN reporting.', image: '/images/llc_house_hero_1772351452372.png', date: 'Feb 24, 2026' },
    { slug: 'end-of-anonymous-all-cash-home-buying-fincen-march-2026', title: 'The End of Anonymous All-Cash Home Buying: FinCEN Rule Starts March 2026', category: 'Real Estate', readTime: '7 min', excerpt: 'Shell company secrecy in US real estate is being dismantled, one transaction at a time.', image: '/images/all_cash_hero_1772351515723.png', date: 'Feb 25, 2026' },
    { slug: 'ny-boi-law-starts-january-2026-even-if-federal-exempt', title: "NY BOI Law Starts January 2026 - Even If Federal BOI Is Exempt", category: 'State Compliance', readTime: '6 min', excerpt: 'New York marches ahead with its own transparency framework regardless of federal changes.', image: '/images/ny_llc_transparency_hero_1772351646909.png', date: 'Feb 26, 2026' },
    { slug: '2026-tax-changes-20-percent-qbi-deduction-permanent', title: '2026 Tax Changes: 20% QBI Deduction Made Permanent - Save Big on Your LLC', category: 'Tax', readTime: '8 min', excerpt: 'The One Big Beautiful Bill locked in LLC tax savings permanently. Here is what it means for you.', image: '/images/tax_deduction_hero_1772351400720.png', date: 'Feb 24, 2026' },
    { slug: 'california-new-york-texas-state-boi-rules-2026', title: 'California, New York & Texas: State BOI Rules Every LLC Must Know in 2026', category: 'State Compliance', readTime: '8 min', excerpt: 'Federal exemptions and state disclosure requirements are separate questions. Check each state agency before filing.' , image: '/images/state_rules_hero_1772351467101.png', date: 'Feb 25, 2026' },
];

function seededRandom(seed: number) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function shuffleArray<T>(array: T[], seedStr: string): T[] {
    let seed = 0;
    for (let i = 0; i < seedStr.length; i++) {
        seed += seedStr.charCodeAt(i);
    }
    
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed++) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function getRelatedArticles(currentSlug: string, count = 4): ArticleEntry[] {
    const current = ALL_ARTICLES.find(a => a.slug === currentSlug);
    
    if (!current) {
        // If current article is not in the list, deterministically shuffle the entire list
        // based on the currentSlug so that every page gets a unique set of related articles.
        const fallbackArticles = ALL_ARTICLES.filter(a => a.slug !== currentSlug);
        return shuffleArray(fallbackArticles, currentSlug).slice(0, count);
    }

    const sameCategory = ALL_ARTICLES.filter(a => a.slug !== currentSlug && a.category === current.category);
    const others = ALL_ARTICLES.filter(a => a.slug !== currentSlug && a.category !== current.category);

    return [...sameCategory, ...others].slice(0, count);
}
