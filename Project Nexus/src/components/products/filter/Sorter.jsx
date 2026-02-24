export const Sorter = ({onSortOptionSelected}) => {
    return (
        <div>
            Sort by:
            <button onClick={() => onSortOptionSelected("A-Z")}> Alphabetical (A–Z) </button>
            <button onClick={() => onSortOptionSelected("Z-A")}> Alphabetical (Z–A) </button>
            <button onClick={() => onSortOptionSelected("0-1")}> Price (Low to High) </button>
            <button onClick={() => onSortOptionSelected("1-0")}> Price (High to Low) </button>
            <button onClick={() => onSortOptionSelected("R+")}> Rating (Low to High) </button>
            <button onClick={() => onSortOptionSelected("R-")}> Rating (High to Low) </button>
        </div>
    );
}
export default Sorter;