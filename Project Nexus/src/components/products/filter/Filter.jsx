import ColorFilter from "./filters/ColorFilter";
import PriceFilter from "./filters/PriceFilter";
import { Sorter } from "./Sorter";

export const Filter = ({
    minPrice,
    maxPrice,
    onSortOptionSelected,
    onFilterAdded,
    onFilterRemoved,
    filters,
    sortOption,
}) => {
    return (
        <div className="space-y-6">
            {/* Section: Color Filter */}
            <div className="border-b border-gray-200 pb-4">
                <ColorFilter
                    onColorSelected={(value) => onFilterAdded("color", value)}
                    onColorDeselected={(value) => onFilterRemoved("color", value)}
                    currentColors={filters ? filters?.filter(f => f[0] === "color").map(f => f[1]) : []}
                />
            </div>

            {/* Section: Price Filter */}
            <div className="border-b border-gray-200 pb-4">
                <PriceFilter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    savedPrices={filters ? filters?.find(f => f[0] === "price")?.[1] ?? null : null}
                    onPriceRangeChanged={(min, max) => onFilterAdded("price", { min: min, max: max })}
                />
            </div>

            {/* Section: Sorter */}
            <div className="pt-2">
                <Sorter 
                    onSortOptionSelected={onSortOptionSelected} 
                    sortOption={sortOption}
                />
            </div>
        </div>
    );
};

export default Filter;