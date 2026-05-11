
import {modalOption } from "../types/items";
import { useState } from "react";
import ModalOption from "./ModalOption";
import OptionBar from "../common/OptionBar";

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

    return(
        <>
                     <div className="w-150 h-22 bg-white fixed bottom-0 flex items-center justify-center ">
                <button onClick={()=>DetailShow('modal')} className={`w-10/12 h-15 bg-black flex justify-center items-center rounded-xl text-[#FFFFFF] font-bold text-xl`}>구매하기</button> 
            </div>
             <div onClick={()=>DetailShow('modal')}className={`${isModal} w-150 h-full bg-[#0c0b0b7e] rounded-t-2xl bottom-0 fixed overflow-hidden transition-all duration-200 `}>
                <div  className="w-150 h-auto rounded-t-2xl bg-[#FFFFFF] bottom-0 fixed py-10 flex flex-col gap-4" onClick={(e)=>e.stopPropagation()}>
                <div className={`w-full h-fit flex justify-center flex-col items-center`}>
                <ModalOption show={()=>DetailShow('color')} text="컬러 선택하기"/>
                <div className={`overflow-hidden transition-all duration-150 ease-in-out ${isColor}`}>
                {color?.map((color)=>{
                    return(
                      <OptionBar text={color}/>  
                    )
                })}
                </div>
                </div>
                <div className="w-full h-fit flex justify-center flex-col items-center">
                <ModalOption show={()=>DetailShow('size')} text="사이즈 선택하기"/>
                <div className={`overflow-hidden transition-all duration-150 ease-in-out ${isSize}`}>
                {size?.map((size)=>{
                    return(
                <OptionBar text={size}/>  
                    )
                })}
                </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-70 bg-[#FFFFFF] h-14  rounded-xl text-balck border border-[#7777773a] font-black text-xl flex justify-center items-center">장바구니</div>
                    <div className="w-70 bg-black h-14  rounded-xl text-[#FFFFFF] font-black text-xl flex justify-center items-center">구매하기</div>
                </div>    
                </div>
                
            </div>
        </>
    )
}

export default ItemModal