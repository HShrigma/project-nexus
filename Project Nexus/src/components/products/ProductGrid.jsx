import { Product } from "./Product";

export const ProductGrid = () => {
    const tempProducts = [{ id: 1, name: "Bag 1" }, { id: 2, name: "Bag 2" }, { id: 3, name: "Bag 3" }];
    return (
        <div>
            This is a product grid
            {tempProducts.map(prod => <Product key={prod.id} name={prod.name}/>)}
        </div>
    )
}
export default ProductGrid;