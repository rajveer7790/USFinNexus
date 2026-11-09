import type { Metadata } from 'next';
import ReadingFrame from '@/components/ReadingFrame';

export const metadata: Metadata = {
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
    return <ReadingFrame>{children}</ReadingFrame>;
}
