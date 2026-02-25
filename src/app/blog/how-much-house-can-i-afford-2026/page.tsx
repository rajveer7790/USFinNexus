import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, DollarSign, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'How Much House Can I Afford in 2026? | USFinNexus',
    description: 'Use the 28/36 rule, factor in 2026 interest rates, and calculate exactly how much house you can afford with our free affordability guide.',
};

export default function BlogPost() {
    return (
        <article className="max-w-3xl mx-auto px-4 py-12 md:py-20">
            <Link href="/blog" className="inline-flex items-center text-sm mb-8 hover:opacity-80 transition-opacity" style={{ color: 'var(--color-text-muted)' }}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>

            <header className="mb-10">
                <span className="inline-block px-3 py-1 rounded text-xs font-bold mb-4" style={{ background: 'rgba(0,200,83,0.12)', color: '#00C853' }}>
                    Affordability
                </span>
                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--color-text)' }}>
                    How Much House Can I Afford in 2026?
                </h1>
                <div className="flex items-center gap-4 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    <span>By USFinNexus Editorial Team</span>
                    <span>·</span>
                    <span>February 25, 2026</span>
                    <span>·</span>
                    <span>7 min read</span>
                </div>
            </header>

            <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text)' }}>
                <p className="lead text-xl font-medium mb-8" style={{ color: 'var(--color-text-muted)' }}>
                    With 2026 mortgage rates stabilizing around 6.5–7% and median home prices hovering near $420,000 nationally, the question &quot;How much house can I afford?&quot; has never been more important. Here&apos;s a clear, no-nonsense framework.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">The 28/36 Rule: Your Starting Point</h2>
                <p className="mb-6">
                    Most lenders use the <strong>28/36 rule</strong> as a baseline for mortgage qualification:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 not-prose">
                    <div className="card p-6 text-center">
                        <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-500" />
                        <h3 className="font-bold text-3xl mb-1" style={{ color: 'var(--color-navy)' }}>28%</h3>
                        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>of gross monthly income should be the <strong>maximum</strong> spent on housing (PITI)</p>
                    </div>
                    <div className="card p-6 text-center">
                        <DollarSign className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                        <h3 className="font-bold text-3xl mb-1" style={{ color: 'var(--color-navy)' }}>36%</h3>
                        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>of gross monthly income should be the <strong>maximum</strong> for all debt (housing + car + student loans + credit cards)</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-4">Example: $80,000 Annual Income</h2>
                <p className="mb-6">Let&apos;s walk through a real example for someone earning $80,000 per year:</p>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-8">
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                            <span><strong>Gross monthly income:</strong> $6,667</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                            <span><strong>Max housing payment (28%):</strong> $1,867/month</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                            <span><strong>At 6.75% rate, 30-year fixed:</strong> You can afford roughly a <strong>$285,000–$310,000</strong> home with 10% down</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                            <span><strong>With 20% down:</strong> You push that to <strong>$320,000–$350,000</strong> (and eliminate PMI)</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-4">Hidden Costs Most Buyers Forget</h2>
                <div className="card p-6 mb-8 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500">
                    <div className="flex gap-4">
                        <AlertTriangle className="w-6 h-6 shrink-0 text-yellow-600" />
                        <div>
                            <h3 className="font-bold mb-2">Don&apos;t Forget These Expenses</h3>
                            <ul className="text-sm space-y-1 m-0 pl-4 list-disc">
                                <li><strong>Property taxes:</strong> Varies wildly by state ($1,500–$15,000+ annually)</li>
                                <li><strong>Homeowner&apos;s insurance:</strong> $1,200–$3,000/year on average</li>
                                <li><strong>PMI:</strong> 0.5–1.5% of loan amount if under 20% down</li>
                                <li><strong>HOA fees:</strong> $200–$600/month in many communities</li>
                                <li><strong>Maintenance:</strong> Budget 1–2% of home value annually</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-4">2026-Specific Factors</h2>
                <p className="mb-6">
                    Several 2026 dynamics affect affordability beyond just interest rates:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li><strong>Rate buydowns:</strong> Many builders are offering 2-1 buydowns that make the first two years significantly cheaper.</li>
                    <li><strong>State first-time buyer programs:</strong> States like California, Texas, and Florida have expanded assistance in 2026.</li>
                    <li><strong>Remote work premium:</strong> If you can work remotely, consider lower-cost markets where your dollar stretches further.</li>
                    <li><strong>QBI deduction:</strong> If you&apos;re self-employed, the permanent 20% QBI deduction effectively increases your take-home pay.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-12 mb-4">The Conservative Approach</h2>
                <p className="mb-6">
                    Just because a lender approves you for $350,000 doesn&apos;t mean you should spend that much. Many financial advisors recommend the <strong>&quot;25% rule&quot;</strong>—keeping your total housing costs at or below 25% of your <em>take-home</em> (after-tax) pay, not your gross pay. This gives you a much larger cushion for emergencies, investments, and lifestyle.
                </p>

                <hr className="my-10 border-gray-200 dark:border-gray-800" />

                <div className="card p-8 text-center">
                    <h3 className="text-xl font-bold mb-3">Calculate Your Exact Number</h3>
                    <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                        Plug in your income, debts, and down payment to see exactly what you can afford.
                    </p>
                    <Link href="/calculators/affordability" className="btn-primary py-3 px-6 text-sm inline-block">
                        Open Affordability Calculator
                    </Link>
                </div>
            </div>
        </article>
    );
}
