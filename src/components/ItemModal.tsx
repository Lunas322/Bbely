import { GoArrowDown } from "react-icons/go";
import {modalOption } from "../types/items";
import { useState } from "react";

function ItemModal ({color,size,}:modalOption) {
    const [show,setshow] = useState(false)
    const [show2,setshow2] = useState(false)
    const [show3,setshow3] = useState(false)
    const optionShow = show ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
    const optionShow2 = show2 ? "max-h-60 opacity-100"  : "max-h-0 opacity-0"
    const optionShow3 = show3 ? "max-h-full opacity-100 " : "max-h-0 opacity-0 pointer-events-none"
    
    function DetailShow () {
        show === true ? setshow(false) : setshow(true)
        console.log(show)
    }
    function DetailShow2 () {
        show2 === true ? setshow2(false) : setshow2(true)
        console.log(show2)
    
    }function DetailShow3 () {
        show3 === true ? setshow3(false) : setshow3(true)
        console.log(show3)
    
    }
    return(
        <>
                     <div className="w-150 h-22 bg-white fixed bottom-0 flex items-center justify-center ">
                <button onClick={DetailShow3} className={`w-10/12 h-15 bg-black flex justify-center items-center rounded-xl text-[#FFFFFF] font-bold text-xl`}>구매하기</button> 
            </div>
             <div onClick={DetailShow3}className={`${optionShow3} w-150 h-full bg-[#0c0b0b7e] rounded-t-2xl bottom-0 fixed overflow-hidden transition-all duration-200 `}>
                <div  className="w-150 h-auto rounded-t-2xl bg-[#FFFFFF] bottom-0 fixed py-10 flex flex-col gap-4" onClick={(e)=>e.stopPropagation()}>
                <div className={`ion()w-full h-fit flex justify-center flex-col items-center`}>
                <div onClick={DetailShow} className="w-140 h-14 text-sm border border-[#7777774f] rounded-sm flex justify-between items-center p-2">
                    <p>컬러 선택하기</p>
                    <GoArrowDown className="w-5 h-5 font-black text-[#777777]"/>
                </div>
                <div className={`overflow-hidden transition-all duration-150 ease-in-out ${optionShow}`}>
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
                <div onClick={DetailShow2} className="w-140 h-14 text-sm border-1 border-[#7777774f] rounded-sm flex justify-between items-center p-2">
                    <p>사이즈 선택하기</p>
                    <GoArrowDown className="w-5 h-5 font-black text-[#777777]"/>
                </div>
                <div className={`overflow-hidden transition-all duration-150 ease-in-out ${optionShow2}`}>
                {size?.map((size)=>{
                    return(
                <div className="w-140 h-14 text-sm border-1 border-[#7777774f] rounded-sm flex justify-between items-center p-2">
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