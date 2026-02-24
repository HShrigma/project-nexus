import HeaderNavItem from "./HeaderNavItem";

export const HeaderNavigation = ({categories, onCategorySelected}) => {
    return (
        <nav> 
                This is navigation
            {categories.map(item => 
                <HeaderNavItem
                    key={item.id}
                    category={item.categoryName}
                    onCategorySelected={(category) => onCategorySelected?.(category)}
                />)}
        </nav>

    );
}

export default HeaderNavigation;