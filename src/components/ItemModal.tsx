import { GoArrowDown } from "react-icons/go";
import {modalOption } from "../types/items";
import { useState } from "react";

function ItemModal ({color,size,}:modalOption) {
    const [show,setshow] = useState({
        color: false,
        size: false,
        modal: false
    })
    
    const isSize = show.size ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
    const isColor = show.color ? "max-h-60 opacity-100"  : "max-h-0 opacity-0"
    const isModal = show.modal ? "max-h-full opacity-100 " : "max-h-0 opacity-0 pointer-events-none"

    function DetailShow(option: "color" | "size" | "modal") {
        setshow((prev) => ({
            ...prev,
            [option]: !prev[option]
        }))
    }

    // 구매하기 버튼 -> 모달 열기 1번 오픈
    // 바깥 배경 버튼 -> 모달 닫기 1번
    // 옵션 컬러 버튼 -> 옵션 모달 열기
    // 옵션 사이즈 버튼 -> 사이즈 모달 열기 
    // 그럼 여기서의 모달은 3개 color size modal
    // 누른게 color, size , modal 중에서 맞는것을 찾아서
    // 그것의 상태를 바꾸자 false로 

    return(
        <>
                     <div className="w-150 h-22 bg-white fixed bottom-0 flex items-center justify-center ">
                <button onClick={()=>DetailShow('modal')} className={`w-10/12 h-15 bg-black flex justify-center items-center rounded-xl text-[#FFFFFF] font-bold text-xl`}>구매하기</button> 
            </div>
             <div onClick={()=>DetailShow('modal')}className={`${isModal} w-150 h-full bg-[#0c0b0b7e] rounded-t-2xl bottom-0 fixed overflow-hidden transition-all duration-200 `}>
                <div  className="w-150 h-auto rounded-t-2xl bg-[#FFFFFF] bottom-0 fixed py-10 flex flex-col gap-4" onClick={(e)=>e.stopPropagation()}>
                <div className={`ion()w-full h-fit flex justify-center flex-col items-center`}>
                <div onClick={()=>DetailShow('color')} className="w-140 h-14 text-sm border border-[#7777774f] rounded-sm flex justify-between items-center p-2">
                    <p>컬러 선택하기</p>
                    <GoArrowDown className="w-5 h-5 font-black text-[#777777]"/>
                </div>
                <div className={`overflow-hidden transition-all duration-150 ease-in-out ${isColor}`}>
                {color?.map((color)=>{
                    return(
                      <div className={`w-140 h-14  text-sm border border-[#7777774f] rounded-sm flex justify-between items-center p-2`}>
                        {color}
                </div>  
                    )
                })}
                </div>
                </div>
                <div className="w-full h-fit flex justify-center flex-col items-center">
                <div onClick={()=>DetailShow('size')} className="w-140 h-14 text-sm border border-[#7777774f] rounded-sm flex justify-between items-center p-2">
                    <p>사이즈 선택하기</p>
                    <GoArrowDown className="w-5 h-5 font-black text-[#777777]"/>
                </div>
                <div className={`overflow-hidden transition-all duration-150 ease-in-out ${isSize}`}>
                {size?.map((size)=>{
                    return(
                <div className="w-140 h-14 text-sm border border-[#7777774f] rounded-sm flex justify-between items-center p-2">
                    {size}
                </div>
                    )
                })}
                </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ItemModal