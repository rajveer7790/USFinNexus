interface ArticleSchemaProps {
    title: string;
    description: string;
    url: string;
    datePublished: string; // ISO 8601, e.g. "2026-02-25"
    dateModified: string;  // ISO 8601, e.g. "2026-03-12"
    authorName: string;
    image?: string;
    keywords?: string[];
}

export default function ArticleSchema({
    title,
    description,
    url,
    datePublished,
    dateModified,
    authorName,
    image = 'https://usfinnexus.com/icon-512.png',
    keywords = [],
}: ArticleSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        url,
        datePublished,
        dateModified,
        image: {
            '@type': 'ImageObject',
            url: image,
            width: 1200,
            height: 630,
        },
        inLanguage: 'en-US',
        isAccessibleForFree: true,
        ...(keywords.length > 0 ? { keywords: keywords.join(', ') } : {}),
        author: {
            '@type': 'Organization',
            name: authorName,
            url: 'https://usfinnexus.com/about',
        },
        publisher: {
            '@type': 'Organization',
            name: 'USFinNexus',
            url: 'https://usfinnexus.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://usfinnexus.com/icon-512.png',
                contentUrl: 'https://usfinnexus.com/icon-512.png',
                width: 512,
                height: 512,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
