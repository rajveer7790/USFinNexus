import type { Metadata } from 'next';
import InterestOnlyClient from './InterestOnlyClient';

export const metadata: Metadata = {
    title: 'Interest-Only Mortgage Calculator | USFinNexus',
    description: 'Calculate your interest-only mortgage payments and see exactly how much your payment will jump when the loan fully amortizes.',
};

export default function InterestOnlyPage() {
    return <InterestOnlyClient />;
}
