/** Official, source-dated context. Calculator inputs remain editable scenarios. */
export const PMMS = {
    date: '2026-10-22', label: 'October 22, 2026',
    thirtyYear: 7.32, fifteenYear: 6.68,
    source: 'https://www.freddiemac.com/pmms',
} as const;

export const FEDERAL_2026 = {
    conformingBaseline: 832750, conformingHighCost: 1249125,
    fhaFloor: 541287, socialSecurityWageBase: 184500,
    irsSource: 'https://www.irs.gov/pub/irs-drop/rp-25-32.pdf',
    fhfaSource: 'https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026',
    hudSource: 'https://www.hud.gov/program_offices/administration/hudclips/letters/mortgagee',
} as const;
