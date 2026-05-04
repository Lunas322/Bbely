function SearchLank () {
     const searchData = [
        {id:0, searchText:'전체'},
        {id:1, searchText:'10대 초반'},
        {id:2, searchText:'20대 초반'},
        {id:3, searchText:'20대 중반'},
        {id:4, searchText:'20대 후반'},
        {id:5, searchText:'30대 이상'}

    ]
    return(
        <>
        <div className="w-150 h-screen bg-[#FFFFFF] mt-12">
        <div className="h-1/8 flex justify-start items-center font-black ml-2">
            <h2>인기 검색어</h2>
        </div>
        <div className=" ml-3 flex justify-start h-fit gap-2.5 items-center">
        {searchData.map((data)=>{
            return (
                <div key={data.id} className="p-1.5 w-fit h-8 text-xs rounded-3xl border font-black text-[#666666] border-[#77777741]">
                    {data.searchText}
                </div>
            )})}
        </div>
        </div>
  
        </>
            )
}
export default SearchLank 