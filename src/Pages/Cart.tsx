import LinBar from "../common/LineBar"
import Header from "../common/Header"
import { cartDataProps } from "../types/items"
import CartSummary from "../components/CartSummary"
import EmptyCart from "../components/EmptyCart"
import CartItem from "../components/CartItem"

function Cart ({cartData,setCartData}:cartDataProps) {

    const totalPrice = cartData.reduce((acc,item)=> acc+ item.price * item.count, 0)
    const totaalItem = cartData.reduce((acc,item)=> acc + item.count ,0)

    function handleBuy () {
        if(totaalItem === 0 ){
            alert('구매할 상품이 없습니다')
        }
        setCartData([])
        alert('총 상품 '+ totaalItem + '개 구매완료')
    }
    return (
        <> 
            <div className="w-full h-fit flex flex-col items-center"> 
                <Header text="장바구니"/>
                {cartData.length > 0 ?  <div>
                <LinBar/>
                <div className="flex justify-center pt-27 w-150  items-center">
                    <div className="flex justify-center items-center h-auto p-4 w-140 rounded-2xl flex-col mt-5 border border-[#7777773f] ">
                    <h2 className="font-black">상품</h2>
                    <CartItem cartData={cartData} setCartData={setCartData}/>
                    </div >
                </div>
                <CartSummary totalPrice={totalPrice} onBuy={handleBuy}/> 
                </div>: <EmptyCart/>}
        </div>
        </>
    )
}

export default Cart