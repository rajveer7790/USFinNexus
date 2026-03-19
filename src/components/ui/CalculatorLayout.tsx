import React from 'react';

interface CalculatorLayoutProps {
    title: string;
    description: string;
    inputs: React.ReactNode;
    results: React.ReactNode;
}

export default function CalculatorLayout({ title, description, inputs, results }: CalculatorLayoutProps) {
    return (
        <section className="animate-fade-in mb-12 sm:mb-16">
            {/* Page heading — scales from 28px on phones to 48px on desktop */}
            <div className="text-center md:text-left mb-6 sm:mb-10 max-w-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 tracking-tight text-navy-900 leading-tight">
                    {title}
                </h1>
                <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Two-column on lg+, single-column stacked on mobile/tablet */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 relative">
                {/* Inputs Column */}
                <div className="lg:col-span-5 xl:col-span-4 space-y-5 sm:space-y-8">
                    {inputs}
                </div>

                {/* Results Column — sticky only on desktop where it won't hide inputs */}
                <div className="lg:col-span-7 xl:col-span-8 relative">
                    <div className="lg:sticky lg:top-24 space-y-5 sm:space-y-8">
                        {results}
                    </div>
                </div>
            </div>
        </section>
    );
}
