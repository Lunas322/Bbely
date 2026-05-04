function SearchLank () {
     const searchData = [
        {id:0, searchText:'전체'},
        {id:1, searchText:'10대 초반'},
        {id:2, searchText:'20대 초반'},
        {id:3, searchText:'20대 중반'},
        {id:4, searchText:'20대 후반'},
        {id:5, searchText:'30대 이상'}

    ]
    const searchRankMockData = [
  { id: 0, searchRankText: "후드티", rank: 1 },
  { id: 1, searchRankText: "맨투맨", rank: 2 },
  { id: 2, searchRankText: "청바지", rank: 3 },
  { id: 3, searchRankText: "운동화", rank: 4 },
  { id: 4, searchRankText: "반팔티", rank: 5 },
  { id: 5, searchRankText: "가디건", rank: 6 },
  { id: 6, searchRankText: "백팩", rank: 7 },
  { id: 7, searchRankText: "슬랙스", rank: 8 },
  { id: 8, searchRankText: "모자", rank: 9 },
];


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
        <div className="flex flex-col p-2 mt-2">
            {searchRankMockData.map((data)=>{
                return(
                    <>
                    <div className="flex justify-start w-full h-9 gap-3 items-center font-black text-sm" key={data.id}>
                        <div>{data.rank}</div>
                        <div className="font-medium text-xs">{data.searchRankText}</div>

                    </div>
                    </>
                )
            })}
        </div>
        </div>
  
        </>
            )
}
export default SearchLank 