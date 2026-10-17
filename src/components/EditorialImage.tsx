'use client';
import NextImage, { type ImageProps } from 'next/image';
import { useState } from 'react';

export default function EditorialImage(props: ImageProps) {
    const [failed, setFailed] = useState(false);
    return <NextImage {...props} src={failed ? '/images/emergency-fund-how-much-2026.webp' : props.src} onError={() => setFailed(true)} />;
}
