import type { ReactNode } from 'react';
import './calculator-accessibility.css';

export default function CalculatorsLayout({ children }: { children: ReactNode }) {
    return <div className="fn-calculator-scope">{children}</div>;
}
