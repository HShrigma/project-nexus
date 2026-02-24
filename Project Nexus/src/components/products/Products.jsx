import CategoryTitle from "./category/CategoryTitle";
import Filter from "./filter/Filter";
import ProductCounter from "./product/ProductCounter";
import ProductGrid from "./ProductGrid";

export const Products = ({selectedCategory, products}) => {
    return (
        <div>
            <CategoryTitle
                categoryTitle={selectedCategory?.name}
                categoryDescription={selectedCategory?.description}
            />
            <ProductCounter/>
            <ProductGrid 
                products={products?.filter(prod => prod.categoryId === selectedCategory?.id) }
            />
            <button>Load More</button>
            <Filter/>
        </div>
    )
}
export default Products;