type cartSummaryProps = {
    totalPrice: number
    onBuy: ()=>void
}


function CartSummary ({totalPrice,onBuy}:cartSummaryProps) {
    return(
        <>
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
                    <button className="w-146 h-17 rounded-2xl bg-[#000000] text-white font-black text-xl" onClick={onBuy}>
                        구매하기
                    </button>
                    </div>
                </div>
        </>
    )
}

export default CartSummary