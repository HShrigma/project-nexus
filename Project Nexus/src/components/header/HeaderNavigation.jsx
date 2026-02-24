import HeaderNavItem from "./HeaderNavItem";

export const HeaderNavigation = ({categories, onCategorySelected}) => {
    return (
        <nav> 
            {categories.map(item => 
                <HeaderNavItem
                    key={item.id}
                    category={item.name}
                    onCategorySelected={(category) => onCategorySelected?.(category)}
                />)}
        </nav>

    );
}

export default HeaderNavigation;