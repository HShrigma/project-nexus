export const ColorFilter = ({ onColorSelected, onColorDeselected }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) onColorSelected(value);
    else onColorDeselected(value);
  };

  return (
    <div className="space-y-2">
      <div className="text-sm font-medium">Color:</div>
      <div className="flex flex-col gap-2">
        {["red", "green", "blue"].map((color) => (
          <label key={color} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={color}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="capitalize">{color}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;