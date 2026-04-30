import CategoryMockData from "../Mock/categoryMockData"


function Category () {
    return(
        <>
        <div className="w-150 h-25 bg-[#FFFFFF] justify-between flex flex-row p-2 gap-4 mt-1.5">

        {CategoryMockData.map((item)=>{
            return <div className="flex">
                <div className="flex flex-col justify-between items-center w-15.5 h-14.5 ">
                <img src={item.img} key={item.id} alt="" className="w-8.5 h-8.5"/>
                <p className="text-[11px]">{item.title}</p>
                </div>
            </div>

        })}
        </div>
        </>
    )
}

export default Category
