import Link from 'next/link';

export interface Author {
    name: string;
    title: string;
    credentials: string;
    bio: string;
    initials: string;
    accentColor?: string;
}

export const USFinNexusEditorialTeam: Author = {
    name: 'USFinNexus Editorial Team',
    title: 'Finance & Mortgage Research Team',
    credentials: 'Based on CFPB, HUD, FHFA & Tax Foundation data',
    bio: 'The USFinNexus editorial team researches and writes mortgage and personal finance guides using data sourced directly from the Consumer Financial Protection Bureau (CFPB), the U.S. Department of Housing and Urban Development (HUD), the Federal Housing Finance Agency (FHFA), and the Tax Foundation. All calculator formulas are reviewed for accuracy against official federal guidelines.',
    initials: 'UF',
    accentColor: '#0da6f2',
};

export const RajveerSingh: Author = {
    name: 'Rajveer Singh',
    title: 'Founder & Financial Tools Developer',
    credentials: 'Full-Stack Developer | Financial Technology',
    bio: 'Rajveer built USFinNexus to give Americans access to professional-grade mortgage and finance calculators without the lender referral funnel. He combines software engineering with financial data from CFPB, FHFA, and HUD to deliver accurate, up-to-date tools.',
    initials: 'RS',
    accentColor: '#0da6f2',
};

interface AuthorBioProps {
    author?: Author;
    updatedDate?: string;
}

export default function AuthorBio({ author = USFinNexusEditorialTeam, updatedDate }: AuthorBioProps) {
    return (
        <div className="mt-12 border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
            {/* Article schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: author.name,
                        jobTitle: author.title,
                        description: author.bio,
                        worksFor: {
                            '@type': 'Organization',
                            name: 'USFinNexus',
                            url: 'https://usfinnexus.com',
                        },
                    }),
                }}
            />
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${author.accentColor || '#0da6f2'}, #0a2540)` }}
                >
                    {author.initials}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-black text-sm" style={{ color: 'var(--color-text)' }}>{author.name}</span>
                        <span
                            className="px-2 py-0.5 rounded text-xs font-black uppercase tracking-widest"
                            style={{ background: `${author.accentColor || '#0da6f2'}15`, color: author.accentColor || '#0da6f2' }}
                        >
                            Verified
                        </span>
                    </div>
                    <p className="text-xs font-semibold mb-1" style={{ color: author.accentColor || '#0da6f2' }}>{author.title}</p>
                    <p className="text-xs italic mb-2" style={{ color: 'var(--color-text-muted)' }}>{author.credentials}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{author.bio}</p>
                    {updatedDate && (
                        <p className="text-xs mt-2 font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                            Last Updated: {updatedDate}
                        </p>
                    )}
                    <div className="flex gap-3 mt-3">
                        <Link href="/methodology" className="text-xs font-semibold hover:underline" style={{ color: author.accentColor || '#0da6f2' }}>
                            Our Methodology →
                        </Link>
                        <Link href="/about" className="text-xs font-semibold hover:underline" style={{ color: 'var(--color-text-muted)' }}>
                            About USFinNexus
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
