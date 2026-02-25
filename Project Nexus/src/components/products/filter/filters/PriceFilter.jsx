import { useEffect, useRef, useState } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const PriceFilter = ({
    minPrice = 0,
    maxPrice = 1000,
    onPriceRangeChanged,
}) => {
    const [min, setMin] = useState(minPrice);
    const [max, setMax] = useState(maxPrice);
    const [activeHandle, setActiveHandle] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        setMin(minPrice);
        setMax(maxPrice);
    }, [minPrice, maxPrice]);

    const updateValueFromPointer = (e) => {
        if (!activeHandle || !sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const x = clamp(e.clientX - rect.left, 0, rect.width);
        const percentage = x / rect.width;
        const value = Math.round(
            minPrice + percentage * (maxPrice - minPrice)
        );

        if (activeHandle === "min") {
            setMin(clamp(value, minPrice, max - 1));
        } else if (activeHandle === "max") {
            setMax(clamp(value, min + 1, maxPrice));
        }
    };

    const handlePointerDown = (handle) => (e) => {
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        setActiveHandle(handle);
    };

    const handlePointerMove = (e) => {
        if (!activeHandle) return;
        updateValueFromPointer(e);
    };

    const clearPointer = (e) => {
        const el = e.currentTarget;

        try {
            el.releasePointerCapture(e.pointerId);
        } catch {
            // Ignore invalid pointerId errors
        }

        setActiveHandle(null);
    };

    useEffect(() => {
        if (activeHandle) {
            onPriceRangeChanged?.(min, max);
        }
    }, [min, max, activeHandle]);

    const getLeftPercentage = () =>
        ((min - minPrice) / (maxPrice - minPrice)) * 100;

    const getRightPercentage = () =>
        100 - ((max - minPrice) / (maxPrice - minPrice)) * 100;

    return (
        <div className="w-full max-w-md space-y-3">
            <label className="block text-sm font-medium">
                Price Range (${minPrice}–${maxPrice})
            </label>

            <div
                ref={sliderRef}
                className="relative h-6 touch-none"
                onPointerMove={handlePointerMove}
            >
                {/* Track */}
                <div className="absolute top-1/2 h-1 w-full bg-gray-200 rounded -translate-y-1/2" />

                {/* Active track */}
                <div
                    className="absolute top-1/2 h-1 bg-neutral-500 rounded -translate-y-1/2"
                    style={{
                        left: `${getLeftPercentage()}%`,
                        right: `${getRightPercentage()}%`,
                    }}
                />

                {/* Min handle */}
                <button
                    onPointerDown={handlePointerDown("min")}
                    onPointerUp={clearPointer}
                    onPointerCancel={clearPointer}
                    onLostPointerCapture={clearPointer}
                    className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 !p-2 rounded-full border-2 cursor-pointer transition focus:outline-none focus:ring-2 ${activeHandle === "min" ? "!bg-neutral-200 scale-110" : "!bg-neutral-500"} `}
                    style={{ left: `${getLeftPercentage()}%` }}
                    aria-label="Minimum price"
                />
                {/* Max handle */}
                <button
                    onPointerDown={handlePointerDown("max")}
                    onPointerUp={clearPointer}
                    onPointerCancel={clearPointer}
                    onLostPointerCapture={clearPointer}
                    className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 !p-2 rounded-full border-2 cursor-pointer transition focus:outline-none focus:ring-2 ${activeHandle === "max" ? "!bg-neutral-200 scale-110" : "!bg-neutral-500"} `}
                    style={{ left: `${100 - getRightPercentage()}%` }}
                    aria-label="Maximum price"
                />
            </div>

            <div className="flex justify-between text-sm text-gray-600">
                <span>${min}</span>
                <span>${max}</span>
            </div>
        </div>
    );
};

export default PriceFilter;