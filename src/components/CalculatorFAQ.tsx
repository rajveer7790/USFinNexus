'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
    question: string;
    answer: string;
}

interface CalculatorFAQProps {
    faqs: FAQItem[];
    title?: string;
}

export default function CalculatorFAQ({ faqs, title = 'Frequently Asked Questions' }: CalculatorFAQProps) {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {/* FAQPage JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqs.map((faq) => ({
                            '@type': 'Question',
                            name: faq.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.answer,
                            },
                        })),
                    }),
                }}
            />

            <div className="glass-card p-5">
                <h2 className="text-xl font-black mb-5 tracking-tight" style={{ color: 'var(--color-text)' }}>
                    {title}
                </h2>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="rounded-xl border transition-all duration-200"
                            style={{
                                borderColor: open === i ? '#0da6f2' : 'var(--color-border)',
                                background: open === i ? 'rgba(13,166,242,0.04)' : 'transparent',
                            }}
                        >
                            <button
                                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                                onClick={() => setOpen(open === i ? null : i)}
                                aria-expanded={open === i}
                            >
                                <span className="font-bold text-sm leading-snug" style={{ color: 'var(--color-text)' }}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className="shrink-0 transition-transform duration-200"
                                    style={{
                                        color: '#0da6f2',
                                        transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                                    }}
                                />
                            </button>
                            {open === i && (
                                <div className="px-6 pb-5">
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
