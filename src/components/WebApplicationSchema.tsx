interface WebApplicationSchemaProps {
    name: string;
    description: string;
    url: string;
    category?: string;
}

export default function WebApplicationSchema({
    name,
    description,
    url,
    category = 'FinanceApplication',
}: WebApplicationSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name,
        description,
        url,
        applicationCategory: category,
        operatingSystem: 'Any',
        browserRequirements: 'Requires JavaScript',
        isAccessibleForFree: true,
        inLanguage: 'en-US',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        provider: {
            '@type': 'Organization',
            name: 'USFinNexus',
            url: 'https://usfinnexus.com',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
