import { Footer } from './components/footer/Footer';
import Header from './components/header/Header'
import Products from './components/products/Products';
import { useCategories } from './hooks/useCategories';

function App() {
    const { categories, selectedCategory, handleCategorySelected } = useCategories();
    return (
        <>
            <Header
                onCategorySelected={(category) => handleCategorySelected(category)}
                categories={categories}
                selectedCategory={selectedCategory}
            />
            <Products
                selectedCategory={selectedCategory}
            />
            <Footer />
        </>
    )
}

export default App;