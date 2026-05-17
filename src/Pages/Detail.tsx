import { useParams } from "react-router-dom"
import LinBar from "../common/LineBar"
import Header from "../components/Header"
import { itemMockData } from "../Mock/itemMockData"
import ItemModal from "../components/ItemModal"
import { cartDataProps } from "../types/items"


function Detail ({cartData,setCartData}:cartDataProps) {




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
                        <p className="text-xl font-black">{item?.price.toLocaleString()}원</p>
                    </div>
                </div>
            </div>
            <ItemModal color={item?.color} size={item?.size} itemTitle={item?.itemTitle ?? ''} price={item?.price ?? 0} img={item?.img ?? ''} cartData={cartData} setCartData={setCartData} />                                                                       
        </div>
        </>
    )
}
export default Detail