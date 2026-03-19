export default function CalculatorSkeleton() {
    return (
        <div className="animate-pulse mb-12 sm:mb-16">
            {/* Title + description */}
            <div className="mb-6 sm:mb-10 max-w-3xl">
                <div className="h-7 sm:h-9 md:h-11 w-3/4 bg-gray-200 rounded mb-3" />
                <div className="h-4 w-full bg-gray-200 rounded mb-2" />
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>

            {/* Two-column grid matching CalculatorLayout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
                {/* Inputs column */}
                <div className="lg:col-span-5 xl:col-span-4">
                    <div className="rounded-3xl bg-gray-100 p-6 sm:p-8 space-y-5">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="space-y-2">
                                <div className="h-3 w-28 bg-gray-200 rounded" />
                                <div className="h-12 bg-gray-200 rounded-xl" />
                            </div>
                        ))}
                        <div className="h-10 bg-gray-200 rounded-xl mt-4" />
                    </div>
                </div>

                {/* Results column */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-4 sm:space-y-5">
                    {/* Primary metric card */}
                    <div className="rounded-3xl bg-gray-100 p-6 sm:p-8">
                        <div className="h-3 w-32 bg-gray-200 rounded mb-3" />
                        <div className="h-14 w-48 bg-gray-200 rounded mb-4" />
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-16 bg-gray-200 rounded-2xl" />
                            ))}
                        </div>
                    </div>
                    {/* Secondary card */}
                    <div className="rounded-3xl bg-gray-100 p-6 h-36" />
                    {/* Chart placeholder */}
                    <div className="rounded-3xl bg-gray-100 p-6 h-52" />
                </div>
            </div>
        </div>
    );
}
