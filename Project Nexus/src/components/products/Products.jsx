import Category from "./category/Category";
import Filter from "./filter/Filter";
import ProductCounter from "./product/ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = () => {
    return (
        <div>
            <Category/>
            <ProductCounter/>
            <ProductGrid />
            <button>Load More</button>
            <Filter/>
        </div>
    )
}
export default Products;