import AppLogo from "./AppLogo";
import HeaderNavigation from "./HeaderNavigation";

export const Header = ({categories, onCategorySelected}) => {
    return (
        <div>
            <AppLogo/>
            <HeaderNavigation 
                categories={categories}
                onCategorySelected={(category) => onCategorySelected?.(category)}
            />
        </div>);
}

export default Header;