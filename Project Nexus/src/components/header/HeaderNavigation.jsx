import HeaderNavItem from "./HeaderNavItem";

export const HeaderNavigation = ({ categories, onCategorySelected, selectedCategory }) => {
    return (
        <nav>
            <ul className=" hidden sm:flex items-center gap-8 ">
                {categories.map(item =>
                    <li key={item.id}>
                        <HeaderNavItem
                            key={item.id}
                            label={item.name}
                            onCategorySelected={(label) => onCategorySelected?.(label)}
                            selected={selectedCategory && selectedCategory?.name === item.name}
                        />
                    </li>
                )}
            </ul>
        </nav>

    );
}

export default HeaderNavigation;