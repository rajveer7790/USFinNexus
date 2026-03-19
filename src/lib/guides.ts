export interface GuideEntry {
    slug: string;
    title: string;
    category: string;
    readTime: string;
    excerpt: string;
}

export const ALL_GUIDES: GuideEntry[] = [
    {
        slug: '15-vs-30-year-mortgage',
        title: '15-Year vs. 30-Year Mortgage: Full Breakdown & Math',
        category: 'Education',
        readTime: '10 min',
        excerpt: 'Should you take the monthly savings of a 30-year, or the lifetime interest savings of a 15-year?'
    },

    {
        slug: 'first-time-homebuyer-guide',
        title: 'First-Time Homebuyer Guide 2026',
        category: 'Mortgage',
        readTime: '15 min',
        excerpt: 'Step-by-step from credit prep to closing. The complete handbook for new buyers.'
    },
    {
        slug: 'first-time-homebuyer-programs',
        title: 'First-Time Homebuyer Programs: Federal & State',
        category: 'Mortgage',
        readTime: '10 min',
        excerpt: 'Discover FHA, VA, USDA, and state-specific down payment assistance programs available in 2026.'
    },
    {
        slug: 'mortgage-credit-score-requirements',
        title: 'Mortgage Credit Score Requirements 2026',
        category: 'Education',
        readTime: '8 min',
        excerpt: 'The minimum scores needed for Conventional, FHA, and VA loans, and how to improve yours.'
    }
];
