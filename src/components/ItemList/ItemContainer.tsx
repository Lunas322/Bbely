

import { itemMockData } from "../../Mock/itemMockData"
import ItemListCard from "./ItemListCard"

function ItemContainer ({ search }: { search?: string }) {
   const filterData  = search ? itemMockData.filter(item=>item.itemTitle.includes(search)):itemMockData
    

    return (
        <>
        <div className="w-150 h-auto grid grid-cols-6 gap-4 pb-11">
        {filterData.map((item, index)=>{
            const cardSize = index < 3 ? 'S' : 'L'
            const cardStyle = cardSize === 'S' ? 'col-span-2' : 'col-span-3'
            return (
                <div className={cardStyle} key={item.id}>
                <ItemListCard
                img={item.img}
                itemTitle={item.itemTitle}
                price={item.price}
                discount={item.discount}
                shop={item.shop}
                cardSize={cardSize}
                id={item.id}
                />
                </div>
            )
        })}
        </div>
        </>
    )
}

export default ItemContainer 