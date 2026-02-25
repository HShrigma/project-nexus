import AppLogo from "./AppLogo";
import HeaderNavigation from "./HeaderNavigation";

export const Header = ({ categories, onCategorySelected }) => {
    return (
        <header>
            <div>
                <AppLogo />
                <HeaderNavigation
                    categories={categories}
                    onCategorySelected={(category) => onCategorySelected?.(category)}
                />
            </div>
        </header>
    );
}

export default Header;