function   HeaderTop() {
    return (
           <div className="w-150 h-15 bg-[#FF5160] justify-between font-bold flex items-center px-2.5 py-3 ">
        <div className="w-55 h-9 flex items-center gap-2">
        <div className="w-8.75 h-8.75 font-black text-[9px] flex justify-center items-center rounded-md bg-[#FFFFFF]">B B L Y</div>
        
        <p className="text-[10px] text-[#FFFFFF] font-bold w-45 h-4">앱에서 더 많은 상품을 볼 수 있어요!</p>
        </div>
        <button className="w-15.5 h-7 border-2 border-gray-100 bg-white px-2 font-black rounded-full text-[8px] flex justify-center items-center ">앱에서 보기</button>
      </div>
    )
}

export default HeaderTop