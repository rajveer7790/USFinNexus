'use client';

import { useEffect, useState } from 'react';

export default function InteractiveAdSense({ client }: { client: string }) {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const events = ['scroll', 'mousemove', 'touchstart', 'keydown', 'wheel'];

        const triggerLoad = () => {
            setShouldLoad(true);
            events.forEach(e => window.removeEventListener(e, triggerLoad));
        };

        events.forEach(e => window.addEventListener(e, triggerLoad, { passive: true }));

        return () => {
            events.forEach(e => window.removeEventListener(e, triggerLoad));
        };
    }, []);

    if (!shouldLoad) return null;

    return (
        <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
            crossOrigin="anonymous"
        />
    );
}
