type cardSize = 'S'|'L'

type itemListCardProps = {
    cardSize : cardSize
    discount: number|null
    shop: string
    itemTitle: string
    img: string
    price: string
}

function ItemListCard ({cardSize,discount,shop,itemTitle,img,price}:itemListCardProps) {
    const cardSizeStyle = cardSize === "S" ? "w-full h-[342.39px]" : "w-full h-[430px]"
    const imgSizeStyle = cardSize === "S" ? "w-full h-[238.39]" : "w-full h-[358.8px]"
    function sliceText (text:string,maxIndex:number) {
        return text.length > maxIndex ? text.slice(0,maxIndex)+'...' : text

    }
    return(
        <>
        
        <div className={cardSizeStyle}>
        <img src={img} alt="" className={imgSizeStyle}/>
        <div className="pt-2 px-2">
        <div className="flex justify-start flex-col text-xs text-[#777777] ">
            <p className="font-bold">{shop}</p>
            <p>{cardSize === "S" ? sliceText(itemTitle,16) : sliceText(itemTitle,25) }</p>
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