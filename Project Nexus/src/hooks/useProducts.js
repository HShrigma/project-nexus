import { useState, useMemo, useEffect } from 'react';
export const useProducts = (selectedCategory) => {
    const [products, setProducts] = useState([
        { id: 1, categoryId: 1, name: "Bag 1", description: "sample description 1", price: 78, rating: 4, color: "red" },
        { id: 2, categoryId: 1, name: "Bag 2", description: "sample description 2", price: 16, rating: 4, color: "red" },
        { id: 3, categoryId: 2, name: "Shoes 1", description: "sample description 1", price: 66, rating: 2, color: "green" },
        { id: 4, categoryId: 2, name: "Shoes 2", description: "sample description 2", price: 234, rating: 4, color: "green" },
        { id: 5, categoryId: 2, name: "Shoes 3", description: "sample description 3", price: 2847, rating: 5, color: "green" },
        { id: 6, categoryId: 2, name: "Shoes 4", description: "sample description 4", price: 234, rating: 4, color: "red" },
        { id: 7, categoryId: 2, name: "Shoes 5", description: "sample description 5", price: 2847, rating: 5, color: "red" },
        { id: 8, categoryId: 2, name: "Shoes 6", description: "sample description 6", price: 39, rating: 4, color: "blue" },
        { id: 9, categoryId: 2, name: "Shoes 7", description: "sample description 7", price: 39, rating: 4, color: "blue" },
        { id: 10, categoryId: 1, name: "Bag 3", description: "sample description 3", price: 26, rating: 5, color: "blue" }]);

    const getColumns = () => {
        const width = window.innerWidth;
        if (width >= 1280) return 4; // xl
        if (width >= 1024) return 3; // lg
        if (width >= 640) return 2;  // sm
        return 1;                     // default
    };
    const [columns, setColumns] = useState(getColumns());
    const rowsPerPage = 5;
    const pageSize = columns * rowsPerPage;
    const [displayCount, setDisplayCount] = useState(pageSize);

    const [filters, setFilters] = useState([]);
    const [sortOption, setSortOption] = useState(null);

    useEffect(() => {
        setFilters(prev => prev.filter(f => f[0] !== "price"));
        setDisplayCount(pageSize);
    }, [selectedCategory]);

    useEffect(() => {
        const handleResize = () => setColumns(getColumns());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setDisplayCount(columns * rowsPerPage);
    }, [columns, selectedCategory]);

    const categoryProducts = useMemo(() =>
        products.filter(prod => prod.categoryId === selectedCategory?.id),
        [products, selectedCategory]
    );

    const minPrice = useMemo(() => Math.min(...categoryProducts.map(p => p.price)), [categoryProducts]);
    const maxPrice = useMemo(() => Math.max(...categoryProducts.map(p => p.price)), [categoryProducts]);

    const filteredProducts = useMemo(() => {
        let filtered = [...categoryProducts];
        const colorFilters = filters.filter(f => f[0] === "color").map(f => f[1]);
        const priceFilter = filters.filter(f => f[0] === "price").map(f => f[1])[0];
        filtered = filtered.filter(prod => {
            if (colorFilters.length > 0 && !colorFilters.includes(prod.color)) return false;
            if (priceFilter && !(prod.price >= priceFilter.min && prod.price <= priceFilter.max)) return false;
            return true;
        });
        return filtered;
    }, [categoryProducts, filters]);

    const sortedProducts = useMemo(() => {
        let sorted = [...filteredProducts];
        switch (sortOption) {
            case "A-Z": sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
            case "Z-A": sorted.sort((a, b) => b.name.localeCompare(a.name)); break;
            case "0-1": sorted.sort((a, b) => a.price - b.price); break;
            case "1-0": sorted.sort((a, b) => b.price - a.price); break;
            case "R+": sorted.sort((a, b) => a.rating - b.rating); break;
            case "R-": sorted.sort((a, b) => b.rating - a.rating); break;
        }
        return sorted;
    }, [filteredProducts, sortOption]);

    const visibleProducts = useMemo(() => sortedProducts.slice(0, displayCount), [sortedProducts, displayCount]);

    const loadMore = () => setDisplayCount(prev => Math.min(prev + pageSize, sortedProducts.length));

    const addFilter = (key, value) => {
        if (!key) return;
        // add or update for price range
        if (key === "price") {
            setFilters(prev => {
                const newFilters = prev.filter(f => f[0] !== key);
                return [...newFilters, [key, value]];
            });
            return;
        }

        //simply add for color, brand, etc.
        setFilters(prev => [...prev, [key, value]]);
    }

    const removeFilter = (key, value) => setFilters(prev => prev.filter(f => !(f[0] === key && f[1] === value)));
    const setSort = (option) => setSortOption(option);

    return {
        products: visibleProducts,
        totalProducts: filteredProducts.length,
        loadMore,
        addFilter,
        removeFilter,
        setSort,
        hasMore: displayCount < filteredProducts.length,
        minPrice,
        maxPrice,
        filters,
        sortOption
    };
};