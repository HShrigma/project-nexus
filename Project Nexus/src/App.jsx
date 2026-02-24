import { useEffect, useState } from 'react';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header'
import Products from './components/products/Products';

function App() {
    const [categories, setCategories] = useState([{ id: 1, name: "Bags", description: "All bags" }, { id: 2, name: "Shoes", description: "All shoes" }]);
    const [selectedCategory, setSelectedCategory] = useState();

    const [items, setItems] = useState([
        { id: 1, categoryId: 1, name: "Bag 1", description: "sample description 1", price: 78, rating: 4 },
        { id: 2, categoryId: 1, name: "Bag 2", description: "sample description 2", price: 16 },
        { id: 3, categoryId: 2, name: "Shoes 1", description: "sample description 1", price: 66 },
        { id: 4, categoryId: 2, name: "Shoes 2", description: "sample description 2", price: 234 },
        { id: 5, categoryId: 2, name: "Shoes 3", description: "sample description 3", price: 2847 },
        { id: 6, categoryId: 2, name: "Shoes 4", description: "sample description 4", price: 39 },
        { id: 7, categoryId: 1, name: "Bag 3", description: "sample description 3", price: 26, rating: 5 }]);

    useEffect(() => {
        if (!selectedCategory) setSelectedCategory(categories[0]);
    }, [categories]);

    const handleCategorySelected = (categoryName) => {
        if (!selectedCategory) setSelectedCategory(categories.find(cat => cat.name == categoryName));
        if (categoryName !== selectedCategory.name) setSelectedCategory(categories.find(cat => cat.name == categoryName));
    }
    return (
        <>
            <Header
                onCategorySelected={(category) => handleCategorySelected(category)}
                categories={categories}
            />
            <Products
                selectedCategory={selectedCategory}
                products={items}
            />
            <Footer />
        </>
    )
}

export default App;