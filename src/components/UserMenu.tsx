import { useNavigate } from "react-router-dom"
import { cartDataProps, Item } from "../types/items"

type UserMenuProps = {
    cartData: Item[]
}

function UserMenu ({cartData}:UserMenuProps) {
    const nav = useNavigate()
    return (
        <>
               <div className="w-130 flex flex-col gap-4 mt-7">
          <div className="grid grid-cols-3 gap-3">
            <div className="border rounded-xl p-4 text-center border-[#7777774f]" onClick={()=>nav('/cart')}>
              <p className="text-sm text-gray-500">장바구니</p>
              <h2 className="font-bold text-xl">{cartData.length}</h2>
            </div>
            <div className="border rounded-xl p-4 text-center border-[#7777774f]">
              <p className="text-sm text-gray-500">주문</p>
              <h2 className="font-bold text-xl">0</h2>
            </div>

            <div className="border rounded-xl p-4 text-center border-[#7777774f]">
              <p className="text-sm text-gray-500">구매확정</p>
              <h2 className="font-bold text-xl">2</h2>
            </div>
          </div>

          <div className="border rounded-xl border-[#7777774f]">
            <div className="p-4 border-b">주문 내역</div>
            <div className="p-4 border-b">배송 조회</div>
            <div className="p-4 border-b">계정 설정</div>
            <div className="p-4">로그아웃</div>
          </div>
        </div>
        </>
    )
}

export default UserMenu