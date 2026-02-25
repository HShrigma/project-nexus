export const Sorter = ({ onSortOptionSelected, sortOption }) => {
    const handleChange = (event) => {
        onSortOptionSelected(event.target.value);
    };

    const options = [
        { label: "Alphabetical (A–Z)", value: "A-Z" },
        { label: "Alphabetical (Z–A)", value: "Z-A" },
        { label: "Price (Low to High)", value: "0-1" },
        { label: "Price (High to Low)", value: "1-0" },
        { label: "Rating (Low to High)", value: "R+" },
        { label: "Rating (High to Low)", value: "R-" },
    ];

    return (
        <div className="space-y-2">
            <div className="text-sm font-medium">Sort by:</div>
            <div className="flex flex-col gap-2">
                {options.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="sortOption"
                            value={opt.value}
                            checked={sortOption ? sortOption === opt.value : false}
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span>{opt.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Sorter;