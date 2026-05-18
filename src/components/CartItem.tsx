import { cartDataProps } from "../types/items";
import CountButton from "./CountButton";
function CartItem({ cartData, setCartData }: cartDataProps) {

    function itemDelite (id:number) {
        setCartData((prev)=> prev.filter((item)=> item.id !== id))
    }
  return (
    <>
      {cartData.map((item) => {
        const itemPrice = item.price *item.count
        return(
        <div className="w-135 h-35 border mt-5 border-[#7777773f] rounded-2xl flex flex-col items-center justify-around">
          <div className="flex justify-around w-full items-center">
            <img src={item.img} className="w-20 h-20 rounded-xl" alt="" />
            <div className="flex w-100 justify-between flex-col gap-1">
              <div className="flex justify-between w-full ">
                <p className="text-sm">{item.itemTitle}</p>
                <button
                  className="font-black text-[#777777]"
                  onClick={() => itemDelite(item.id)}
                >
                  X
                </button>
              </div>
              <div className=" flex w-full items-center">
                <img
                  src="https://d3ha2047wt6x28.cloudfront.net/Wj1KnsGupJA/pr:CONVERT_TO_WEBP/czM6Ly9pbWcuYS1ibHkuY29tL2RhdGEvZ29vZHMvZGVsaXZlcnktdHlwZS90b2RheV9kZWxpdmVyeV9tZWRpdW0ucG5n"
                  className="w-14.5 h-5"
                  alt=""
                />
                <p className="text-xs text-[#777777] ml-2">
                  주문 마감으로 월요일에 출발
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="h-fit w-fit border rounded-sm px-2 border-[#7777773f] mt-1">
                  <p className="text-sm font-medium text-[#777777]">
                    {item.color} / {item.size}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-120 justify-between  items-center">
            <CountButton item={item} setCartData={setCartData} />
            <div>
              <h3 className="font-black">
                {itemPrice.toLocaleString() + "원"}
              </h3>
            </div>
          </div>
        </div>)
})}
    </>
  );
}

export default CartItem;
