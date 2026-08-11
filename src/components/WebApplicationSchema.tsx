interface WebApplicationSchemaProps {
    name: string;
    description: string;
    url: string;
    category?: string;
    dateModified?: string;
}

/**
 * Calculator pages are free browser tools, but Google requires a genuine
 * aggregateRating or review for SoftwareApplication rich results. USFinNexus
 * does not publish fabricated ratings, so calculators use accurate WebPage
 * markup instead of ineligible SoftwareApplication markup.
 */
export default function WebApplicationSchema({
    name,
    description,
    url,
    dateModified,
}: WebApplicationSchemaProps) {
    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name,
        description,
        url,
        ...(dateModified && { dateModified }),
        inLanguage: 'en-US',
        isAccessibleForFree: true,
        isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://usfinnexus.com/#website',
            name: 'USFinNexus',
            url: 'https://usfinnexus.com/',
        },
        about: {
            '@type': 'Thing',
            name: 'Financial calculator',
        },
        publisher: {
            '@id': 'https://usfinnexus.com/#organization',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
