// 콘테이너가 해야할것 
// 1번 그리드로 아이템 리스트 출력 하기
// 2번 1번째 줄의 아이템은 3개로 출력 
// 그 이후론 2개씩 출력
// 적정칸 렌더링 후 더보기 이후 출력 
// 1번부터 3번까지는 s 그 이후로 L

import { itemMockData } from "../../Mock/itemMockData"
import ItemListCard from "./ItemListCard"

function ItemContainer () {
    return (
        <>
        <div className="w-150 h-auto grid grid-cols-6 gap-4 pb-11">
        {itemMockData.map((item, index)=>{
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
                />
                </div>
            )
        })}
        </div>
        </>
    )
}

export default ItemContainer 