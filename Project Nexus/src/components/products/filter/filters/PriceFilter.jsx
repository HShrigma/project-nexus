import { useEffect, useState, useRef } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const PriceFilter = ({ minPrice = 0, maxPrice = 1000, onPriceRangeChanged }) => {
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);
  const [activeHandle, setActiveHandle] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    setMin(minPrice);
    setMax(maxPrice);
  }, [minPrice, maxPrice]);

  const handleMouseMove = (e) => {
    if (!activeHandle || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = clamp(x / rect.width, 0, 1);
    const value = Math.round(minPrice + percentage * (maxPrice - minPrice));

    if (activeHandle === 'min') {
      setMin(clamp(value, minPrice, max - 1));
    } else if (activeHandle === 'max') {
      setMax(clamp(value, min + 1, maxPrice));
    }
  };

  const handleMouseDown = (handle) => (e) => {
    e.preventDefault();
    setActiveHandle(handle);
  };

  const handleMouseUp = () => {
    setActiveHandle(null);
  };

  useEffect(() => {
    if (activeHandle) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeHandle, min, max]);

  const getLeftPercentage = () => ((min - minPrice) / (maxPrice - minPrice)) * 100;
  const getRightPercentage = () => 100 - ((max - minPrice) / (maxPrice - minPrice)) * 100;

  return (
    <div className="w-full max-w-md space-y-3">
      <label className="block text-sm font-medium">
        Price Range (${minPrice}-${maxPrice})
      </label>

      {/* Custom Slider */}
      <div className="relative h-6" ref={sliderRef}>
        {/* Track Background */}
        <div className="absolute top-1/2 h-1 w-full bg-gray-200 rounded -translate-y-1/2" />
        
        {/* Active Track */}
        <div
          className="absolute top-1/2 h-1 bg-blue-500 rounded -translate-y-1/2"
          style={{
            left: `${getLeftPercentage()}%`,
            right: `${getRightPercentage()}%`,
          }}
        />

        {/* Min Handle */}
        <button
          onMouseDown={handleMouseDown('min')}
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
            activeHandle === 'min' ? 'bg-blue-800 scale-110' : 'bg-blue-600'
          }`}
          style={{ left: `${getLeftPercentage()}%` }}
          aria-label="Minimum price"
        />

        {/* Max Handle */}
        <button
          onMouseDown={handleMouseDown('max')}
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
            activeHandle === 'max' ? 'bg-blue-800 scale-110' : 'bg-blue-600'
          }`}
          style={{ left: `${100 - getRightPercentage()}%` }}
          aria-label="Maximum price"
        />
      </div>

      {/* Display */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>${min}</span>
        <span>${max}</span>
      </div>
      <button onClick={() => onPriceRangeChanged(min,max)}>Submit</button>
    </div>
  );
};

export default PriceFilter;