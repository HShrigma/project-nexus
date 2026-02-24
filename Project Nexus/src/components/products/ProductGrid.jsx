import { Product } from "./product/Product";

export const ProductGrid = ({ products, sortOption, displayLimit }) => {
    const getSortedProducts = () => {
        if (!products) return null;

        let sortedProducts = [...products];

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