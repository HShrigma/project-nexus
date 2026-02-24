import ColorFilter from "./filters/ColorFilter";
import {Sorter} from "./Sorter";

export const Filter = ({minPrice, maxPrice, onSortOptionSelected, onFilterAdded, onFilterRemoved}) => {
    return (
        <div>
            This is a filter
            <ColorFilter 
                onColorSelected={(value) => onFilterAdded("color", value)}
                onColorDeselected={(value) => onFilterRemoved("color", value)} 
            />
            <div>
                Filter on:
                <div> Price </div>
                <div> Price Min: {minPrice}</div>
                <div> Price Max: {maxPrice}</div>
            </div>
            <Sorter onSortOptionSelected={onSortOptionSelected} />
        </div>);
}
export default Filter;