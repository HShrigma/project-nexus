import ProductCounter from "./ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = () => {
    return (
        <div>
            <ProductCounter/>
            <ProductGrid />
            <button>Load More</button>
        </div>
    )
}
export default Products;