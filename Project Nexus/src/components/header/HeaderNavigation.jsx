import HeaderNavItem from "./HeaderNavItem";

export const HeaderNavigation = () => {
    const tempItems = [{categoryName: "Bags"} , {categoryName: "Shoes"}];
    return (
        <nav> 
                This is navigation
                {tempItems.map(item => <HeaderNavItem/>)}
        </nav>

    );
}

export default HeaderNavigation;