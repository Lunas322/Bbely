
import { GoChevronLeft } from "react-icons/go"
import Title from "./Title"
import { HeaderSubProps } from "../types/header"
import { PageMap } from "../constants/pageMap"



function HeaderSub({text,icons,Page}:HeaderSubProps) {
    const pageContent = Page ? PageMap[Page] : <Title text={text??""}/>
  return (
   <>
   <div className="w-12 h-12 flex items-center justify-center ">
    {Page && <GoChevronLeft className="w-9 h-9" />}
   </div>
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