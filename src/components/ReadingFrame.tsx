'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

type Heading = { id: string; text: string };

export default function ReadingFrame({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isDetail = pathname.split('/').filter(Boolean).length > 1;
    const content = useRef<HTMLDivElement>(null);
    const [outline, setOutline] = useState<Heading[]>([]);
    const [wide, setWide] = useState(false);

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 1050px)');
        const sync = () => setWide(desktop.matches);
        sync();
        desktop.addEventListener('change', sync);
        return () => desktop.removeEventListener('change', sync);
    }, []);

    useEffect(() => {
        if (!isDetail || !content.current) return;
        const root = content.current;
        const article = [...root.querySelectorAll('article')].find(node => node.querySelector('h1')) ?? root;
        const headings = [...article.querySelectorAll<HTMLHeadingElement>('h2')].filter(node =>
            !node.closest('aside, nav, [hidden], [aria-hidden="true"]') && !!node.textContent?.trim()
        );
        const next = headings.map(heading => {
            const text = heading.textContent?.trim() ?? '';
            if (!heading.id) {
                const base = 'section-' + (text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70).replace(/-$/g, '') || 'heading');
                let id = base;
                let suffix = 2;
                while (document.getElementById(id)) id = base + '-' + suffix++;
                heading.id = id;
            }
            return { id: heading.id, text };
        });
        setOutline(next.length >= 3 ? next : []);
        const hash = location.hash.slice(1);
        if (hash.startsWith('section-')) document.getElementById(hash)?.scrollIntoView();
    }, [isDetail, pathname]);

    if (!isDetail) return <>{children}</>;
    return <div className="fn-reading-shell">
        <aside className="fn-reading-aside" aria-label="Reading tools">
            {outline.length > 0 && <details className="fn-reading-outline" open={wide}>
                <summary>In this article <ChevronDown size={16} aria-hidden="true" /></summary>
                <ol>{outline.map(item => <li key={item.id}><a href={`#${item.id}`}>{item.text}</a></li>)}</ol>
            </details>}
            <Link className="fn-reading-return" href={`/${pathname.split('/')[1]}`}>Back to {pathname.startsWith('/blog/') ? 'News & Guides' : pathname.startsWith('/guides/') ? 'all guides' : 'all articles'}</Link>
        </aside>
        <div className="fn-reading-content" ref={content}>{children}</div>
    </div>;
}
