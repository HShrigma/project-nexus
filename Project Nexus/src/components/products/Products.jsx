import { useEffect, useState, useMemo } from "react";
import CategoryTitle from "./category/CategoryTitle";
import Filter from "./filter/Filter";
import ProductCounter from "./product/ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = ({selectedCategory, products}) => {
    const displayStep = 5;

    const [displayedCount, setDisplayCount] = useState(0);
    const [currentSortOption, setCurrentSortOption] = useState(null);
    const [filters, setFilters] = useState([]);
    const filteredProducts = useMemo(() => {
        if (!products) return [];
        
        let filtered = [...products];
        
        const colorFilters = filters.filter(f => f[0] === "color").map(f => f[1]);
        const priceFilter = filters.filter(f => f[0] === "price").map(f => f[1])[0];
        
        filtered = filtered.filter(prod => {
            if(colorFilters.length > 0) 
                if(!colorFilters.includes(prod.color)) return false;
            if (priceFilter) 
                if (prod.price < priceFilter.min || prod.price > priceFilter.max) return false;
            return true;
        });
        
        return filtered;
    }, [products, filters]);

    // Sort filtered products
    const sortedAndFilteredProducts = useMemo(() => {
        let sorted = [...filteredProducts];
        
        switch (currentSortOption) {
            case "A-Z":
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Z-A":
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "0-1":
                sorted.sort((a, b) => a.price - b.price);
                break;
            case "1-0":
                sorted.sort((a, b) => b.price - a.price);
                break;
            case "R+":
                sorted.sort((a, b) => a.rating - b.rating);
                break;
            case "R-":
                sorted.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }
        
        return sorted;
    }, [filteredProducts, currentSortOption]);

    useEffect(() => { 
        if (!products) {
            setDisplayCount(0);
            return;
        } 
        setDisplayCount(Math.min(displayStep, filteredProducts.length));
        setFilters(prev => prev.filter(f => f[0] !== "price"));
    }, [products]);
    
    // Update displayed count when filters change
    useEffect(() => {
    setDisplayCount(Math.min(displayStep, filteredProducts.length));
    }, [filteredProducts]);
    
    useEffect(() => {
        setDisplayCount(prev => {
        const initialCount = Math.min(displayStep, filteredProducts.length);
        return Math.min(prev, filteredProducts.length) || initialCount;
    });
    }, [filteredProducts]);
    const handleLoadMore = () => {
        setDisplayCount(prev => {
            const next = prev + displayStep;
            return next <= filteredProducts.length ? next : filteredProducts.length;
        });
    }

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
                productsLength={filteredProducts.length}
                currentCount={Math.min(displayedCount, filteredProducts.length)}
            />
            <ProductGrid 
                products={sortedAndFilteredProducts.slice(0, displayedCount)}
            />
            {displayedCount < filteredProducts.length && (
                <button onClick={handleLoadMore}>Load More</button>
            )}
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