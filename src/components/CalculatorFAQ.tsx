export interface FAQItem { question: string; answer: string }

/** Answers stay in initial HTML; native details works without JavaScript. */
export default function CalculatorFAQ({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQItem[]; title?: string }) {
    return <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" data-faq-section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
        }).replace(/</g, '\\u003c') }} />
        <div className="glass-card p-5">
            <h2 className="text-xl font-black mb-5 tracking-tight">{title}</h2>
            <div className="space-y-3">{faqs.map((faq, i) => <details key={faq.question} open={i === 0} className="rounded-xl border border-slate-200 p-4">
                <summary className="min-h-[44px] cursor-pointer font-bold text-sm leading-snug">{faq.question}</summary>
                <p className="pt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>)}</div>
        </div>
    </section>;
}
