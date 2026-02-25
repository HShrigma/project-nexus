import reactSvg from '../../../assets/react.svg';

export const Product = ({ product }) => {
    return (
        <div className="
            flex flex-col rounded-lg border border-neutral-200 bg-white
            p-3 sm:p-4
            shadow-sm transition hover:shadow-md
            mx-2
        ">
            {/* Image */}
            <div className="
                aspect-square w-full overflow-hidden rounded-md bg-neutral-100 border-neutral-200 border-1
                max-h-40 sm:max-h-none
            ">
                <img
                    src={product?.img ?? reactSvg}
                    alt={product?.name ?? "Product image"}
                    className="h-full w-full object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 gap-1 sm:gap-2 mt-2 sm:mt-4">

                {/* Name */}
                <h3 className="text-sm font-semibold text-neutral-900">
                    {product?.name ?? "Missing name"}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-500 line-clamp-2">
                    {product?.description ?? "Missing description"}
                </p>

                <div className="flex-1" />

                {/* Footer */}
                <div className="flex items-center justify-between mt-1 sm:mt-2">
                    <span className="text-sm font-bold text-neutral-900">
                        {product?.price ? `$${product.price}` : "—"}
                    </span>

                    <span className="text-xs text-neutral-500">
                        ⭐ {product?.rating ?? "—"}/5
                    </span>
                </div>

                {/* Add to cart */}
                <button
                    className="
                        mt-2 sm:mt-3 w-full rounded-md
                        border border-neutral-900
                        px-3 py-1.5 sm:px-4 sm:py-2
                        text-[10px] sm:text-xs
                        font-semibold uppercase tracking-widest
                        transition hover:bg-neutral-900 hover:text-white
                    "
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;