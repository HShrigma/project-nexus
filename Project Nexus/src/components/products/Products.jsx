import { useEffect, useState } from "react";
import CategoryTitle from "./category/CategoryTitle";
import Filter from "./filter/Filter";
import ProductCounter from "./product/ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = ({selectedCategory, products}) => {
    const displayStep = 5;
    useEffect(()=> products ? setDisplayCount(getCountFirst()) : setDisplayCount(0), [products])
    const getCountFirst = () => {
        if (!products) return 0; 
        return displayStep <= products.length ? displayStep : products.length;
    }
    const [displayedCount, setDisplayCount] = useState(getCountFirst());
    const handleLoadMore = () => setDisplayCount(prev => prev + displayStep <= products.length ? prev + displayStep : products.length);

    return (
        <div>
            <CategoryTitle
                categoryTitle={selectedCategory?.name}
                categoryDescription={selectedCategory?.description}
            />
            <ProductCounter
                productsLength={products ? products.length : 0}
                currentCount={displayedCount}
            />
            <ProductGrid 
                products={products}
            />
            <button onClick={handleLoadMore}>Load More</button>
            <Filter
                minPrice={products ? Math.min(...products.map(prod => prod.price)) : 0}
                maxPrice={products ? Math.max(...products.map(prod => prod.price)) : 0}
            />
        </div>
    )
}
export default Products;