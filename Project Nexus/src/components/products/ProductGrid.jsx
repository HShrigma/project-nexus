import { Product } from "./Product";

export const ProductGrid = () => {
    const tempProducts = [
        { id: 1, name: "Bag 1", description: "sample description 1", price: 78, rating: 4 }, 
        { id: 2, name: "Bag 2", description: "sample description 2", price: 16  }, 
        { id: 3, name: "Bag 3", description: "sample description 3", price: 26, rating: 5 }];
    return (
        <div>
            This is a product grid
            {tempProducts.map(prod => <Product key={prod.id} product={prod}/>)}
        </div>
    )
}
export default ProductGrid;