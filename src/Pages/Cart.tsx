import LinBar from "../common/LineBar"
import Header from "../components/Header"
import { cartDataProps } from "../types/items"

function Cart ({cartData,setCartData}:cartDataProps) {


// 장바구니에 아무것도 안 들어있을 경우 처리
// 자동 금액 총 합산 처리
// 지우개 처리



    function addEa (id:number) {
        setCartData((prev)=> prev.map((item)=> {
            if (item.id === id) {
                return {...item, count: item.count +1}
            }
            return item
        }))
    
    }

    function deliteEa (id:number) {
        setCartData((prev)=> prev.map((item)=>{
            if(item.id === id && item.count > 0) {
                return {...item, count: item.count -1}
            }
            return(item)
            
        }).filter((item)=> item.count !== 0))
    }

    function itemDelite (id:number) {
        setCartData((prev)=> prev.filter((item)=> item.id !== id))
    }



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
                <Header Page="home"/>
                <LinBar/>
                <div className="flex justify-center pt-27 w-150  items-center">
                    <div className="flex justify-center items-center h-auto p-4 w-140 rounded-2xl flex-col mt-5 border border-[#7777773f] ">
                    <h2 className="font-black">장바구니</h2>
                    {cartData.map((item)=>{
                        const itemPrice = item.count * item.price
                    return(
                    <div className="w-135 h-35 border mt-5 border-[#7777773f] rounded-2xl flex flex-col items-center justify-around">
                        <div className="flex justify-around w-full items-center">
                        <img src={item.img} className="w-20 h-20 rounded-xl" alt="" />
                        <div className="flex w-100 justify-between flex-col gap-1">
                            <div className="flex justify-between w-full ">
                            <p className="text-sm">{item.itemTitle}</p>
                            <button className="font-black text-[#777777]" onClick={()=>itemDelite(item.id)}>X</button>
                            </div>
                            <div className=" flex w-full items-center">
                                <img src="https://d3ha2047wt6x28.cloudfront.net/Wj1KnsGupJA/pr:CONVERT_TO_WEBP/czM6Ly9pbWcuYS1ibHkuY29tL2RhdGEvZ29vZHMvZGVsaXZlcnktdHlwZS90b2RheV9kZWxpdmVyeV9tZWRpdW0ucG5n" className="w-14.5 h-5" alt="" />
                                <p className="text-xs text-[#777777] ml-2">주문 마감으로 월요일에 출발</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                            <div className="h-fit w-fit border rounded-sm px-2 border-[#7777773f] mt-1">
                                <p className="text-sm font-medium text-[#777777]">{item.color} / {item.size}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex w-120 justify-between  items-center">
                            <div className="w-26 h-fit flex justify-between items-center">
                    <button className="w-8 h-8 rounded-full bg-[#77777722]" onClick={()=>deliteEa(item.id)}>ㅡ</button>
                    <h2>{item.count}</h2>
                    <button className="w-8 h-8 rounded-full bg-[#7777771c]" onClick={()=>addEa(item.id)}>+</button>
                    </div>
                            <div>
                                <h3 className="font-black">{itemPrice.toLocaleString()+'원'}</h3>
                            </div>
                    </div>
                    </div>)})}
                    </div >
                </div>
                    <div className="w-150 h-3 bg-[#7777771c] my-4"></div>
                <div className="w-150 h-40 flex gap-3  flex-col p-3">
                    <div className="w-full h-8 font-semibold text-xl flex justify-start">예상 결제금액</div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#777777]">총 상품금액</p>
                        <h3 className="font-black text-xl">{totalPrice.toLocaleString()+ '원'}</h3>
                    </div>
                    <div className="flex justify-between items-center pb-25">
                        <p className="text-[#777777]">배송비</p>
                        <div className="w-12.25 h-fit font-black text-sm text-orange-300 rounded-sm bg-[#d586de24]">무료배송</div>
                    </div>
                    <div className="w-150 h-20 flex justify-center items-center fixed bottom-0 p-3 bg-white ">
                    <button className="w-146 h-17 rounded-2xl bg-[#000000] text-white font-black text-xl" onClick={handleBuy}>
                        구매하기
                    </button>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Cart