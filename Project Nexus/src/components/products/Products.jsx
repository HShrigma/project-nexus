import CategoryTitle from "./category/CategoryTitle";
import Filter from "./filter/Filter";
import ProductCounter from "./product/ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = ({selectedCategory}) => {
    return (
        <div>
            <CategoryTitle
                categoryTitle={selectedCategory ? selectedCategory?.name : ""}
                categoryDescription={selectedCategory ? selectedCategory?.description : ""}
            />
            <ProductCounter/>
            <ProductGrid />
            <button>Load More</button>
            <Filter/>
        </div>
    )
}
export default Products;