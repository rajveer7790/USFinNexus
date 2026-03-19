import type { Metadata } from 'next';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = { title: 'About USFinNexus | Free Mortgage Calculators', description: 'About USFinNexus.com — our mission to provide free, spam-free mortgage and finance calculators for Americans.' };

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <Breadcrumbs items={[{ name: 'About', item: '/about' }]} />
            <h1 className="text-3xl font-black mb-6" style={{ color: 'var(--color-text)' }}>About USFinNexus</h1>

            <div className="card p-6 mb-6" style={{ borderLeft: '4px solid #00C853' }}>
                <p className="text-lg font-semibold leading-relaxed" style={{ color: 'var(--color-text)' }}>
                    USFinNexus.com is a free, spam-free finance calculator platform built specifically for everyday Americans. Our mission: give you professional-grade mortgage tools without requiring your email, phone number, or subjecting you to lender spam calls.
                </p>
            </div>

            <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                <section>
                    <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Why We Built This</h2>
                    <p>Every major mortgage calculator site — Bankrate, Zillow, NerdWallet — forces you through a funnel that ends with a lender calling you. They earn commissions from lender referrals. We don&apos;t. We earn through Google AdSense, which means our only incentive is to help you get accurate information quickly.</p>
                </section>

                <section>
                    <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>US Standard Math</h2>
                    <p>All our calculations follow:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>CFPB mortgage payment formulas and DTI guidelines (consumerfinance.gov)</li>
                        <li>2026 FHFA conforming loan limits: $832,750 baseline, $1,249,125 high-cost</li>
                        <li>2026 FHA floor: $541,287 / ceiling: $1,249,125 (HUD)</li>
                        <li>Standard US amortization math (monthly compounding, exact day count)</li>
                        <li>Homeowners Protection Act PMI cancellation at 78% LTV</li>
                        <li>Tax Foundation state property tax data</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Our Commitment</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>All core calculators will always be 100% free</li>
                        <li>PDF and CSV downloads will always be free — no paywall, ever</li>
                        <li>No user data sold to lenders or third parties</li>
                        <li>No &quot;get pre-qualified&quot; popups on calculator pages</li>
                        <li>Annual updates to reflect current loan limits and guidelines</li>
                    </ul>
                </section>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/calculators/mortgage" className="btn-green text-sm">Start Mortgage Calculator</Link>
                <Link href="/disclaimer" className="btn-outline text-sm">View Full Disclaimer</Link>
                <a href="https://linkedin.com/in/rajveer7790" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#0da6f2] transition-colors text-sm font-semibold ml-auto">
                    <Linkedin size={18} />
                    Follow on LinkedIn
                </a>
            </div>
        </div>
    );
}
