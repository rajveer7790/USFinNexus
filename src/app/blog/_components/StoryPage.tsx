import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import { completeEditorialMetadata } from '@/lib/editorial-metadata';

export type Story = {slug:string; title:string; description:string; alt:string; category:string; faq:[string,string][]};
const date='2026-11-24';
const url=(s:Story)=>'https://usfinnexus.com/blog/'+s.slug;
const img=(s:Story)=>'/images/'+s.slug+'.webp';
export function storyMetadata(s:Story, publishedDate = date): Metadata {
  const image={url:'https://usfinnexus.com'+img(s),alt:s.alt,width:1200,height:630};
  return completeEditorialMetadata({title:s.title,description:s.description,alternates:{canonical:url(s)},openGraph:{type:'article',locale:'en_US',title:s.title,description:s.description,url:url(s),siteName:'USFinNexus',publishedTime:publishedDate,modifiedTime:publishedDate,images:[image]},twitter:{card:'summary_large_image',title:s.title,description:s.description,images:[image]}});
}
export function StoryPage({story:s,children,datePublished}:{story:Story;children:React.ReactNode;datePublished:string}) {
  return <div className="max-w-4xl mx-auto py-7 sm:py-9">
    <ArticleSchema title={s.title} description={s.description} url={url(s)} image={'https://usfinnexus.com'+img(s)} datePublished={datePublished} dateModified={datePublished} authorName="USFinNexus Editorial Team" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:s.faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))})}} />
    <Breadcrumbs items={[{name:'Blog',item:'/blog'},{name:s.title,item:'/blog/'+s.slug}]} />
    <article className="prose prose-slate max-w-none">
      <header className="fn-article-head"><span className="fn-article-kicker">{s.category}</span><h1>{s.title}</h1><p className="fn-article-deck">{s.description}</p><div className="fn-article-byline"><span>By <Link href="/about">USFinNexus Editorial Team</Link></span><time dateTime={datePublished}>{new Intl.DateTimeFormat('en-US', {dateStyle:'long', timeZone:'UTC'}).format(new Date(datePublished))}</time></div></header>
      <figure><EditorialImage src={img(s)} alt={s.alt} width={1200} height={630} priority sizes="(min-width: 1050px) 790px, 100vw" className="w-full h-auto rounded-xl my-5" /><figcaption>Original AI-generated editorial illustration.</figcaption></figure>
      {children}
      <h2>Frequently asked questions</h2>{s.faq.map(([q,a])=><section key={q}><h3>{q}</h3><p>{a}</p></section>)}
      <p><strong>Disclaimer:</strong> Educational information only, not financial, tax, legal or lending advice. Verify your circumstances with the applicable agency, lender or a qualified professional.</p>
      <ContextualInternalLinks currentSlug={s.slug} />
    </article>
  </div>;
}
