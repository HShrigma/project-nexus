import { useEffect, useState } from "react";
import CategoryTitle from "./category/CategoryTitle";
import Filter from "./filter/Filter";
import ProductCounter from "./product/ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = ({selectedCategory, products}) => {
    const displayStep = 5;

    const [displayedCount, setDisplayCount] = useState(getCountFirst());
    const [currentSortOption, setCurrentSortOption] = useState(null);



    useEffect(() => products ? setDisplayCount(getCountFirst()) : setDisplayCount(0), [products]);
    function getCountFirst() {
        if (!products) return 0; 
        return displayStep <= products.length ? displayStep : products.length;
    }
    const handleLoadMore = () => setDisplayCount(prev => prev + displayStep <= products.length ? prev + displayStep : products.length);

    const handleSortOptionSelected = (option) => {
        switch (option) {
            case "A-Z": 
            case "Z-A":
            case "0-1":
            case "1-0":
            case "R-":
            case "R+":
                setCurrentSortOption(option);
                return;
            default:
                console.error(`Unknown sort option: ${option}`);
                return;
        }
    }
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
                sortOption={currentSortOption}
                displayLimit={displayedCount}
            />
            <button onClick={handleLoadMore}>Load More</button>
            <Filter
                minPrice={products ? Math.min(...products.map(prod => prod.price)) : 0}
                maxPrice={products ? Math.max(...products.map(prod => prod.price)) : 0}
                onSortOptionSelected={(option) => handleSortOptionSelected(option)} 
            />
        </div>
    )
}
export default Products;