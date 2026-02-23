/**
 * US Property Tax Estimates by State + Popular ZIP Code Overrides
 * Source: Tax Foundation 2025–2026 State Property Tax Data
 * Values are effective tax rates as percentage of home value.
 * These are ESTIMATES only — actual taxes vary by county and local assessment.
 */

export interface TaxEstimate {
    rate: number;       // Annual effective tax rate (percent of home value)
    insurance: number;  // Typical annual homeowners insurance (dollars)
    source: 'state' | 'zip';
}

// State-level effective property tax rates (2025–2026)
// Source: Tax Foundation, Lincoln Institute of Land Policy
export const STATE_TAX_RATES: Record<string, TaxEstimate> = {
    AL: { rate: 0.41, insurance: 1800, source: 'state' },  // Alabama
    AK: { rate: 1.22, insurance: 1100, source: 'state' },  // Alaska
    AZ: { rate: 0.63, insurance: 1400, source: 'state' },  // Arizona
    AR: { rate: 0.62, insurance: 1600, source: 'state' },  // Arkansas
    CA: { rate: 0.76, insurance: 1800, source: 'state' },  // California
    CO: { rate: 0.51, insurance: 1600, source: 'state' },  // Colorado
    CT: { rate: 2.15, insurance: 1500, source: 'state' },  // Connecticut
    DE: { rate: 0.57, insurance: 900, source: 'state' },  // Delaware
    FL: { rate: 0.89, insurance: 2800, source: 'state' },  // Florida (higher insurance due to hurricanes)
    GA: { rate: 0.92, insurance: 1400, source: 'state' },  // Georgia
    HI: { rate: 0.28, insurance: 1200, source: 'state' },  // Hawaii
    ID: { rate: 0.69, insurance: 900, source: 'state' },  // Idaho
    IL: { rate: 2.27, insurance: 1400, source: 'state' },  // Illinois (highest after NJ)
    IN: { rate: 0.85, insurance: 1200, source: 'state' },  // Indiana
    IA: { rate: 1.57, insurance: 1100, source: 'state' },  // Iowa
    KS: { rate: 1.41, insurance: 1500, source: 'state' },  // Kansas
    KY: { rate: 0.86, insurance: 1300, source: 'state' },  // Kentucky
    LA: { rate: 0.55, insurance: 2400, source: 'state' },  // Louisiana
    ME: { rate: 1.36, insurance: 900, source: 'state' },  // Maine
    MD: { rate: 1.09, insurance: 1100, source: 'state' },  // Maryland
    MA: { rate: 1.23, insurance: 1200, source: 'state' },  // Massachusetts
    MI: { rate: 1.54, insurance: 1000, source: 'state' },  // Michigan
    MN: { rate: 1.12, insurance: 1200, source: 'state' },  // Minnesota
    MS: { rate: 0.65, insurance: 1700, source: 'state' },  // Mississippi
    MO: { rate: 1.01, insurance: 1300, source: 'state' },  // Missouri
    MT: { rate: 0.84, insurance: 1000, source: 'state' },  // Montana
    NE: { rate: 1.73, insurance: 1300, source: 'state' },  // Nebraska
    NV: { rate: 0.60, insurance: 900, source: 'state' },  // Nevada
    NH: { rate: 2.18, insurance: 900, source: 'state' },  // New Hampshire
    NJ: { rate: 2.47, insurance: 1200, source: 'state' },  // New Jersey (highest)
    NM: { rate: 0.80, insurance: 1200, source: 'state' },  // New Mexico
    NY: { rate: 1.72, insurance: 1200, source: 'state' },  // New York
    NC: { rate: 0.82, insurance: 1500, source: 'state' },  // North Carolina
    ND: { rate: 0.98, insurance: 1300, source: 'state' },  // North Dakota
    OH: { rate: 1.59, insurance: 900, source: 'state' },  // Ohio
    OK: { rate: 0.90, insurance: 2200, source: 'state' },  // Oklahoma
    OR: { rate: 0.97, insurance: 900, source: 'state' },  // Oregon
    PA: { rate: 1.58, insurance: 900, source: 'state' },  // Pennsylvania
    RI: { rate: 1.63, insurance: 1100, source: 'state' },  // Rhode Island
    SC: { rate: 0.57, insurance: 1800, source: 'state' },  // South Carolina
    SD: { rate: 1.31, insurance: 1100, source: 'state' },  // South Dakota
    TN: { rate: 0.71, insurance: 1500, source: 'state' },  // Tennessee
    TX: { rate: 1.68, insurance: 2000, source: 'state' },  // Texas (no income tax, high property tax)
    UT: { rate: 0.63, insurance: 800, source: 'state' },  // Utah
    VT: { rate: 1.90, insurance: 900, source: 'state' },  // Vermont
    VA: { rate: 0.82, insurance: 1200, source: 'state' },  // Virginia
    WA: { rate: 1.08, insurance: 1000, source: 'state' },  // Washington
    WV: { rate: 0.59, insurance: 800, source: 'state' },  // West Virginia
    WI: { rate: 1.85, insurance: 900, source: 'state' },  // Wisconsin
    WY: { rate: 0.61, insurance: 900, source: 'state' },  // Wyoming
    DC: { rate: 0.56, insurance: 1200, source: 'state' },  // Washington, D.C.
};

// Popular ZIP code overrides (more specific rates for high-traffic markets)
export const ZIP_TAX_OVERRIDES: Record<string, TaxEstimate> = {
    // California
    '90210': { rate: 0.82, insurance: 2000, source: 'zip' }, // Beverly Hills
    '90025': { rate: 0.79, insurance: 1800, source: 'zip' }, // West LA
    '94102': { rate: 0.72, insurance: 1700, source: 'zip' }, // San Francisco
    '95014': { rate: 0.75, insurance: 1600, source: 'zip' }, // Cupertino
    '92037': { rate: 0.78, insurance: 1600, source: 'zip' }, // La Jolla
    // Texas
    '78701': { rate: 1.75, insurance: 1900, source: 'zip' }, // Austin
    '77001': { rate: 1.82, insurance: 2100, source: 'zip' }, // Houston
    '75201': { rate: 1.70, insurance: 2000, source: 'zip' }, // Dallas
    // New York
    '10001': { rate: 1.65, insurance: 1300, source: 'zip' }, // NYC Midtown
    '10577': { rate: 2.05, insurance: 1200, source: 'zip' }, // Westchester NY
    '11201': { rate: 0.88, insurance: 1200, source: 'zip' }, // Brooklyn
    // Florida
    '33101': { rate: 0.92, insurance: 3200, source: 'zip' }, // Miami
    '32801': { rate: 0.85, insurance: 2400, source: 'zip' }, // Orlando
    '33602': { rate: 0.93, insurance: 2600, source: 'zip' }, // Tampa
    // Illinois
    '60601': { rate: 2.10, insurance: 1400, source: 'zip' }, // Chicago Loop
    '60563': { rate: 2.45, insurance: 1300, source: 'zip' }, // Naperville
    // Washington
    '98101': { rate: 1.02, insurance: 1100, source: 'zip' }, // Seattle
    '98004': { rate: 0.99, insurance: 1100, source: 'zip' }, // Bellevue
    // Colorado
    '80202': { rate: 0.55, insurance: 1600, source: 'zip' }, // Denver
    '80302': { rate: 0.52, insurance: 1400, source: 'zip' }, // Boulder
    // Georgia
    '30301': { rate: 0.98, insurance: 1400, source: 'zip' }, // Atlanta
    // Arizona
    '85001': { rate: 0.67, insurance: 1300, source: 'zip' }, // Phoenix
    '85251': { rate: 0.65, insurance: 1300, source: 'zip' }, // Scottsdale
    // Nevada
    '89101': { rate: 0.63, insurance: 900, source: 'zip' },  // Las Vegas
    '89501': { rate: 0.61, insurance: 800, source: 'zip' },  // Reno
    // North Carolina
    '27601': { rate: 0.78, insurance: 1500, source: 'zip' }, // Raleigh
    '28201': { rate: 0.85, insurance: 1500, source: 'zip' }, // Charlotte
    // Massachusetts
    '02101': { rate: 1.05, insurance: 1200, source: 'zip' }, // Boston
    // Virginia
    '22201': { rate: 0.91, insurance: 1200, source: 'zip' }, // Arlington
    // Tennessee
    '37201': { rate: 0.72, insurance: 1600, source: 'zip' }, // Nashville
};

/**
 * Look up property tax rate and insurance estimate by ZIP code or state code.
 * @param zip - 5-digit ZIP code string
 * @param stateCode - 2-letter state abbreviation (fallback)
 */
export function getTaxEstimate(zip: string, stateCode?: string): TaxEstimate {
    // Try ZIP override first
    const cleanZip = zip.replace(/\D/g, '').slice(0, 5);
    if (ZIP_TAX_OVERRIDES[cleanZip]) return ZIP_TAX_OVERRIDES[cleanZip];

    // Map ZIP to state (simplified — use stateCode if provided)
    const state = stateCode?.toUpperCase() ?? zipToState(cleanZip);
    if (state && STATE_TAX_RATES[state]) return STATE_TAX_RATES[state];

    // National average fallback
    return { rate: 1.10, insurance: 1400, source: 'state' };
}

/** Simplified ZIP-to-state mapping based on ZIP prefix ranges */
function zipToState(zip: string): string {
    const prefix = parseInt(zip.slice(0, 3));
    if (prefix >= 5 && prefix <= 9) return 'CT';        // CT 006-009
    if (prefix >= 10 && prefix <= 149) return 'NY';
    if (prefix >= 150 && prefix <= 196) return 'PA';
    if (prefix >= 197 && prefix <= 199) return 'DE';
    if (prefix >= 200 && prefix <= 205) return 'DC';
    if (prefix >= 206 && prefix <= 212) return 'MD';
    if (prefix >= 220 && prefix <= 246) return 'VA';
    if (prefix >= 247 && prefix <= 268) return 'WV';
    if (prefix >= 270 && prefix <= 289) return 'NC';
    if (prefix >= 290 && prefix <= 299) return 'SC';
    if (prefix >= 300 && prefix <= 319) return 'GA';
    if (prefix >= 320 && prefix <= 349) return 'FL';
    if (prefix >= 350 && prefix <= 369) return 'AL';
    if (prefix >= 370 && prefix <= 385) return 'TN';
    if (prefix >= 386 && prefix <= 397) return 'MS';
    if (prefix >= 398 && prefix <= 432) return 'TX';
    if (prefix >= 433 && prefix <= 433) return 'OK';
    if (prefix >= 440 && prefix <= 489) return 'OH';
    if (prefix >= 490 && prefix <= 499) return 'MI';
    if (prefix >= 500 && prefix <= 528) return 'IA';
    if (prefix >= 530 && prefix <= 549) return 'WI';
    if (prefix >= 550 && prefix <= 567) return 'MN';
    if (prefix >= 570 && prefix <= 577) return 'SD';
    if (prefix >= 580 && prefix <= 588) return 'ND';
    if (prefix >= 590 && prefix <= 599) return 'MT';
    if (prefix >= 600 && prefix <= 629) return 'IL';
    if (prefix >= 630 && prefix <= 658) return 'MO';
    if (prefix >= 660 && prefix <= 679) return 'KS';
    if (prefix >= 680 && prefix <= 693) return 'NE';
    if (prefix >= 700 && prefix <= 714) return 'LA';
    if (prefix >= 716 && prefix <= 729) return 'AR';
    if (prefix >= 730 && prefix <= 749) return 'OK';
    if (prefix >= 750 && prefix <= 799) return 'TX';
    if (prefix >= 800 && prefix <= 816) return 'CO';
    if (prefix >= 820 && prefix <= 831) return 'WY';
    if (prefix >= 832 && prefix <= 838) return 'ID';
    if (prefix >= 840 && prefix <= 847) return 'UT';
    if (prefix >= 850 && prefix <= 865) return 'AZ';
    if (prefix >= 870 && prefix <= 884) return 'NM';
    if (prefix >= 889 && prefix <= 898) return 'NV';
    if (prefix >= 900 && prefix <= 961) return 'CA';
    if (prefix >= 970 && prefix <= 979) return 'OR';
    if (prefix >= 980 && prefix <= 994) return 'WA';
    if (prefix >= 995 && prefix <= 999) return 'AK';
    if (prefix >= 96701 && prefix <= 96898) return 'HI';
    return 'TX'; // Texas as default (high traffic state)
}
