import ColorFilter from "./filters/ColorFilter";
import PriceFilter from "./filters/PriceFilter";
import { Sorter } from "./Sorter";

export const Filter = ({ minPrice, maxPrice, onSortOptionSelected, onFilterAdded, onFilterRemoved }) => {
    return (
        <div>
            <div>
                Filter on:
                <ColorFilter
                    onColorSelected={(value) => onFilterAdded("color", value)}
                    onColorDeselected={(value) => onFilterRemoved("color", value)}
                />
                <PriceFilter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onPriceRangeChanged={(min, max) => onFilterAdded("price", {min:min, max:max})}
                />
            </div>
            <Sorter onSortOptionSelected={onSortOptionSelected} />
        </div>);
}
export default Filter;