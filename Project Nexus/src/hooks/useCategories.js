import { useEffect, useState } from 'react';

export const useCategories = () => {
    const [categories, setCategories] = useState([{ id: 1, name: "Bags", description: "Luxury bags" }, { id: 2, name: "Shoes", description: "Luxury shoes" }]);
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        if (!selectedCategory) setSelectedCategory(categories[0]);
    }, [categories]);

    const handleCategorySelected = (categoryName) => {
        if (!selectedCategory) setSelectedCategory(categories.find(cat => cat.name == categoryName));
        if (categoryName !== selectedCategory.name) setSelectedCategory(categories.find(cat => cat.name == categoryName));
    }
    return { categories, selectedCategory, handleCategorySelected };
}