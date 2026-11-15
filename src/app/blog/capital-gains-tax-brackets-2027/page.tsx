import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';

const title = '2027 Capital Gains Tax Brackets: 0%, 15% and 20% Rates';
const description = 'See the 2027 long-term capital gains tax brackets for every filing status, how income stacking works, and when the 3.8% NIIT may apply.';
const url = 'https://usfinnexus.com/blog/capital-gains-tax-brackets-2027';
const image = 'https://usfinnexus.com/images/capital-gains-tax-brackets-2027.webp';
const alt = 'Investor reviewing a taxable investment statement and year-end planning notes at a home office desk';
const date = '2026-11-15';

const faqs = [
  { question: 'What is the 0% capital gains tax threshold for 2027?', answer: 'For 2027, the 0% long-term capital gains ceiling is $51,050 of taxable income for single filers and married people filing separately, $68,350 for heads of household, and $102,100 for married couples filing jointly or qualifying surviving spouses.' },
  { question: 'What income triggers the 20% long-term capital gains rate in 2027?', answer: 'The 20% rate applies to the portion of net capital gain above taxable-income thresholds of $563,200 for single filers, $316,800 for married filing separately, $598,400 for heads of household, and $633,600 for married filing jointly or qualifying surviving spouses.' },
  { question: 'Are short-term capital gains eligible for the 0% rate?', answer: 'Generally, no. Net short-term capital gains are taxed as ordinary income. An asset is generally long term only when held for more than one year, although special holding-period rules can apply.' },
  { question: 'Is the capital gains bracket based only on the gain?', answer: 'No. The preferential brackets use taxable income, including ordinary taxable income and eligible gains. Ordinary taxable income generally fills the lower bands first, so a gain can cross more than one capital-gains rate.' },
  { question: 'Can the 3.8% net investment income tax apply on top of capital gains tax?', answer: 'Yes. NIIT is a separate tax that may apply when a taxpayer has net investment income and modified adjusted gross income above the applicable statutory threshold. Its calculation is not the same as the 0%, 15% and 20% bracket test.' },
  { question: 'How much net capital loss can reduce ordinary income?', answer: 'After capital losses offset capital gains, an individual can generally deduct up to $3,000 of remaining net capital loss against other income, or $1,500 when married filing separately. Unused losses generally carry forward under the tax rules.' },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: 'article', locale: 'en_US', title, description, url, siteName: 'USFinNexus', publishedTime: date, modifiedTime: date, images: [{ url: image, width: 1200, height: 630, alt }] },
  twitter: { card: 'summary_large_image', title, description, images: [{ url: image, alt }] },
};

export default function CapitalGainsTaxBrackets2027Page() {
  return (
    <>
      <ArticleSchema title={title} description={description} url={url} image={image} datePublished={date} dateModified={date} authorName="USFinNexus Editorial Team" keywords={['capital gains tax brackets 2027', '2027 capital gains tax rate', '0 percent capital gains 2027', 'long term capital gains tax 2027']} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
      <div className="max-w-4xl mx-auto py-7 sm:py-9">
        <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/capital-gains-tax-brackets-2027' }]} />
        <article className="prose prose-slate max-w-none">
          <header className="fn-article-head">
            <span className="fn-article-kicker">Investing &amp; tax planning</span>
            <h1>{title}</h1>
            <p className="fn-article-deck">The rates stay at 0%, 15% and 20%, but the taxable-income cutoffs rise for gains realized in 2027. The gain does not enter an empty bracket.</p>
            <div className="fn-article-byline"><span>By <Link href="/about">USFinNexus Editorial Team</Link></span><span>Published and reviewed <time dateTime={date}>November 15, 2026</time></span></div>
          </header>

          <figure>
            <EditorialImage src="/images/capital-gains-tax-brackets-2027.webp" alt={alt} width={1200} height={630} priority sizes="(min-width: 1050px) 790px, 100vw" className="w-full h-auto rounded-xl my-5" />
            <figcaption>Original AI-generated editorial image of an investor reviewing a taxable-account plan.</figcaption>
          </figure>

          <p><strong>Quick answer:</strong> For 2027, long-term capital gains use a 0% rate up to taxable income of $51,050 for single filers, $102,100 for married couples filing jointly, $68,350 for heads of household and $51,050 for married people filing separately. The 15% band ends at $563,200, $633,600, $598,400 and $316,800, respectively. Eligible gain above the applicable upper threshold is generally taxed at 20%.</p>
          <p>Those dollar amounts are taxable-income boundaries, not tax-free gain allowances. Wages, interest, retirement distributions, qualified dividends, deductions, capital losses and other return items can change how much room remains in a preferential band. A taxpayer with ordinary taxable income already above the 0% ceiling does not get a fresh 0% bucket merely because a stock sale is the next transaction.</p>

          <h2 id="brackets">2027 long-term capital gains tax brackets</h2>
          <p>The IRS published the 2027 thresholds in <a href="https://www.irs.gov/pub/irs-drop/rp-26-35.pdf">Revenue Procedure 2026-35</a> on November 5, 2026. These brackets generally apply to eligible net capital gains recognized during tax year 2027 and reported on returns filed in 2028.</p>
          <div className="overflow-x-auto"><table><thead><tr><th>Filing status</th><th>0% taxable-income ceiling</th><th>15% taxable-income ceiling</th><th>20% begins above</th></tr></thead><tbody>
            <tr><td>Single</td><td>$51,050</td><td>$563,200</td><td>$563,200</td></tr>
            <tr><td>Married filing jointly / qualifying surviving spouse</td><td>$102,100</td><td>$633,600</td><td>$633,600</td></tr>
            <tr><td>Head of household</td><td>$68,350</td><td>$598,400</td><td>$598,400</td></tr>
            <tr><td>Married filing separately</td><td>$51,050</td><td>$316,800</td><td>$316,800</td></tr>
            <tr><td>Estates and trusts</td><td>$3,400</td><td>$16,750</td><td>$16,750</td></tr>
          </tbody></table></div>
          <p>“Begins above” means only the portion that exceeds the threshold moves into the 20% band; the entire gain does not automatically become 20%. Special categories can have different maximum rates, and state income tax is separate. Use the Qualified Dividends and Capital Gain Tax Worksheet or Schedule D Tax Worksheet required by the final 2027 instructions rather than multiplying every gain by one headline percentage.</p>

          <h2 id="long-short">Long-term versus short-term gains</h2>
          <p>The <a href="https://www.irs.gov/taxtopics/tc409">IRS capital-gains overview</a> generally classifies an asset as long term when it is held for more than one year before disposal. One year or less is generally short term. The counting convention and exceptions for inherited property, gifts, certain partnership interests, futures and other assets can change the answer.</p>
          <p>Net short-term gains are generally taxed at ordinary federal income-tax rates, not the 0%, 15% or 20% preferential schedule. Holding an appreciated asset for one additional day solely for tax reasons can still be a poor investment decision if price risk, concentration or liquidity has changed. Confirm the acquisition date and lot being sold before a trade, particularly when shares were purchased over multiple dates or reinvested dividends created many lots.</p>

          <h2 id="stacking">How income stacking determines the rate</h2>
          <p>Preferential gain sits on top of ordinary taxable income. Qualified dividends generally share the same rate bands with net capital gain. The practical sequence is to estimate taxable income after deductions, separate ordinary taxable income from eligible preferential income, and then see which part of the gain fits in each remaining band.</p>
          <h3>Single-filer example</h3>
          <p>Assume a single filer has $40,000 of ordinary taxable income and $20,000 of eligible net long-term capital gain in 2027, with no qualified dividends or special-rate gain. The first $11,050 of the gain fills the space from $40,000 to the $51,050 zero-rate ceiling. The remaining $8,950 reaches the 15% band, producing $1,342.50 of federal capital-gains tax in this simplified illustration.</p>
          <p>The example is not a tax-return calculation. Additional items can change taxable income, and tax software applies the official worksheet. It does show why “I made less than $51,050 of gain” is the wrong test. The relevant question is how ordinary taxable income and preferential income stack together.</p>
          <h3>Married-filing-jointly example</h3>
          <p>A joint filer with $95,000 of ordinary taxable income and $25,000 of eligible long-term gain has $7,100 of room before the $102,100 zero-rate ceiling. In a simplified model, $7,100 of gain is taxed at 0% and $17,900 enters the 15% band. A deduction that lowers taxable income could create more 0% space; additional ordinary income or qualified dividends could use it.</p>

          <h2 id="niit">The 3.8% NIIT is a separate test</h2>
          <p>A 0% or 15% capital-gains result does not by itself answer whether the Net Investment Income Tax applies. <a href="https://www.irs.gov/taxtopics/tc559">IRS Topic 559</a> says the 3.8% NIIT generally applies to the lesser of net investment income or the amount by which modified adjusted gross income exceeds the statutory threshold.</p>
          <p>The individual thresholds are $200,000 for single and head-of-household filers, $250,000 for married filing jointly and qualifying surviving spouses, and $125,000 for married filing separately. These thresholds are not the capital-gains bracket cutoffs and are not indexed in Revenue Procedure 2026-35. Investment income definitions, deductions properly allocable to that income and exceptions matter, so a high-gain year may require Form 8960 even when ordinary withholding was accurate.</p>

          <h2 id="exceptions">Rates above 20% can apply to special gain</h2>
          <p>The familiar 0%, 15% and 20% rates cover many long-term gains, but not every one. The IRS notes that net collectibles gain, such as certain art or coin gains, can face a maximum 28% rate. Certain gain from qualified small business stock can also fall into the 28% rate calculation, while unrecaptured Section 1250 gain connected with depreciated real property can face a maximum 25% rate.</p>
          <p>Real-estate sales can additionally involve depreciation recapture, home-sale exclusion rules, selling expenses and basis adjustments. A primary residence is not taxed simply by applying the table to the selling price. Review the <Link href="/blog/home-sale-tax-exclusion-2026">home-sale exclusion guide</Link> for the separate eligibility framework, then obtain tax advice for rental conversions, business property or large improvements.</p>

          <h2 id="losses">Capital losses, carryovers and wash-sale risk</h2>
          <p>Capital losses first offset capital gains under the netting rules. If losses still exceed gains, an individual generally may deduct the lesser of the remaining net loss or $3,000 against other income; the limit is $1,500 when married filing separately. The unused portion generally carries forward and keeps its character under the IRS worksheets.</p>
          <p>A loss is not automatically usable merely because a brokerage screen is red. The asset must be disposed of in a recognized transaction, basis must be correct, and the wash-sale rule can defer a loss when substantially identical stock or securities are acquired within the relevant window. Our <Link href="/blog/tax-loss-harvesting-wash-sale-2026">wash-sale guide</Link> and <Link href="/blog/tax-loss-harvesting-calculator-strategy">tax-loss harvesting planning guide</Link> explain the operational risk. Tax savings should not override portfolio diversification, transaction costs or long-term strategy.</p>

          <h2 id="planning">A practical 2027 planning workflow</h2>
          <ol>
            <li>Export every taxable sale and confirm cost basis, acquisition date and specific lot.</li>
            <li>Separate short-term, long-term, qualified-dividend and special-rate items.</li>
            <li>Estimate 2027 ordinary income and above-the-line adjustments.</li>
            <li>Apply the expected standard or itemized deduction to reach taxable income.</li>
            <li>Stack qualified dividends and eligible net capital gain above ordinary taxable income.</li>
            <li>Run the separate NIIT test using MAGI and net investment income.</li>
            <li>Check state tax, estimated-tax and safe-harbor requirements before moving cash.</li>
          </ol>
          <p>Use the <Link href="/calculators/investment">investment calculator</Link> to model hypothetical growth, not tax liability. The <Link href="/calculators/income-tax">income-tax calculator</Link> can organize a current-law estimate, but final 2027 forms, software and facts control. If a sale is optional, compare the tax impact with the investment risk of continuing to hold the asset.</p>

          <h2 id="faq">2027 capital gains tax FAQs</h2>
          {faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}

          <aside aria-label="Financial and tax disclaimer"><p><strong>Educational disclaimer:</strong> Official guidance checked November 15, 2026, including IRS Revenue Procedure 2026-35 and Topics 409 and 559. This article provides general education, not individualized tax, legal or investment advice. Basis, loss netting, state taxes, NIIT, asset type and final 2027 forms can materially change a result.</p></aside>
        </article>
      </div>
    </>
  );
}
