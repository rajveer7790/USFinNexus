import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import DownPaymentSeoContent from './DownPaymentSeoContent';

const DownPaymentClient = nextDynamic(() => import('./DownPaymentClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Down Payment Calculator 2026 — Savings Goal Tracker',
    description: 'Free down payment savings calculator. See how long to save 3.5%, 10%, or 20% down on your target home price. Set a monthly savings goal and track your timeline.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/down-payment' },
    openGraph: {
        type: 'website',
        title: 'Down Payment Savings Calculator 2026',
        description: 'How long to save for a down payment? Set your savings goal and see your exact timeline to 3.5%, 10%, or 20% down.',
        url: 'https://usfinnexus.com/calculators/down-payment',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Down Payment Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Down Payment Savings Calculator 2026',
        description: 'How long until you can buy? Set your down payment goal and see your exact savings timeline.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function DownPaymentPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Down Payment Savings Calculator 2026"
                description="See exactly how many months you need to save for your target down payment goal."
                url="https://usfinnexus.com/calculators/down-payment"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Down Payment Calculator', item: '/calculators/down-payment' }]} />
            <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 max-w-2xl">
                        <h2 className="text-3xl font-black mb-2">Down Payment Savings Assumptions</h2>
                        <p className="text-gray-600">Determine exactly how much cash you need to bring to the closing table, and calculate how many months it will take to reach your savings goal.</p>
                    </div>
                    <DownPaymentClient />
                </div>
            <DownPaymentSeoContent />
        </main>
    );
}
