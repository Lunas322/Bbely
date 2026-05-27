import CategoryMockData from "../../Mock/categoryMockData"
import CategoryCard from "./CategoryCard"


function Category () {
    return(
        <>
        <div className="w-150 h-25 bg-[#FFFFFF] justify-between flex flex-row p-2 gap-4 mt-1.5">

        {CategoryMockData.map((item)=>{
            return (
             <CategoryCard img={item.img} title={item.title} id={item.id}/>
            )
        })}
        </div>
        </>
    )
}

export default Category
