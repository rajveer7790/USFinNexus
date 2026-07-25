import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Shield, EyeOff, Database, Target, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Why USFinNexus Collects Zero Data | The Privacy-First Calculator',
    description: 'Most mortgage calculators sell your data to lenders. USFinNexus does not. We are the completely free, zero-data alternative for Americans. Learn why we don\'t sell your data.',
    alternates: { canonical: 'https://usfinnexus.com/why-we-dont-collect-data' },
    openGraph: {
        type: 'website',
        title: 'Why USFinNexus Collects Zero Data | The Privacy-First Calculator',
        description: 'Most mortgage calculators sell your data to lenders as expensive "leads". We do not. Read our zero-data promise.',
        url: 'https://usfinnexus.com/why-we-dont-collect-data',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Zero Data Promise' }],
    },
};

export default function WhyNoDataPage() {
    return (
        <main className="neo-root bg-white">
            <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Breadcrumbs items={[{ name: 'Our Privacy Promise', item: '/why-we-dont-collect-data' }]} />
                    <div className="inline-flex items-center gap-2 px-4 py-2 mt-6 rounded-full bg-blue-100 text-blue-800 text-sm font-bold tracking-wide">
                        <Lock size={16} /> The USFinNexus Promise
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mt-6 mb-6 text-navy-900 leading-tight">
                        Why We Don't <br className="hidden sm:block" /> Collect Your Data
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        The internet is full of "free" mortgage calculators. What they don't tell you is that <em>you</em> are the product. We built USFinNexus to be different.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                    
                    <h2 className="text-3xl font-black text-navy-900 mb-6">The Hidden Cost of "Free" Calculators</h2>
                    <p>
                        When you use a mortgage or personal loan calculator on one of the massive corporate finance websites, you are usually participating in a highly lucrative lead-generation funnel.
                    </p>
                    <p>
                        As you enter your target home price, your down payment savings, your ZIP code, and your email address to "save your results," that company packages your financial profile into a "lead." They then sell that lead to multiple mortgage brokers simultaneously.
                    </p>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8 flex items-start gap-4">
                        <Target className="w-8 h-8 text-red-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-red-900 mt-0 mb-2">The Result? Endless Spam.</h3>
                            <p className="text-red-800 m-0">
                                Within minutes of calculating your potential monthly payment, your phone starts ringing. You receive dozens of emails from lenders you've never heard of, all aggressively competing to originate your loan. You didn't want a mortgage today — you just wanted to do some math.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-black text-navy-900 mt-12 mb-6">The USFinNexus Alternative: Zero Data Collection</h2>
                    <p>
                        We fundamentally believe that everyday Americans should have access to professional-grade financial tools without sacrificing their privacy. We built USFinNexus on a modern web architecture called <strong>client-side processing</strong>.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8 my-10 not-prose">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <Database className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-navy-900 mb-2">No Databases</h3>
                            <p className="text-gray-600">When you type numbers into our calculators, those numbers never leave your phone or computer. We literally do not possess a database to store your calculations.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <EyeOff className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-navy-900 mb-2">No Tracking Profiles</h3>
                            <p className="text-gray-600">We don't build shadow profiles of your estimated net worth or home-buying timeline. You remain entirely anonymous.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <Shield className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-navy-900 mb-2">No Lender Sales</h3>
                            <p className="text-gray-600">Because we don't have your data, we couldn't sell it even if we wanted to. You will never receive a phone call from a broker because of us.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <Lock className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-navy-900 mb-2">Local PDF Generation</h3>
                            <p className="text-gray-600">Even our PDF export feature runs locally in your browser. It doesn't ping a server to generate your amortization schedule.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-black text-navy-900 mt-12 mb-6">How Do We Make Money?</h2>
                    <p>
                        Transparency is core to our mission. USFinNexus is supported entirely by standard, non-intrusive display advertisements (the banner ads you see on the site). 
                    </p>
                    <p>
                        We do not accept "bounties" or commissions from lenders for referring you to them. This allows us to remain 100% objective and mathematically accurate, following strict <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB (Consumer Financial Protection Bureau)</a> guidelines for all our formulas.
                    </p>

                    <div className="mt-16 p-8 bg-navy-900 rounded-3xl text-center text-white">
                        <h3 className="text-3xl font-bold mb-4 text-white mt-0">Ready to do the math?</h3>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Experience the difference of a truly private, blazing-fast financial calculator.
                        </p>
                        <Link href="/calculators" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-full transition-colors no-underline">
                            Explore Our Free Calculators <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}
