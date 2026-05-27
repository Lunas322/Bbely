import {Item } from "../types/items"
import { updateItemCount } from "../utils/updateItemCount"

type countButtonProps = {
    item: Item
    setCartData: React.Dispatch<React.SetStateAction<Item[]>>


}

function CountButton ({item, setCartData}:countButtonProps) {
    return(
        <>
                                    <div className="w-26 h-fit flex justify-between items-center">
                            <button className="w-8 h-8 rounded-full bg-[#77777722]" onClick={()=>updateItemCount({id:item.id,setCartData,type:'delete'})}>ㅡ</button>
                            <h2>{item.count}</h2>
                            <button className="w-8 h-8 rounded-full bg-[#7777771c]" onClick={()=>updateItemCount({id:item.id,setCartData,type:'add'})}>+</button>
                            </div>
        </>
    )
}

export default CountButton