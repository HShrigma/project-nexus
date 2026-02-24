
export const HeaderNavItem = ({category, onCategorySelected}) => {
    return (
        category && 
        <button onClick={() => onCategorySelected?.(category)}>
            {category}
        </button>
    );

}
export default HeaderNavItem;