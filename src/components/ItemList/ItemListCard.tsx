type cardSize = 'S'|'L'

type itemListCardProps = {
    cardSize : cardSize
    discount: number|null
    shop: string
    itemTitle: string
    img: string
    price: string
}
//컴포넌트 매핑해
function ItemListCard ({cardSize,discount,shop,itemTitle,img,price}:itemListCardProps) {
    return(
        <>
        
        <div className="w-[198.66px] h-[342.39px]">
        <img src={img} alt="" className="w-full h-[238.39px]"/>
        <div className="pt-2 px-2">
        <div className="flex justify-start text-xs text-[#777777] ">
            <p className="font-bold">{shop}</p>
            <p>{itemTitle}</p>
        </div>
        <div className="flex justify-start">
            <p className=" text-red-600 font-black">{discount}%</p>
            <p className="font-black ml-1.5">{price}</p>
        </div>
        </div>
        </div>
        </>
    )
}

export default ItemListCard