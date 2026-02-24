export const CategoryTitle = ({categoryTitle, categoryDescription}) => {
    return (
        <div>
            <h2> {categoryTitle ?? "No selected category"} </h2> 
            <h3> {categoryDescription ?? "Missing description"} </h3> 
        </div>
    )
}
export default CategoryTitle;