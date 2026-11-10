'use client';

import React, { useId } from 'react';

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
    const id = useId();
    return (
        <div className={`flex flex-col group ${className}`}>
            <div className="flex justify-between items-end mb-1.5">
                <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-700 group-focus-within:text-teal-800 transition-colors">
                    {label}
                </label>
                {helpText && (
                    /* text-xs = 12px minimum - accessible */
                    <span id={id + '-help'} className="text-xs text-slate-600 font-medium">{helpText}</span>
                )}
            </div>
            <div className="relative flex items-center">
                {prefix && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 select-none pointer-events-none">
                        {prefix}
                    </span>
                )}
                <input
                    id={id}
                    aria-describedby={helpText ? id + '-help' : undefined}
                    inputMode={type === 'number' ? 'decimal' : undefined}
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
