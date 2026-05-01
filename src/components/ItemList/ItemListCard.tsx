type cardSize = 'S'|'L'

type itemListCardProps = {
    cardSize : cardSize
}
//컴포넌트 매핑해
function ItemListCard ({cardSize}:itemListCardProps) {
    return(
        <>
        <div className="w-[198.66px] h-[342.39px]">
        <img src="https://d3ha2047wt6x28.cloudfront.net/L0MIiXlAowo/pr:NEW_GOODS_THUMB_WEBP/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzL2I3MGY3YTllYzc4Y2I5NDZjNzIwMDM1MTRiM2Q0NjI4LmdpZg" alt="" className="w-full h-[238.39px]"/>
        <div className="pt-2 px-2     ">
        <div className="fles justify-start text-xs text-[#777777] ">
            <p className="font-bold">Tomato</p>
            <p>가멘츠 레터링 밴딩 와이드 데님 </p>
        </div>
        <div className="flex justify-start">
            <p className=" text-red-600 font-black">49%</p>
            <p className="font-black ml-1.5">49,800</p>
        </div>
        </div>
        </div>
        </>
    )
}

export default ItemListCard