import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio, { USFinNexusEditorialTeam } from '@/components/AuthorBio';
import RelatedCalculators from '@/components/RelatedCalculators';
import RelatedArticles from '@/components/RelatedArticles';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';
import EditorialImage from '@/components/EditorialImage';

const title = "Mortgage Closing Costs: What Homebuyers Should Expect";
const description = "See which fees appear on a Loan Estimate, what changes your cash to close, and how to compare two lender offers.";
const canonical = 'https://usfinnexus.com/blog/closing-costs-itemized-breakdown-2026';
const cover = '/images/redesign/closing-costs.webp';
const image = { url: 'https://usfinnexus.com' + cover, width: 1250, height: 410, alt: "Exterior and roof of a blue-gray home" };

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical },
    openGraph: { type: 'article', title, description, url: canonical, siteName: 'USFinNexus', images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [{ url: image.url, alt: image.alt }] },
};

export default function BlogPost() {
    return (
        <>
            <ArticleSchema title={title} description={description} url={canonical}
                datePublished="2026-05-26" dateModified="2026-11-09" image={image.url} imageSize={image}
                authorName={USFinNexusEditorialTeam.name} keywords={["Mortgage","Home Buying","Closing Costs","Loan Estimate"]} />
            <div className="max-w-4xl mx-auto px-4 py-7 sm:py-9">
                <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: "Mortgage closing costs", item: '/blog/closing-costs-itemized-breakdown-2026' }]} />
                <article className="prose prose-slate max-w-none">
                    <header className="fn-article-head">
                        <span className="fn-article-kicker">Home buying</span>
                        <h1>{title}</h1>
                        <p className="fn-article-deck">Read your Loan Estimate line by line, separate fees from cash to close, and compare lender offers before you sign.</p>
                        <div className="fn-article-byline">
                            <span>By <Link href="/about">{USFinNexusEditorialTeam.name}</Link></span>
                            <span>Updated <time dateTime="2026-11-09">November 9, 2026</time></span>
                        </div>
                    </header>
                    <EditorialImage className="fn-reading-cover" src={cover} alt={image.alt}
                        width={image.width} height={image.height} sizes="(min-width: 1050px) 790px, 100vw" priority />
                    <section className="fn-article-takeaways" aria-labelledby="key-takeaways">
                        <h2 id="key-takeaways">Key takeaways</h2>
                        <ul>
                            <li>Closing costs cover lender charges, third-party services, government fees and certain upfront expenses. They are separate from the down payment.</li>
                            <li>Use the same loan amount, term and rate-lock assumptions when comparing quotes. A lower rate can come with more upfront points.</li>
                            <li>Compare the final Closing Disclosure with your most recent Loan Estimate, especially the cash-to-close amount.</li>
                        </ul>
                    </section>
                    <h2 id="section-what-are-the-lender-fees-in-mortgage-closing-costs">Lender charges: Start with Section A</h2>
                    <p>Open page 2 of your <a href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/">Loan Estimate</a>. Section A shows origination charges. The names differ by lender: you might see underwriting, processing or an origination fee. Compare the <strong>section total</strong>, not the number of lines. A lender can combine services in one charge while another lists them separately.</p>
                    <p>Look for discount points on the same page. Points are an upfront cost for a lower rate. Ask for a quote with no points as a baseline, then compare the upfront cost with the monthly savings over the time you expect to keep the loan.</p>
                    <h2 id="section-what-are-the-third-party-fees-in-mortgage-closing-costs">Third-party services: What you can shop for</h2>
                    <p>Section B lists services the lender requires but does not let you shop for; appraisal and credit report fees may appear there. You can still compare those charges <em>across lenders</em>. Section C lists services you can shop for. Ask your lender for its written provider list and confirm that any provider you choose meets its requirements.</p>
                    <h2 id="section-what-are-title-fees-and-can-you-shop-around-for-them">Title fees: Ask which policy is included</h2>
                    <p>A title search checks for recorded claims against the property. Lender’s title insurance protects the lender; an owner’s policy covers the buyer under its terms. When comparing quotes, check that both include the same policies and settlement services. A quote for the lender’s policy alone is not the same as a combined quote.</p>
                    <h2 id="section-what-are-prepaids-and-escrow-deposits-at-closing">Prepaids, escrow and cash to close</h2>
                    <p>Prepaids may include interest from your closing date to the start of your first payment period and an upfront insurance premium. The initial escrow deposit is separate: it sets aside money for bills such as property tax and insurance if your loan uses escrow. Moving the closing date can change these amounts without changing the lender’s origination fees.</p>
                    <p><strong>Example:</strong> With a $40,000 down payment, $9,000 in closing costs, a $5,000 deposit you’ve already paid and a $2,000 seller credit, the simplified cash to close is $42,000. Your actual disclosure may include other credits and adjustments. Don’t add a credit twice if it is already reflected in your totals.</p>
                    <h2 id="section-what-government-taxes-are-due-at-mortgage-closing">Recording fees and transfer taxes</h2>
                    <p>Local recording charges and applicable transfer taxes can vary by jurisdiction and contract. Check the government charges on page 2 and ask who pays each item. A fee on a neighbor’s transaction isn’t a reliable estimate for a different property or closing agreement.</p>
                    <h2 id="section-advanced-closing-cost-negotiation-strategies">Compare offers before you sign</h2>
                    <p>Compare the estimated cash to close and page 3’s five-year cost figures, along with the monthly payment. If an offer advertises no closing costs, ask whether you are taking a higher rate, rolling charges into the loan, or receiving a separate credit. Those choices have different effects on your cash and longer-term costs.</p>
                    <p>When the <a href="https://www.consumerfinance.gov/owning-a-home/closing-disclosure/">Closing Disclosure</a> arrives, compare its loan amount, interest rate, cash to close and individual charges with the latest Loan Estimate. Ask the lender to explain changes you don’t recognize before you sign. If upfront cash is tight, check both the closing estimate and your <Link href="/calculators/affordability">home affordability budget</Link> so you can keep room for moving and repairs.</p>
                    <h3>Put a price on a lower rate</h3>
                    <p>If two otherwise identical offers differ by $2,400 in points and $60 a month in principal and interest, the simple break-even is 40 payments. If you expect to move or refinance after 30 payments, the savings would be $1,800, less than the $2,400 upfront. This quick check ignores tax effects and the time value of money; it is a screening tool, not a complete comparison.</p>
                    <div className="fn-article-next not-prose">
                        <p>Put the numbers to work</p>
                        <Link href="/calculators/closing-costs">Estimate your closing costs <span aria-hidden="true">→</span></Link>
                    </div>
                    <p><strong>Sources:</strong> <a href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/">CFPB Loan Estimate explainer</a> and <a href="https://www.consumerfinance.gov/owning-a-home/closing-disclosure/">Closing Disclosure explainer</a>.</p>
                    <p>This article is for education only, not financial, tax, legal or lending advice.</p>
                </article>
                <AuthorBio author={USFinNexusEditorialTeam} updatedDate="November 9, 2026" />
            </div>
            <RelatedCalculators limit={4} />
            <RelatedArticles currentSlug="closing-costs-itemized-breakdown-2026" />
        </>
    );
}
