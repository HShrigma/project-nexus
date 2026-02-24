import { Product } from "./product/Product";

export const ProductGrid = ({products}) => {
    return (
        <div>
            This is a product grid
            {products?.map(prod => <Product key={prod.id} product={prod}/>)}
        </div>
    )
}
export default ProductGrid;