import { Product } from "./product/Product";

export const ProductGrid = ({ products, sortOption, displayLimit, filters }) => {
    const getFilteredProducts = () => {
        if (!products) return null;
        let filteredProducts = [...products];
        if (!filters) return filteredProducts;

        const colorFilters = filters.filter(f => f[0] === "color").map(f => f[1]);
        const priceFilter = filters.filter(f => f[0] === "price").map(f => f[1])[0];
            filteredProducts = filteredProducts.filter(prod => {
                if(colorFilters.length > 0) 
                    if(!colorFilters.includes(prod.color)) return false;
                if (priceFilter) 
                    if (prod.price < priceFilter.min || prod.price > priceFilter.max) return false;
                return true;
            });
        
        return filteredProducts;
    }

    const getSortedProducts = () => {
        let sortedProducts = getFilteredProducts();
        if(!sortedProducts) return null;

        switch (sortOption) {
            case "A-Z":
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Z-A":
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "0-1":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "1-0":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case "R+":
                sortedProducts.sort((a, b) => a.rating - b.rating);
                break;
            case "R-":
                sortedProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return sortedProducts;
    }

    const getCountProducts = () => {
        const sorted = getSortedProducts();
        if (!sorted) return null;
        const productsToShow = displayLimit ? sorted.slice(0, displayLimit) : sorted;
        return productsToShow.map(prod => <Product key={prod.id} product={prod} />);
    }
    return (
        <div>
            {getCountProducts()}
        </div>
    )
}
export default ProductGrid;