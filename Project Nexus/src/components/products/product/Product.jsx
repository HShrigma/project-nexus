import reactSvg from '../../../assets/react.svg';

export const Product = ({product}) => {
    return (
        <div>
            {/*Image*/}
            <img src={reactSvg} alt="React logo" />
            {/*Name*/}
            <div>{product?.name ?? "Missing name"}</div>
            {/*Description*/}
            <div>{product?.description ?? "Missing description"}</div>
            {/*Price*/}
            <div>{product?.price ? `$${product.price}` : "Missing price"}</div>
            {/*Star Rating*/}
            <div>{product?.rating ?? "Missing star rating"}</div>
            {/*Add to Cart*/}
            <button> Add to cart</button>
        </div>
);
}