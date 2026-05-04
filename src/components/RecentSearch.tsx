function RecentSearch () {
    const searchData = [
        {id:0, searchText:'고재성 24시간 코드치기'},
        {id:1, searchText:'토마토 옷'},
        {id:2, searchText:'후드티'},
        {id:3, searchText:'티셔츠'},
        {id:4, searchText:'티팬티'}

    ]
    return (
        <>
        <div className="w-150 h-12 mt-27">
        <div className="flex justify-between px-2.5 w-full h-10 items-center ">
            <div className="font-bold text-sm">최근검색어</div>
            <p className="text-xs font-medium text-[#777777]">편집</p>
        </div>
        <div className=" ml-3 flex justify-start h-full gap-2.5 items-center">
        {searchData.map((data)=>{
            return (
                <div key={data.id} className="p-1.5 w-fit h-8 text-xs rounded-3xl border font-black text-[#666666] border-[#77777741]">
                    {data.searchText}
        </div>
            )
        })}
        </div>
        <div className="w-full h-2 bg-[#77777711]"></div>
        </div>
        </>
    )
}
export default RecentSearch 