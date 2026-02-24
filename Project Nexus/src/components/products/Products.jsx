import { useProducts } from "../../hooks/useProducts";
import CategoryTitle from "./category/CategoryTitle";
import Filter from "./filter/Filter";
import ProductCounter from "./product/ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = ({ selectedCategory }) => {
    const {
        products,
        totalProducts,
        loadMore,
        addFilter,
        removeFilter,
        setSort,
        hasMore,
        minPrice,
        maxPrice
    } = useProducts(selectedCategory);

    return (
        <div>
            <CategoryTitle
                categoryTitle={selectedCategory?.name}
                categoryDescription={selectedCategory?.description}
            />
            <ProductCounter
                productsLength={totalProducts}
                currentCount={products.length}
            />
            <ProductGrid products={products} />
            {hasMore && <button onClick={loadMore}>Load More</button>}
            <Filter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onFilterAdded={addFilter}
                onFilterRemoved={removeFilter}
                onSortOptionSelected={setSort}
            />
        </div>
    );
};
export default Products;