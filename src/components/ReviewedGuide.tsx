import type { ReactNode } from 'react';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import EditorialImage from '@/components/EditorialImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';

export default function ReviewedGuide({ title, description, path, published, image, alt, answer, children, faqs, legal = false }: {
  title: string; description: string; path: string; published: string; image: string; alt: string;
  answer: ReactNode; children: ReactNode; faqs: [string, string][]; legal?: boolean;
}) {
  const url = `https://usfinnexus.com${path}`;
  return <>
    <ArticleSchema title={title} description={description} url={url} datePublished={published} dateModified="2026-10-17" authorName="USFinNexus Editorial Team" image={`https://usfinnexus.com${image}`} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }) }} />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: legal ? 'Articles' : 'Blog', item: legal ? '/articles' : '/blog' }, { name: title, item: path }]} />
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1 className="text-3xl sm:text-5xl font-black leading-tight">{title}</h1>
        <p className="text-sm">By USFinNexus Editorial Team · Updated October 17, 2026</p>
        <EditorialImage src={image} alt={alt} width={1200} height={630} priority className="w-full h-auto rounded-2xl" />
        <div className="my-8 rounded-xl border border-blue-200 bg-blue-50 p-5 text-slate-900"><p className="m-0"><strong>Quick answer: </strong>{answer}</p></div>
        {children}
        <h2>Frequently asked questions</h2>
        {faqs.map(([q, a]) => <section key={q}><h3>{q}</h3><p>{a}</p></section>)}
        <p className="text-sm border-t pt-5">Educational information only; this is not personalized {legal ? 'legal or tax' : 'financial, investment or tax'} advice. Rules and personal circumstances differ. Check the linked official guidance and consult an appropriate professional before acting. See our <Link href="/methodology">methodology</Link> and <Link href="/disclaimer">disclaimer</Link>.</p>
      </article>
      {!legal && <ContextualInternalLinks currentSlug={path.split('/').pop()!} showBlogs showCalculators />}
    </div>
  </>;
}
