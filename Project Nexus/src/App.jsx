import { useEffect, useState } from 'react';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header'
import Products from './components/products/Products';

function App() {
    const [categories,setCategories] = useState([{id:1, name: "Bags", description: "All bags"} , {id:2, name: "Shoes", description:"All shoes"}]);
    const [selectedCategory,setSelectedCategory] = useState();

    useEffect(()=>{
        if(!selectedCategory) setSelectedCategory(categories[0]);
    }, [categories]);

    const handleCategorySelected = (categoryName) => {
        if(!selectedCategory) setSelectedCategory(categories.find(cat => cat.name == categoryName));
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
            />
            <Footer/>
        </>
    )
}

export default App;