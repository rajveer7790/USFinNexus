import type { Metadata } from 'next';
import MortgageCalculatorClient from './MortgageCalculatorClient';

export const metadata: Metadata = {
    title: 'Free Mortgage Calculator 2026 with PDF Download',
    description:
        'Calculate your full PITI mortgage payment in seconds. Download a professional PDF report or CSV/Excel amortization schedule — free, no signup, no email needed.',
    openGraph: {
        title: 'Free Mortgage Calculator 2026 with PDF Download | USFinNexus',
        description: 'Full PITI breakdown, amortization schedule, extra payments, and instant free PDF + CSV exports.',
        url: 'https://usfinnexus.com/calculators/mortgage',
    },
};

export default function MortgagePage() {
    return <MortgageCalculatorClient />;
}
