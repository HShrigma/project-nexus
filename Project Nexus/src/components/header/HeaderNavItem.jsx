import { useEffect } from "react";

export const HeaderNavItem = ({ label, onCategorySelected, selected }) => {
    useEffect(() => {
        console.log(label, "selected changed:", selected);
    }, [selected]);

    if (!label) return null;

    const handleClick = () => {
        if (!selected) {
            onCategorySelected?.(label);
        }
    };

    const buttonClass = selected
    ? "text-xs uppercase tracking-widest text-black !font-bold !border-b-3 border-black cursor-default pointer-events-none "
    : "text-xs uppercase tracking-widest text-neutral-600 hover:text-black hover:shadow-2xs cursor-pointer transition";

    return (
        <button className={buttonClass} onClick={handleClick}>
            {label}
        </button>
    );
};

export default HeaderNavItem;