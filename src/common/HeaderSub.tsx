
import { GoChevronLeft } from "react-icons/go"
import Title from "./Title"
import { HeaderSubProps } from "../types/header"
import { PageMap } from "../constants/pageMap"
import { useNavigate } from "react-router-dom"



function HeaderSub({text,icons,Page}:HeaderSubProps) {
    const pageContent = Page ? PageMap[Page] : <Title text={text??""}/>
    const nav = useNavigate()
  return (
   <>
   
    {Page === "home" ? null :  <button className="w-12 h-12 flex items-center" onClick={(()=>nav('/'))}>
            <GoChevronLeft className="w-9 h-9" />
        </button>}
    {/* 차후 각 아이콘 버튼을 상단의 버튼으로 컴포넌트를 만들어 공통 컴포넌트화 */}

    {pageContent}       
  
   <div className="flex justify-between gap-3.5">
    {icons?.map((Icon, index) => (
      <Icon key={index} className="w-8 h-8" />
    ))}
   </div>
   </>
  )
}

export default HeaderSub