import HeaderNavItem from "./HeaderNavItem";

export const HeaderNavigation = () => {
    const tempItems = [{id:1, categoryName: "Bags"} , {id:2, categoryName: "Shoes"}];
    const handleCategorySelected = (category) => console.log("Category " + category + " selected");
    return (
        <nav> 
                This is navigation
            {tempItems.map(item => 
                <HeaderNavItem
                    key={item.id}
                    category={item.categoryName}
                    onCategorySelected={handleCategorySelected}
                />)}
        </nav>

    );
}

export default HeaderNavigation;