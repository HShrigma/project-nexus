export const ProductCounter = ({ productsLength, currentCount }) => {
    return (
        <div>
            {currentCount} out of {productsLength} items displayed
        </div>
    )
}

export default ProductCounter;