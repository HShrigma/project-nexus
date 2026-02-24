import { useState } from 'react';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header'
import Products from './components/products/Products';

function App() {
    const [categories,setCategories] = useState([{id:1, categoryName: "Bags"} , {id:2, categoryName: "Shoes"}]);
    const [selectedCategory,setSelectedCategory] = useState("Bags");

    const handleCategorySelected = (category) => {
        if (category !== selectedCategory) setSelectedCategory(category);
    }

    return (
        <>
            <Header 
                onCategorySelected={(category) => handleCategorySelected(category)}
                categories={categories}
            />
            <Products/>
            <Footer/>
        </>
    )
}

export default App;