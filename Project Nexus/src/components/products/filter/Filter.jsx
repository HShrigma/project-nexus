import ColorFilter from "./filters/ColorFilter";
import PriceFilter from "./filters/PriceFilter";
import { Sorter } from "./Sorter";

export const Filter = ({
  minPrice,
  maxPrice,
  onSortOptionSelected,
  onFilterAdded,
  onFilterRemoved,
}) => {
  return (
    <div className="space-y-6">
      {/* Section: Color Filter */}
      <div className="border-b border-gray-200 pb-4">
        <ColorFilter
          onColorSelected={(value) => onFilterAdded("color", value)}
          onColorDeselected={(value) => onFilterRemoved("color", value)}
        />
      </div>

      {/* Section: Price Filter */}
      <div className="border-b border-gray-200 pb-4">
        <PriceFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceRangeChanged={(min, max) =>
            onFilterAdded("price", { min: min, max: max })
          }
        />
      </div>

      {/* Section: Sorter */}
      <div className="pt-2">
        <Sorter onSortOptionSelected={onSortOptionSelected} />
      </div>
    </div>
  );
};

export default Filter;