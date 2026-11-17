import type { ReactNode } from 'react';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import EditorialImage from '@/components/EditorialImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import { editorialImageDimensions } from '@/lib/editorial-metadata';

export default function ReviewedGuide({ title, description, path, published, modified = '2026-10-17', image, alt, answer, children, faqs, legal = false }: {
  title: string; description: string; path: string; published: string; image: string; alt: string;
  answer: ReactNode; children: ReactNode; faqs: [string, string][]; legal?: boolean; modified?: string;
}) {
  const url = `https://usfinnexus.com${path}`;
  const size = editorialImageDimensions(image) || { width: 1200, height: 630 };
  return <>
    <ArticleSchema title={title} description={description} url={url} datePublished={published} dateModified={modified} authorName="USFinNexus Editorial Team" image={`https://usfinnexus.com${image}`} imageSize={size} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }) }} />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: legal ? 'Articles' : 'Blog', item: legal ? '/articles' : '/blog' }, { name: title, item: path }]} />
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1 className="text-3xl sm:text-5xl font-black leading-tight">{title}</h1>
        <p className="text-sm">By <Link href="/about">USFinNexus Editorial Team</Link> · Reviewed <time dateTime={modified}>{new Date(modified + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time></p>
        <EditorialImage src={image} alt={alt} width={size.width} height={size.height} priority className="w-full h-auto rounded-2xl" />
        {image.includes('resilient-investor-checklist') && <p className="text-xs text-slate-600">Original AI-generated editorial illustration of investment planning.</p>}
        <div className="my-6 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 text-slate-900"><p className="m-0"><strong>Quick answer: </strong>{answer}</p></div>
        {children}
        <h2>Frequently asked questions</h2>
        {faqs.map(([q, a]) => <section key={q}><h3>{q}</h3><p>{a}</p></section>)}
        <p className="text-sm border-t pt-5">Educational information only; this is not personalized {legal ? 'legal or tax' : 'financial, investment or tax'} advice. Rules and personal circumstances differ. Check the linked official guidance and consult an appropriate professional before acting. See our <Link href="/methodology">methodology</Link> and <Link href="/disclaimer">disclaimer</Link>.</p>
      </article>
      <ContextualInternalLinks currentSlug={path.split('/').pop()!} showBlogs showCalculators />
    </div>
  </>;
}
