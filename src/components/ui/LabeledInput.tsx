'use client';

import React from 'react';

interface LabeledInputProps {
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    prefix?: string;
    suffix?: string;
    min?: number;
    max?: number;
    step?: string | number;
    className?: string;
    helpText?: string;
}

export default function LabeledInput({
    label,
    value,
    onChange,
    type = 'text',
    prefix,
    suffix,
    min,
    max,
    step,
    className = '',
    helpText,
}: LabeledInputProps) {
    return (
        <div className={`flex flex-col group ${className}`}>
            <div className="flex justify-between items-end mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">
                    {label}
                </label>
                {helpText && (
                    /* text-xs = 12px minimum — accessible */
                    <span className="text-xs text-gray-400 font-medium">{helpText}</span>
                )}
            </div>
            <div className="relative flex items-center">
                {prefix && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 select-none pointer-events-none">
                        {prefix}
                    </span>
                )}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    min={min}
                    max={max}
                    step={step}
                    /* text-base (16px) prevents iOS auto-zoom on focus */
                    className={`glass-input w-full text-base sm:text-lg ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-10' : ''}`}
                />
                {suffix && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 select-none pointer-events-none">
                        {suffix}
                    </span>
                )}
            </div>
        </div>
    );
}
