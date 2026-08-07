import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Database, Lock, Shield } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'How USFinNexus Limits Calculator Data Collection',
    description:
        'Learn how USFinNexus keeps calculator inputs separate from lead forms, what website services still process, and how advertising and hosting affect privacy.',
    alternates: { canonical: 'https://usfinnexus.com/why-we-dont-collect-data' },
    openGraph: {
        type: 'website',
        title: 'How USFinNexus Limits Calculator Data Collection',
        description: 'A precise explanation of browser-based calculator inputs, hosting data, ads and lender-data practices.',
        url: 'https://usfinnexus.com/why-we-dont-collect-data',
        siteName: 'USFinNexus',
    },
};

export default function CalculatorPrivacyPage() {
    return (
        <main className="neo-root bg-white">
            <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Breadcrumbs items={[{ name: 'Calculator Privacy', item: '/why-we-dont-collect-data' }]} />
                    <div className="inline-flex items-center gap-2 px-4 py-2 mt-6 rounded-full bg-blue-100 text-blue-800 text-sm font-bold tracking-wide">
                        <Lock size={16} /> Calculator Privacy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mt-6 mb-6 text-navy-900 leading-tight">
                        How We Limit Calculator Data Collection
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        You should be able to estimate a payment without handing over an email address or phone number. USFinNexus separates ordinary calculator inputs from lead-generation forms while being clear that a public website still uses hosting and advertising services.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                    <h2>What Happens to Calculator Inputs?</h2>
                    <p>
                        Values such as home price, down payment, interest rate and income are designed to be used by calculator code in your browser. You do not need to submit an email address or phone number to receive ordinary calculator results, and USFinNexus does not sell calculator-input values to mortgage lenders as leads.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 my-9 not-prose">
                        <div className="bg-white p-6 rounded-2xl border border-gray-200">
                            <Database className="w-9 h-9 text-blue-600 mb-3" />
                            <h3 className="text-lg font-bold text-navy-900 mb-2">Browser-Based Inputs</h3>
                            <p className="text-sm text-gray-600">Ordinary calculator values are designed to be processed in the browser rather than submitted to USFinNexus as a loan application.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-200">
                            <Shield className="w-9 h-9 text-blue-600 mb-3" />
                            <h3 className="text-lg font-bold text-navy-900 mb-2">No Lender Lead Sale</h3>
                            <p className="text-sm text-gray-600">We do not sell the numbers entered into our calculators to mortgage lenders or brokers as consumer leads.</p>
                        </div>
                    </div>

                    <h2>What Data Can Website Services Process?</h2>
                    <p>
                        Loading any public website creates normal network requests. Cloudflare infrastructure can process technical request information used to deliver and secure USFinNexus. Google AdSense may use cookies or similar technologies for ad delivery, measurement, fraud prevention and, where applicable, personalization or consent-based advertising.
                    </p>
                    <p>
                        Because those services exist, it would be inaccurate to promise that the entire website collects “zero data,” uses “zero cookies,” or is completely anonymous. Our <Link href="/privacy">Privacy Policy</Link> contains the current service-level disclosures.
                    </p>

                    <h2>Why No Email Is Required for Calculator Results</h2>
                    <p>
                        A payment estimate should not require a sales funnel. Standard calculator results are available without entering an email or phone number. If USFinNexus ever introduces a separate form, account or partner feature, that feature should explain what it collects before submission.
                    </p>

                    <h2>Advertising and Editorial Independence</h2>
                    <p>
                        USFinNexus may be supported by display advertising. Advertising does not make a calculator government approved, CFPB certified or professionally reviewed. Financial rules and annual limits are documented separately on our <Link href="/methodology">Methodology &amp; Data Sources</Link> page.
                    </p>

                    <div className="mt-12 p-8 bg-navy-900 rounded-3xl text-center text-white not-prose">
                        <h2 className="text-2xl font-bold mb-3 text-white">Use the calculators without a lead form</h2>
                        <p className="text-blue-100 mb-6">Start with the mortgage calculator or browse the calculator section on the homepage.</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/calculators/mortgage" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full transition-colors">
                                Mortgage Calculator <ArrowRight size={18} />
                            </Link>
                            <Link href="/#calculators" className="inline-flex items-center gap-2 border border-white/30 text-white font-bold py-3 px-6 rounded-full hover:bg-white/10 transition-colors">
                                Browse Calculators
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
