export default function ArticlesLoading() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 animate-pulse">
            {/* Header */}
            <div className="mb-10">
                <div className="h-5 w-36 bg-gray-200 rounded-full mb-3" />
                <div className="h-9 w-72 bg-gray-200 rounded mb-2" />
                <div className="h-9 w-56 bg-gray-200 rounded mb-3" />
                <div className="h-4 w-full max-w-lg bg-gray-200 rounded mb-1" />
                <div className="h-4 w-64 bg-gray-200 rounded" />
            </div>

            {/* Featured hero card */}
            <div className="mb-10 rounded-2xl overflow-hidden border border-gray-100 grid grid-cols-1 md:grid-cols-2">
                <div className="h-56 md:h-72 bg-gray-200" />
                <div className="p-6 md:p-8 flex flex-col justify-center gap-3">
                    <div className="h-5 w-24 bg-gray-200 rounded-full" />
                    <div className="h-6 w-full bg-gray-200 rounded" />
                    <div className="h-6 w-4/5 bg-gray-200 rounded" />
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    <div className="h-3 w-32 bg-gray-200 rounded mt-2" />
                </div>
            </div>

            {/* Article grid — 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
                        <div className="h-44 bg-gray-200" />
                        <div className="p-5 space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="h-5 w-24 bg-gray-200 rounded-full" />
                                <div className="h-4 w-10 bg-gray-200 rounded ml-auto" />
                            </div>
                            <div className="h-4 w-full bg-gray-200 rounded" />
                            <div className="h-4 w-5/6 bg-gray-200 rounded" />
                            <div className="h-3 w-full bg-gray-200 rounded" />
                            <div className="h-3 w-2/3 bg-gray-200 rounded" />
                            <div className="flex justify-between pt-1">
                                <div className="h-3 w-20 bg-gray-200 rounded" />
                                <div className="h-3 w-12 bg-gray-200 rounded" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
