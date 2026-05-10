import { useParams } from "react-router-dom"
import LinBar from "../common/LineBar"
import Header from "../components/Header"
import { itemMockData } from "../Mock/itemMockData"
import { GoArrowDown, GoArrowLeft } from "react-icons/go"
import { useState } from "react"
import ItemModal from "../components/ItemModal"


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
const item = itemMockData.find((item)=> item.id === Number(id))
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
            <ItemModal color={item?.color} size={item?.size}/>                                                                       
        </div>
        </>
    )
}
export default Detail