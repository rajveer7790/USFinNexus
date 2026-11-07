import Link from 'next/link';

export default function CalculatorAnswer({ children }: { children: React.ReactNode }) {
    return (
        <aside aria-label="Calculator quick answer" className="mx-auto my-4 max-w-5xl rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-slate-800 sm:px-5">
            <p><strong>Quick answer:</strong> {children}</p>
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                <span>No signup. Calculator inputs are processed in your browser.</span>
                <Link href="/why-we-dont-collect-data" className="font-semibold text-sky-900 underline">How calculator privacy works</Link>
                <Link href="/methodology" className="font-semibold text-sky-900 underline">Formulas and sources</Link>
            </p>
        </aside>
    );
}
