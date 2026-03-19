'use client';

import React from 'react';

interface SegmentedControlProps {
    options: { label: string; value: string | number }[];
    selectedValue: string | number;
    onChange: (value: string | number) => void;
    className?: string;
}

export default function SegmentedControl({ options, selectedValue, onChange, className = '' }: SegmentedControlProps) {
    return (
        <div className={`glass-tab-list w-full flex flex-wrap ${className}`}>
            {options.map((option) => (
                <button
                    key={String(option.value)}
                    onClick={() => onChange(option.value)}
                    /* min-h-[44px] ensures 44×44px minimum touch target (WCAG 2.5.5) */
                    className={`flex-1 glass-tab min-h-[44px] flex items-center justify-center text-center ${selectedValue === option.value ? 'active' : ''}`}
                    type="button"
                    aria-pressed={selectedValue === option.value}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
