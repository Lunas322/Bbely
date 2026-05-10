import { useParams } from "react-router-dom"
import LinBar from "../common/LineBar"
import Header from "../components/Header"
import { itemMockData } from "../Mock/itemMockData"
import { GoArrowDown, GoArrowLeft } from "react-icons/go"
import { useState } from "react"


// 받을 데이터 
// 1 페이지 상품 사진
// 2 상품 판매자 가게 이름
// 3 상품 이름 
// 4 가격
// 5 할인률
// 6 색상,사이즈


// id와 같은것을 mock data에서 찾고 그걸 변수에 저장해서 구조분해로 사용하기?
// 그럼 id가 일치하는 객체를 찾아야함 필터?

function Detail () {

const {id} = useParams()
const [show,setshow] = useState(false)
const [show2,setshow2] = useState(false)
const [show3,setshow3] = useState(false)


const item = itemMockData.find((item)=> item.id === Number(id))
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

    return (
        <>
                <div className="w-full flex flex-col items-center ">
            <Header Page="home"/>
            <img className="w-150 h-150 mt-27" src={item?.img} alt="" />
            <div className="flex justify-start items-center w-150 h-18 gap-4">
                <div className="rounded-full p-2 bg-[#777777] w-12 h-12 flex justify-center items-center">
                    <p className="text-[10px] font-black">샵 img</p>
                </div>
                <div className="w-10/12 font-black">{item?.shop}</div>
            </div>
            <LinBar/>
            <div className="w-150 h-49 p-4">
                <div>
                   <p className="w-full h-10 font-medium text-sm">{item?.itemTitle}</p>  
                </div>
                <div className="w-full h-fit bg-[#5B35FF12] rounded-xl p-3  ">
                    <div className="flex gap-2">
                        <p className="text-[#5B35FF] text-xl font-black">{item?.discount === null ? null : item?.discount+ '%'}</p>
                        <p className="text-xl font-black">{item?.price}원</p>
                    </div>
                </div>
            </div>
            <div className="w-150 h-22 bg-white fixed bottom-0 flex items-center justify-center ">
                <button onClick={DetailShow3} className={`w-10/12 h-15 bg-black flex justify-center items-center rounded-xl text-[#FFFFFF] font-bold text-xl`}>구매하기</button> 
            </div>
            <div onClick={DetailShow3}className={`${optionShow3} w-150 h-full bg-[#0c0b0b7e] rounded-t-2xl bottom-0 fixed overflow-hidden transition-all duration-200 `}>
                <div  className="w-150 h-auto rounded-t-2xl bg-[#FFFFFF] bottom-0 fixed py-10 flex flex-col gap-4" onClick={(e)=>e.stopPropagation()}>
                <div className={`ion()w-full h-fit flex justify-center flex-col items-center`}>
                <div onClick={DetailShow} className="w-140 h-14 text-sm border-1 border-[#7777774f] rounded-sm flex justify-between items-center p-2">
                    <p>컬러 선택하기</p>
                    <GoArrowDown className="w-5 h-5 font-black text-[#777777]"/>
                </div>
                <div className={`overflow-hidden transition-all duration-150 ease-in-out ${optionShow}`}>
                {item?.color.map((color)=>{
                    return(
                      <div className={`w-140 h-14  text-sm border-1 border-[#7777774f] rounded-sm flex justify-between items-center p-2`}>
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
                {item?.size.map((size)=>{
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
        </div>
        </>
    )
}
export default Detail