import { Product } from "./product/Product";
export const ProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.map(prod => <Product key={prod.id} product={prod} />)}
        </div>
    )
}
export default ProductGrid;