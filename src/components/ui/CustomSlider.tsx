'use client';

import React from 'react';

interface CustomSliderProps {
    label: string;
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
    className?: string;
}

export default function CustomSlider({ label, min, max, step = 1, value, onChange, className = '' }: CustomSliderProps) {
    const percentage = max > min ? Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100)) : 0;
    return (
        <input
            aria-label={label}
            style={{ '--value': `${percentage}%` } as React.CSSProperties}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className={`glass-slider w-full h-2 rounded-full appearance-none cursor-pointer ${className}`}
        />
    );
}
