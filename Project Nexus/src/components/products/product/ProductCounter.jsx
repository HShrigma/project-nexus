export const ProductCounter = ({ productsLength, currentCount }) => {
    return (
        <div className="flex justify-center items-center text-neutral-400 m-3">
            {currentCount} out of {productsLength} items displayed
        </div>
    )
}

export default ProductCounter;