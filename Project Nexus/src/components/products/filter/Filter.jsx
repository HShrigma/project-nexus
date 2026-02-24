export const Filter = ({minPrice, maxPrice}) => {
    return (
        <div>
            This is a filter
            <div>
                Filter on:
                <div> Color: 
                    <button>red</button>
                    <button>green</button>
                    <button>blue</button>
                </div>
                <div> Price </div>
                <div> Price Min: {minPrice}</div>
                <div> Price Max: {maxPrice}</div>
            </div>
            <div>
                Sort by:
                <button> Alphabetical (A–Z) </button>
                <button> Alphabetical (Z–A) </button>
                <button> Price (Low to High) </button>
                <button> Price (High to Low) </button>
            </div>
        </div>);
}
export default Filter;