import { useEffect, useState } from "react";
import CategoryTitle from "./category/CategoryTitle";
import Filter from "./filter/Filter";
import ProductCounter from "./product/ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = ({selectedCategory, products}) => {
    const displayStep = 5;

    const [displayedCount, setDisplayCount] = useState(getCountFirst());
    const [currentSortOption, setCurrentSortOption] = useState(null);
    const [filters, setFilters] = useState([]);


    useEffect(() => { 
        if (!products) {
            setDisplayCount(0);
            return;
        } 
        setDisplayCount(getCountFirst()) 
        setFilters(prev => prev.filter(f => f[0] !== "price"));
    }, [products]);
    function getCountFirst() {
        if (!products) return 0; 
        return displayStep <= products.length ? displayStep : products.length;
    }
    const handleLoadMore = () => setDisplayCount(prev => prev + displayStep <= products.length ? prev + displayStep : products.length);

    const handleOnFilterAdded = (key,value) => {
        if(filters.includes([key,value]) && key !== "price") return;
        if(key === "price"){
            let newFilters = [...filters].filter(f => f[0] !== key);
            newFilters.push([key,value]);
            setFilters(newFilters);
            return;
        }
        setFilters(prev => [...prev, [key,value]]);
    }

    const handleOnFilterRemoved = (key,value) => {
        setFilters(prev => prev.filter(filter => {
            return !(filter[0] === key && filter[1] === value);
        }));
    }

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
                filters={filters}
            />
            <button onClick={handleLoadMore}>Load More</button>
            <Filter
                minPrice={products ? Math.min(...products.map(prod => prod.price)) : 0}
                maxPrice={products ? Math.max(...products.map(prod => prod.price)) : 0}
                onSortOptionSelected={(option) => handleSortOptionSelected(option)} 
                onFilterAdded={handleOnFilterAdded}
                onFilterRemoved={handleOnFilterRemoved}
            />
        </div>
    )
}
export default Products;