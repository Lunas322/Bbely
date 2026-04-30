type RecommendProps = {
    userName: string;
    sponSoerd: string;
}



function Recommend ({userName, sponSoerd}:RecommendProps) {
    return (
        <>
        <div className="w-150 h-18  px-4 py-6 flex justify-between items-center">
            <h2 className="font-bold">{userName}을 위한 추천 상품</h2>
            <p className="text-[#DDDDDD] font-extralight">{sponSoerd}</p>
        </div>
        </>
    )
}

export default Recommend