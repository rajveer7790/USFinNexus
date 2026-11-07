import type { ReactNode } from 'react';
import Link from 'next/link';

export default function CalculatorsLayout({ children }: { children: ReactNode }) {
    return <>
        {children}
        <aside aria-label="Calculator formulas and sources" className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
            <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                Check the inputs behind your estimate. Read the <Link className="font-semibold text-blue-800 underline" href="/methodology">calculator formulas, assumptions and sources</Link>.
            </p>
        </aside>
    </>;
}
