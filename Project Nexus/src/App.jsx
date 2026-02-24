import { useState } from 'react';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header'
import Products from './components/products/Products';
import { useCategories } from './hooks/useCategories';

function App() {
    const [products, setProducts] = useState([
        { id: 1, categoryId: 1, name: "Bag 1", description: "sample description 1", price: 78, rating: 4 , color: "red"},
        { id: 2, categoryId: 1, name: "Bag 2", description: "sample description 2", price: 16, rating: 4 , color: "red"},
        { id: 3, categoryId: 2, name: "Shoes 1", description: "sample description 1", price: 66, rating: 2 , color: "green"},
        { id: 4, categoryId: 2, name: "Shoes 2", description: "sample description 2", price: 234, rating: 4 , color: "green"},
        { id: 5, categoryId: 2, name: "Shoes 3", description: "sample description 3", price: 2847, rating: 5 , color: "green"},
        { id: 6, categoryId: 2, name: "Shoes 4", description: "sample description 4", price: 234, rating: 4 , color: "red"},
        { id: 7, categoryId: 2, name: "Shoes 5", description: "sample description 5", price: 2847, rating: 5 , color: "red"},
        { id: 8, categoryId: 2, name: "Shoes 6", description: "sample description 6", price: 39, rating: 4, color: "blue" },
        { id: 9, categoryId: 2, name: "Shoes 7", description: "sample description 7", price: 39, rating: 4, color: "blue" },
        { id: 10, categoryId: 1, name: "Bag 3", description: "sample description 3", price: 26, rating: 5, color: "blue" }]);
    const { categories, selectedCategory, handleCategorySelected } = useCategories();
    return (
        <>
            <Header
                onCategorySelected={(category) => handleCategorySelected(category)}
                categories={categories}
            />
            <Products
                selectedCategory={selectedCategory}
                products={products?.filter(prod => prod.categoryId === selectedCategory?.id)}
            />
            <Footer />
        </>
    )
}

export default App;