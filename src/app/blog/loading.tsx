export default function BlogLoading() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
            {/* Page title */}
            <div className="h-9 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-72 bg-gray-200 rounded mb-10" />

            {/* Card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="h-44 bg-gray-200" />
                        <div className="p-5 space-y-3">
                            <div className="h-3 w-20 bg-gray-200 rounded" />
                            <div className="h-5 w-full bg-gray-200 rounded" />
                            <div className="h-5 w-3/4 bg-gray-200 rounded" />
                            <div className="h-3 w-full bg-gray-200 rounded" />
                            <div className="h-3 w-5/6 bg-gray-200 rounded" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
