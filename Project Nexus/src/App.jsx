import { useState } from 'react';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header'
import Products from './components/products/Products';
import { useCategories } from './hooks/useCategories';
import { useProducts } from './hooks/useProducts';

function App() {
    const { categories, selectedCategory, handleCategorySelected } = useCategories();
    const { getProductsForCategory } = useProducts(selectedCategory);
    return (
        <>
            <Header
                onCategorySelected={(category) => handleCategorySelected(category)}
                categories={categories}
            />
            <Products
                selectedCategory={selectedCategory}
                products={getProductsForCategory()}
            />
            <Footer />
        </>
    )
}

export default App;