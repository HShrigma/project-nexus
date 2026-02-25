export const CategoryTitle = ({ categoryTitle, categoryDescription }) => {
    return (
        <div className="flex flex-col items-baseline gap-2 m-2 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition">
                {categoryTitle ?? "No selected category"}
            </h1>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-thin italic transition-all">
                {categoryDescription ?? "Missing description"}
            </h2>
        </div>
    )
}
export default CategoryTitle;