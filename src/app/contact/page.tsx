import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Contact Us | USFinNexus',
    description: 'Get in touch with the team at USFinNexus.com for inquiries, feedback, and support regarding our mortgage and finance calculators.',
    alternates: { canonical: 'https://usfinnexus.com/contact' },
};

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <Breadcrumbs items={[{ name: 'Contact', item: '/contact' }]} />
            <h1 className="text-3xl font-black mb-6" style={{ color: 'var(--color-text)' }}>Contact Us</h1>

            <div className="card p-6 mb-6" style={{ borderLeft: '4px solid #00C853' }}>
                <p className="text-lg font-semibold leading-relaxed" style={{ color: 'var(--color-text)' }}>
                    We love hearing from our users! Whether you have a question about our calculators, a suggestion for a new feature, or simply want to say hello, we are here to help.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="card p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full flex justify-center items-center mb-4" style={{ backgroundColor: 'rgba(0, 200, 83, 0.1)' }}>
                        <Mail className="w-6 h-6" style={{ color: '#00C853' }} />
                    </div>
                    <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Email Us</h2>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                        For all inquiries, please reach out to us via email. We strive to respond to all messages within 24-48 hours.
                    </p>
                    <a href="mailto:contact@usfinnexus.com" className="text-sm font-bold" style={{ color: '#00C853' }}>
                        contact@usfinnexus.com
                    </a>
                </div>

                <div className="card p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full flex justify-center items-center mb-4" style={{ backgroundColor: 'rgba(0, 200, 83, 0.1)' }}>
                        <MapPin className="w-6 h-6" style={{ color: '#00C853' }} />
                    </div>
                    <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Mailing Address</h2>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                        USFinNexus<br />
                        Suite 100, Financial District<br />
                        New York, NY 10005<br />
                        United States
                    </p>
                </div>
            </div>

            <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                <section>
                    <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Frequently Asked Questions</h2>
                    <p className="mb-2">Before reaching out, you might want to check our frequently asked questions:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li><strong>Are your calculators really free?</strong> Yes! All our core calculators and tools are 100% free with no hidden fees.</li>
                        <li><strong>Do you sell my data?</strong> Absolutely not. We do not collect personal data on our calculators, nor do we sell it to lenders.</li>
                        <li><strong>Can I suggest a new calculator?</strong> We welcome suggestions! Please email us your ideas.</li>
                    </ul>
                </section>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/calculators/mortgage" className="btn-green">Start Mortgage Calculator</Link>
                <Link href="/about" className="btn-outline">About Us</Link>
            </div>
        </div>
    );
}
