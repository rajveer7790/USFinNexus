import type { Metadata } from 'next';

// Noindex the entire /articles section — FinCEN/BOI compliance content
// is off-niche for a mortgage calculator site and risks a Google
// Helpful Content System penalty if indexed at scale.
// Users can still navigate here; Google just won't rank these pages.
export const metadata: Metadata = {
    robots: {
        index: false,
        follow: true,
        googleBot: { index: false, follow: true },
    },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
