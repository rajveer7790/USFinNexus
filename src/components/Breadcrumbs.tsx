import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Add Home as the first item if not present
    const allItems = [
        { name: 'Home', item: '/' },
        ...items.filter(item => item.item !== '/')
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': allItems.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': item.name,
            'item': `https://usfinnexus.com${item.item}`
        }))
    };

    return (
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-1 gap-y-1 pb-2 mb-4 sm:mb-8 text-xs font-semibold uppercase tracking-wide text-gray-700">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {allItems.map((item, index) => (
                <div key={item.item} className="flex min-w-0 max-w-full items-center">
                    {index === 0 ? (
                        <Link href={item.item} className="hover:text-[#0da6f2] transition-colors flex items-center gap-1.5">
                            <Home size={12} className="shrink-0" />
                            {item.name}
                        </Link>
                    ) : (
                        <Link href={item.item} aria-current={index === allItems.length - 1 ? 'page' : undefined} className="min-w-0 break-words hover:text-[#0da6f2] transition-colors">
                            {item.name}
                        </Link>
                    )}
                    {index < allItems.length - 1 && (
                        <ChevronRight size={12} className="mx-1.5 shrink-0 text-gray-400" aria-hidden="true" />
                    )}
                </div>
            ))}
        </nav>
    );
}
