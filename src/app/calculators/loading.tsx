export default function CalculatorLoading() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
            {/* Breadcrumb */}
            <div className="flex gap-2 mb-6">
                <div className="h-3 w-20 bg-gray-200 rounded" />
                <div className="h-3 w-3 bg-gray-200 rounded" />
                <div className="h-3 w-36 bg-gray-200 rounded" />
            </div>

            {/* Title */}
            <div className="h-8 w-72 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-96 bg-gray-200 rounded mb-8" />

            {/* 2-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6">
                {/* Inputs */}
                <div className="bg-gray-100 rounded-2xl p-6 space-y-5">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="space-y-2">
                            <div className="h-3 w-28 bg-gray-200 rounded" />
                            <div className="h-11 bg-gray-200 rounded-xl" />
                        </div>
                    ))}
                </div>

                {/* Results */}
                <div className="space-y-4">
                    <div className="bg-gray-100 rounded-2xl p-6 h-40" />
                    <div className="bg-gray-100 rounded-2xl p-6 h-32" />
                    <div className="bg-gray-100 rounded-2xl p-6 h-48" />
                </div>
            </div>
        </div>
    );
}
