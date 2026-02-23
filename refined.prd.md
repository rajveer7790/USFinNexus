# Product Requirements Document (PRD)
## USFinNexus.com — Free Mortgage & Personal Finance Calculators Hub

| Field | Details |
|---|---|
| **Version** | 2.0 (Refined) |
| **Date** | February 22, 2026 |
| **Author** | Rajveer (Developer & Founder) |
| **Status** | Ready for Implementation |

---

## 1. Executive Summary

**USFinNexus.com** is a fast, trustworthy, 100% free web platform offering professional-grade mortgage and personal finance calculators aimed at everyday American users.

The MVP launches with a **Mortgage Calculator Hub** — including affordability, refinance, auto loan, and personal loan calculators — that matches or exceeds competitors like Bankrate, Zillow, NerdWallet, and MortgageCalculator.org in accuracy and depth with one key differentiator:

> **Instant, no-signup, no-email PDF + CSV full report downloads in one click.**

**Business Goal:** Become the go-to bookmark for Americans checking mortgage scenarios daily. Monetize via high-CPM Google AdSense (finance niche: $20–50 RPM) while building a sticky user base for future premium cloud saves.

**Launch Target:** 7–10 days (solo developer, Next.js on Vercel).

**90-Day Outcome:** 20,000–100,000 monthly US visitors → $500–$3,000 AdSense revenue + organic growth via viral free downloads.

---

## 2. Product Vision & Objectives

### Vision
The cleanest, most useful, spam-free finance calculator experience on the internet — built for real Americans who hate popups, email captures, and lender spam.

### Business Objectives
1. Rank in top 3 on Google for:
   - "free mortgage calculator 2026"
   - "mortgage calculator with PDF download"
   - "how much house can I afford calculator"
2. Achieve 5+ minutes average session time (longer than Bankrate/Zillow).
3. 8–15% repeat visit conversion via local saves and shareable links.
4. Zero aggressive lead-gen — no "get pre-qualified" popups on free calculator pages.

### User Objectives
- Get instant, accurate numbers for home buying, refinancing, and budgeting.
- Export full professional reports for realtors, lenders, or family without friction.
- Feel trusted: clear disclaimers, no data collection.

---

## 3. Target Audience & User Personas

### Primary Audience
- **Age:** 25–55 year old Americans (homebuyers, refinancers, first-time buyers, homeowners).
- **Intent:** High-intent searchers: "monthly mortgage payment calculator", "mortgage affordability 2026".
- **Device split:** 60% mobile, 40% desktop. Usage peaks evenings and weekends.

### Key Personas

| Persona | Profile | Primary Need |
|---|---|---|
| **Alex, 32** — First-Time Buyer | Tech-savvy Reddit user | Affordability check + PDF to share with spouse/realtor |
| **Sarah, 45** — Refinancer | Busy working mom | Compare current vs. new rate; download CSV for Excel |
| **Mike, 38** — Homeowner | Budget-conscious planner | Extra payments + amortization to plan early payoff |

---

## 4. Competitor Analysis

### Market Landscape (Feb 2026)

| Site | Monthly Traffic | Amortization + Charts | Extra Payments | ZIP/Tax Auto | PDF/CSV Export | Lead-Gen |
|---|---|---|---|---|---|---|
| Bankrate | Very High | Yes + basic | Yes | Yes (ZIP) | ❌ None | Heavy |
| Zillow | Extremely High | Basic graph | No | Property est. | ❌ None | Medium |
| NerdWallet | High | Table only | Limited | Editable | ❌ None | Heavy |
| MortgageCalculator.org | High | Donut + line | Yes | Editable | ⚠️ Print only | Ads only |
| USMortgageCalculator | Medium | Table | Yes | Editable | ⚠️ Share link | Low |
| CalcuFly | Growing | Full interactive | Yes | No | ✅ PDF/CSV | Low |

### Market Gap (USFinNexus.com Opportunity)
- **No major site** offers instant, free PDF + CSV full report downloads without email/signup.
- Lead-gen spam is universal; users actively seek clean alternatives (confirmed via Reddit r/personalfinance).
- No major competitor offers a subscription-free combination of: dark mode + PWA + shareable URLs + local saves.

**Winning Strategy:** Be the only clean, developer-built, 100% free + instant full download site. Earn via AdSense ($20–50 RPM finance niche), not lender commissions.

---

## 5. Feature Requirements

### 5.1 Core Calculators (Phase 1 — MVP)

All calculators are **100% free**, **live-updating** (real-time recalculation on every input change).

#### 5.1.1 Main Mortgage Calculator (Homepage + Dedicated Page)

**Inputs:**
- Home price
- Down payment (amount and percentage, linked)
- Annual interest rate
- Loan term (10 / 15 / 20 / 30 years + custom years input)
- ZIP code (for property tax/insurance auto-estimate)
- Property tax (annual, auto-estimated or manual override)
- Homeowners insurance (annual)
- HOA fees (monthly)
- PMI (auto-calculated when down payment < 20%, or manual override)
- Loan start date

**Outputs:**
- Total monthly payment (PITI)
- Breakdown: Principal & Interest | Property Tax | Insurance | HOA | PMI
- Total interest paid over loan life
- Loan payoff date
- Total amount paid

**UI Sections / Tabs:**
1. **Breakdown** — Visual PITI summary with pie chart.
2. **Amortization Schedule** — 360-row table (monthly/yearly toggle, filter by year range).
3. **Extra Payments** — One-time lump sum, recurring monthly addition, bi-weekly payment switch.
4. **Charts** — Balance-over-time line chart + payment breakdown donut.

#### 5.1.2 Additional Calculators (Phase 1 + Phase 2)

| Calculator | Key Inputs | Key Outputs |
|---|---|---|
| **Affordability** | Gross income, monthly debts, credit score est., loan term | Max home price, recommended price, DTI ratios |
| **Refinance Savings** | Current loan details, new rate/term, closing costs | Monthly savings, break-even point, lifetime savings |
| **Auto Loan** | Vehicle price, down payment, rate, term | Monthly payment, total interest, amortization |
| **Personal Loan / Debt Payoff** | Principal, rate, term | Monthly payment, payoff schedule |
| **Side-by-Side Comparison** | Up to 3 loan scenarios | Tabular comparison of all key metrics |
| **Rent vs. Buy** | Rent, home price, rate, years to stay | Net cost comparison with crossover chart |
| **Mortgage Points Buy-Down** | Loan amount, rate, points cost | Effective rate, break-even in months |

---

### 5.2 Differentiating / Unique Features (Killer Edge)

#### 5.2.1 Instant Free Downloads
The primary differentiator. Displayed via **three prominent action buttons** above and below every calculator result:

| Button | Label | Format |
|---|---|---|
| 📄 | Download Full PDF Report (Free) | Multi-page PDF |
| 📊 | Download CSV / Excel | `.csv` file |
| 🔗 | Copy Shareable Link | URL with all params |

**PDF Report Contents (5–10 pages):**
1. Cover page: Site logo, user inputs summary, generation date
2. Payment summary & PITI breakdown
3. Full amortization table
4. Charts (rendered as images)
5. Professional disclaimer

**CSV Export:** Full amortization data (Month, Payment, Principal, Interest, Balance columns).

**Shareable Link:** Serializes current form state into URL query params (e.g., `/?homePrice=350000&rate=6.8&term=30`). Recipient opens link with all fields pre-filled.

#### 5.2.2 Local Scenario Saves
- Store up to 10 named scenarios in browser `localStorage`.
- User can name saves: e.g., *"Austin Home 2026"*, *"Refi Option A"*.
- Load, edit, delete saves — no account required.

#### 5.2.3 Additional Unique Features

| Feature | Description |
|---|---|
| **Inflation-Adjusted Toggle** | Shows future payments in today's dollars using a CPI multiplier |
| **Interest Tax Deduction Estimator** | Simple first-year mortgage interest deduction estimate |
| **PWA (Progressive Web App)** | "Add to Home Screen" prompt — app-like feel on mobile |
| **Dark / Light Mode** | User-persisted theme toggle |

---

### 5.3 Shared UX Features (All Pages)

- Live sliders + numeric inputs, synchronized (change either → updates the other).
- Real-time recalculation on every input change (no "Calculate" button required).
- Interactive Recharts: balance-over-time line + payment breakdown pie.
- Full amortization table with monthly/yearly toggle and year-range filter.
- Extra payments simulator.
- Mobile-first responsive design.
- Print-friendly view (`@media print` CSS).
- Keyboard navigation + ARIA labels (WCAG 2.2 AA).

---

## 6. Page Specifications & User Flows

### 6.1 Homepage (`/`)
- Hero section with the Main Mortgage Calculator embedded.
- Quick-access cards: "Try Affordability Calculator" | "See All Tools".
- Brief trust statement + feature highlights.

### 6.2 Calculator Pages (`/calculators/[name]`)
- Two-column layout on desktop: **Left** = inputs | **Right** = results + charts.
- Sticky download bar (PDF, CSV, Share) visible while scrolling.
- Tabbed result sections (Breakdown / Amortization / Extra Payments / Charts).

### 6.3 Blog / Resources (`/blog`)
- 15–20+ SEO-targeted articles.
- Example: *"Best Free Mortgage Calculator 2026 with PDF Download"*.
- Sidebar links to all calculators.

### 6.4 Static Pages
- **About** — Mission, no lead-gen, privacy commitment.
- **Privacy Policy** — Minimal data collection (only GA4 analytics).
- **Terms of Service** — "Estimates only" disclaimer.
- **Disclaimer** — Prominent on every page and in every PDF.

### 6.5 Footer (All Pages)
- Links to all calculators.
- Legal links (Privacy, Terms, Disclaimer).
- "Not financial advice" notice.

---

## 7. UI / UX Design Guidelines

### Color Palette
| Role | Color | Hex |
|---|---|---|
| Primary | Navy Blue | `#0A2540` |
| Accent / CTA | Success Green | `#00C853` |
| Background | White / Light Gray | `#FFFFFF / #F8F9FA` |
| Text | Dark Gray | `#1A1A2E` |
| Dark Mode BG | Deep Navy | `#060F1E` |

### Typography
- **Font:** Inter (Google Fonts) or System UI stack.
- **Payment numbers:** Large, bold, high-contrast (48px+).
- **Body text:** 16px minimum for readability.

### Trust Elements
- **Disclaimer banner** on every calculator page (red/amber, dismissible):
  > *"For estimation only. Not financial, tax, or legal advice. Consult a licensed professional."*
- SSL badge in footer.
- "No data leaves your browser" statement.

### Style Principles
- Minimal, whitespace-heavy, subtle card shadows.
- Professional yet approachable — cleaner than Bankrate.
- Consistent hover states and micro-animations.
- WCAG 2.2 AA compliance: high contrast, focus rings, screen-reader support.

---

## 8. Technical Specifications

### 8.1 Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15+ |
| Language | TypeScript | 5.7+ (strict) |
| Styling | Tailwind CSS + shadcn/ui + clsx | Tailwind 4 |
| Charts | Recharts | 2.15+ |
| Forms | react-hook-form + zod | Latest stable |
| PDF | jsPDF + html2canvas | jsPDF 3+ |
| CSV | Native `Blob` + `URL.createObjectURL` | — |
| Icons | lucide-react | 0.475+ |
| State | React `useState` / `useReducer` + `URLSearchParams` + `localStorage` | — |
| PWA | next-pwa or manual manifest | — |
| Analytics | Vercel Analytics + Google Analytics 4 | — |
| Ads | Google AdSense via `next/script` | — |
| Testing | Jest + React Testing Library + Playwright | — |
| Linting | ESLint + Prettier + Husky | — |
| Hosting | Vercel (free tier) | — |
| Domain | USFinNexus.com (custom, already purchased) | — |

### 8.2 Architecture

**100% Client-Side MVP** — No backend, no API routes, no database for Phase 1.

```
User Inputs
    ↓
React State (useReducer)
    ↓
Real-time recalculation (lib/formulas.ts)
    ↓
Render: Results Panel + Charts + Amortization Table
    ↓
On "Download PDF" → html2canvas captures DOM → jsPDF assembles document
On "Download CSV" → Blob from amortization array → download link
On "Share" → URLSearchParams(formState) → clipboard
On "Save" → JSON to localStorage
```

**Future Backend (Phase 3):** Supabase (Postgres + Auth) — swap `localStorage` → Supabase client. No architectural changes to core calculator logic.

### 8.3 Recommended Folder Structure

```
/app
  /calculators
    /mortgage/page.tsx
    /affordability/page.tsx
    /refinance/page.tsx
    /auto-loan/page.tsx
    /personal-loan/page.tsx
    /comparison/page.tsx
    /rent-vs-buy/page.tsx
  /blog
    /[slug]/page.tsx
  /about/page.tsx
  /privacy/page.tsx
  /terms/page.tsx
  layout.tsx               ← Root layout: AdSense script, nav, footer
  page.tsx                 ← Homepage with embedded mortgage calculator

/components
  /ui/                     ← shadcn/ui components
  CalculatorForm.tsx       ← Reusable form shell (schema-driven)
  ResultsPanel.tsx         ← Reusable results display
  AmortizationTable.tsx
  DownloadButtons.tsx      ← PDF / CSV / Share buttons
  ScenarioSaver.tsx        ← Local save/load UI
  DisclaimerBanner.tsx

/lib
  formulas.ts              ← Pure math functions (mortgage, DTI, etc.)
  pdfGenerator.ts          ← jsPDF + html2canvas logic
  csvExporter.ts
  taxEstimates.ts          ← Static JSON: state-level property tax averages
  utils.ts

/hooks
  useCalculator.ts         ← Core calculation hook
  useLocalScenarios.ts

/public
  manifest.json            ← PWA manifest
  ads.txt                  ← AdSense publisher verification

globals.css
```

### 8.4 ZIP Code / Property Tax Estimator
- Static JSON in `lib/taxEstimates.ts` with state-level averages and popular ZIP overrides.
  - Example: `{ "CA": 0.76, "TX": 1.68, "90210": 0.85 }`
- On ZIP input change → auto-fill property tax field (user can always override).
- Disclaimer: *"Estimate only — actual taxes vary by county and tax assessment."*

### 8.5 Non-Functional Requirements

| Requirement | Target |
|---|---|
| Core bundle size | < 150KB gzipped |
| First Contentful Paint | < 800ms |
| Lighthouse Score | 95+ (mobile & desktop) |
| Browser Support | Chrome, Edge, Firefox, Safari (current + 1 version prior); iOS Safari; Android Chrome |
| SEO | Dynamic metadata per page, Open Graph images, sitemap.xml, robots.txt |
| Accessibility | WCAG 2.2 AA |
| Error Handling | Zod validation with inline errors; toast notifications (sonner) for action feedback |
| Analytics Events | Page views, calculate, download_pdf, download_csv, share_link, scenario_save |

---

## 9. Monetization Strategy

### Phase 1 — AdSense (Launch)
- Google AdSense on all pages.
- Placement: 2–3 responsive banners per page (above results, sidebar, below amortization table).
- **No interstitials, no popups, no lead-gen forms on calculator pages.**
- Expected RPM: $20–$50 (finance niche, US traffic).

### Phase 2 — Premium Subscription ($4.99/month, Month 2+)
- Cloud saves (sync across devices via Supabase).
- Unlimited save history.
- Ad-free experience.
- Branded PDF reports (user's name on cover page).
- **Core calculators and downloads remain 100% free forever.**

---

## 10. SEO & Marketing Plan

### On-Page SEO
- Page title format: `"Free Mortgage Calculator 2026 with PDF Download | USFinNexus"`
- Unique meta descriptions per page.
- Structured data (JSON-LD: `SoftwareApplication`, `FAQPage`).
- H1 on every page, semantic HTML5.
- Open Graph + Twitter card images per page.

### Content / Blog Strategy
- Launch with 5 foundational SEO articles (Day 5 of development).
- Target 20+ articles by Month 2.
- Priority topics:
  1. *"Best Free Mortgage Calculator 2026 with PDF Download"*
  2. *"How Much House Can I Afford in 2026?"*
  3. *"Mortgage Refinance Calculator: Is Now the Right Time?"*
  4. *"How to Read a Mortgage Amortization Table"*
  5. *"Free Mortgage Amortization Schedule Excel Download 2026"*

### Distribution
- Submit to Google Search Console on Day 1.
- Share on Reddit: r/personalfinance, r/RealEstate, r/FirstTimeHomeBuyer.
- Share in Facebook Groups (homebuyer groups, personal finance groups).

---

## 11. Success Metrics & KPIs

| Metric | Target |
|---|---|
| Monthly Unique Visitors | 50,000+ by Month 3 |
| Average Session Duration | > 4 minutes |
| PDF/CSV Download Rate | ≥ 15% of calculator sessions |
| Bounce Rate | < 45% |
| AdSense Revenue | $500+ by Month 3 |
| Lighthouse Score | 95+ (maintained) |
| Google Search Console Impressions | Growing week-over-week |

---

## 12. Development Roadmap

### Phase 1 — MVP (Days 1–10)
- [ ] Project setup: Next.js, TypeScript, Tailwind, shadcn/ui
- [ ] `lib/formulas.ts` — all mortgage math functions (with unit tests)
- [ ] Main Mortgage Calculator page (all inputs, all outputs, all tabs)
- [ ] Amortization table (360 rows, monthly/yearly toggle)
- [ ] Interactive charts (Recharts pie + line)
- [ ] Extra payments simulator
- [ ] PDF export (jsPDF + html2canvas)
- [ ] CSV export
- [ ] Shareable URL
- [ ] Local scenario saves (localStorage)
- [ ] Affordability Calculator page
- [ ] ZIP code tax estimator (static JSON)
- [ ] Dark/light mode
- [ ] Homepage with embedded calculator
- [ ] Disclaimer banner, footer, static pages (Privacy, Terms, Disclaimer)
- [ ] AdSense script integration
- [ ] Google Analytics 4 setup
- [ ] Deploy to Vercel + connect USFinNexus.com

### Phase 2 — Growth (Weeks 3–6)
- [ ] Refinance Savings & Break-Even Calculator
- [ ] Auto Loan Calculator
- [ ] Personal Loan / Debt Payoff Calculator
- [ ] Side-by-Side Loan Comparison (3 scenarios)
- [ ] Rent vs. Buy Comparator
- [ ] Mortgage Points Buy-Down Calculator
- [ ] Blog launch (5–10 SEO articles)
- [ ] PWA manifest + install prompt
- [ ] Performance audit & Lighthouse optimization

### Phase 3 — Premium (Month 2+)
- [ ] Supabase integration (auth + DB)
- [ ] Premium subscription (Stripe)
- [ ] Cloud saves (sync across devices)
- [ ] Ad-free mode
- [ ] Branded PDF reports
- [ ] Inflation-Adjusted Payments toggle
- [ ] Interest Tax Deduction Estimator

---

## 13. Legal & Compliance

### Disclaimer (Required on Every Page & Every PDF)
> *"The calculations and information provided on USFinNexus.com are for estimation and educational purposes only. They do not constitute financial, tax, legal, or investment advice. Results are based on the inputs provided and may not reflect actual loan terms, taxes, or insurance costs. Always consult a licensed financial professional before making any financial decisions."*

### Privacy Policy
- Minimal data collection.
- Analytics (GA4): anonymous, aggregated page views and events only.
- No personal data sold or shared.
- All calculator data processed locally in user's browser; no data sent to USFinNexus servers.

### Terms of Service
- Tool outputs are estimates only.
- No warranty on accuracy.
- User is responsible for verifying information with licensed professionals.

---

## 14. Assumptions & Risk Mitigation

| Assumption / Risk | Mitigation |
|---|---|
| Users prefer clean experience over lender quotes | Validated by Reddit feedback + competitor traffic analysis |
| Finance CPM remains $20–50 in 2026 | Conservative revenue projections used; AdSense performance monitored weekly |
| Google algorithm changes affect rankings | Mitigated by high-quality, unique content across 20+ pages; no thin content |
| jsPDF/html2canvas PDF quality issues | Test on multiple browsers; provide fallback print view |
| ZIP tax data accuracy | Clearly labeled as estimate; user override always available |

---

*Document Version 2.0 — Refined and consolidated from original PRD drafts.*
*USFinNexus.com — Built for Americans, from Bengaluru. 🚀*
