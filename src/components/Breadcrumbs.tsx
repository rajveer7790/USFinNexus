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
        ...items
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
        <nav className="flex mb-8 items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-gray-700 overflow-x-auto whitespace-nowrap pb-2">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {allItems.map((item, index) => (
                <div key={item.item} className="flex items-center">
                    {index === 0 ? (
                        <Link href={item.item} className="hover:text-[#0da6f2] transition-colors flex items-center gap-1.5">
                            <Home size={12} />
                            {item.name}
                        </Link>
                    ) : (
                        <Link href={item.item} className="hover:text-[#0da6f2] transition-colors">
                            {item.name}
                        </Link>
                    )}
                    {index < allItems.length - 1 && (
                        <ChevronRight size={12} className="mx-2 text-gray-400" />
                    )}
                </div>
            ))}
        </nav>
    );
}
