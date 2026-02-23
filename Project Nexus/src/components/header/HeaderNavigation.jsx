import HeaderNavItem from "./HeaderNavItem";

export const HeaderNavigation = () => {
    const tempItems = [{id:1, categoryName: "Bags"} , {id:2, categoryName: "Shoes"}];
    return (
        <nav> 
                This is navigation
            {tempItems.map(item => <HeaderNavItem key={item.id} category={item.categoryName} />)}
        </nav>

    );
}

export default HeaderNavigation;