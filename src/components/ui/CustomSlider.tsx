'use client';

import React, { useEffect, useRef } from 'react';

interface CustomSliderProps {
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
    className?: string;
}

export default function CustomSlider({ min, max, step = 1, value, onChange, className = '' }: CustomSliderProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            const percentage = ((value - min) / (max - min)) * 100;
            inputRef.current.style.setProperty('--value', `${percentage}%`);
        }
    }, [value, min, max]);

    return (
        <input
            ref={inputRef}
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
