import type { Metadata } from 'next';
import { Suspense } from 'react';
import AffordabilityClient from './AffordabilityClient';

export const metadata: Metadata = {
    title: 'Home Affordability Calculator 2026 — How Much House Can I Afford?',
    description: 'Free CFPB-compliant home affordability calculator. Know your max home price, monthly payment, front-end & back-end DTI in seconds. No signup, no spam.',
    openGraph: {
        title: 'Home Affordability Calculator 2026 | USFinNexus',
        description: 'Calculate exactly how much house you can afford based on CFPB 28%/43% DTI guidelines.',
        url: 'https://usfinnexus.com/calculators/affordability',
    },
};

export default function AffordabilityPage() {
    return (
        <Suspense fallback={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>How Much House Can I Afford?</h1>
                    <p style={{ color: 'var(--color-text-muted)' }} className="max-w-2xl">
                        Based on CFPB guidelines: 28% front-end DTI / 43% back-end DTI for Qualified Mortgages.
                    </p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                    <div className="xl:col-span-2 card p-6 animate-pulse h-80" />
                    <div className="xl:col-span-3 card p-6 animate-pulse h-80" />
                </div>
            </div>
        }>
            <AffordabilityClient />
        </Suspense>
    );
}
