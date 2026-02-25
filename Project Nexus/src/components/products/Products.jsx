import { useState} from "react";
import { useProducts } from "../../hooks/useProducts";
import CategoryTitle from "./category/CategoryTitle";
import Filter from "./filter/Filter";
import ProductCounter from "./product/ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = ({ selectedCategory }) => {
    const [showFilters, setShowFilters] = useState(false);

    const {
        products,
        totalProducts,
        loadMore,
        addFilter,
        removeFilter,
        setSort,
        hasMore,
        minPrice,
        maxPrice,
        filters,
        sortOption
    } = useProducts(selectedCategory);

    return (
        <div className="px-4 lg:px-8">
            {/* Header */}
            <div className="flex flex-col items-center">
                <CategoryTitle
                    categoryTitle={selectedCategory?.name}
                    categoryDescription={selectedCategory?.description}
                />
                <ProductCounter
                    productsLength={totalProducts}
                    currentCount={products.length}
                />
            </div>

            {/* Mobile filter button */}
            <div className="flex justify-end my-4 lg:hidden">
                <button
                    onClick={() => setShowFilters(true)}
                    className="rounded-md border px-4 py-2 text-sm font-medium"
                >
                    Show Filters
                </button>
            </div>

            {/* Content layout */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Desktop Filters */}
                <aside className="sticky hidden lg:block lg:col-span-1">
                    <div className="sticky top-24 rounded-lg border border-neutral-200 bg-white p-4">
                        <h2 className="my-2 !text-lg font-bold">Filter By:</h2>
                        <Filter
                            minPrice={minPrice}
                            maxPrice={maxPrice}
                            filters={filters}
                            sortOption={sortOption}
                            onFilterAdded={addFilter}
                            onFilterRemoved={removeFilter}
                            onSortOptionSelected={setSort}
                        />
                    </div>
                </aside>

                {/* Product Grid */}
                <section className="lg:col-span-3">
                    <ProductGrid products={products} />

                    {hasMore && (
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={loadMore}
                                className="rounded-md border border-neutral-900 px-6 py-2 text-xs font-semibold uppercase tracking-widest transition hover:bg-neutral-900 hover:text-white"
                            >
                                Load more
                            </button>
                        </div>
                    )}
                </section>
            </div>

            {/* Mobile Filter Modal */}
            {showFilters && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 lg:hidden">
                    <div className="w-full max-w-md rounded-lg bg-white p-6 max-h-full overflow-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Filters</h2>
                            <button
                                onClick={() => setShowFilters(false)}
                                className="text-gray-500 hover:text-gray-900 text-2xl"
                            >
                                ✕
                            </button>
                        </div>
                        {/* Make filter content scrollable */}
                        <div className="space-y-4">
                            <Filter
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                filters={filters}
                                sortOption={sortOption}
                                onFilterAdded={addFilter}
                                onFilterRemoved={removeFilter}
                                onSortOptionSelected={setSort}
                            />
                        </div>
                        <button
                            onClick={() => setShowFilters(false)}
                            className="text-gray-500 flex hover:text-gray-900 text-2xl my-2"
                        >
                            Save & Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;