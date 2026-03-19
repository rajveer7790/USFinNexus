'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
    /** AdSense ad slot ID — get from your AdSense dashboard */
    slot: string;
    format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
    className?: string;
    style?: React.CSSProperties;
    label?: boolean;
}

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

export default function AdUnit({
    slot,
    format = 'auto',
    className = '',
    style,
    label = true,
}: AdUnitProps) {
    const pushed = useRef(false);

    useEffect(() => {
        if (pushed.current) return;
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            pushed.current = true;
        } catch {
            // AdSense not loaded yet — safe to ignore
        }
    }, []);

    return (
        <div className={`flex flex-col items-center ${className}`}>
            {label && (
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-300 mb-2">
                    Advertisement
                </p>
            )}
            <ins
                className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client="ca-pub-1373076230922603"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}
