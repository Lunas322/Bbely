import HeaderTop from "../components/Header/HeaderTop"
import { PiShoppingCartLight } from "react-icons/pi"
import { HeaderSubProps } from "../types/header"
import HeaderSub from "../components/Header/HeaderSub"

function Header({Page,setSearch,text}:HeaderSubProps) {
  
  return (
    <div className="w-150 h-27 fixed top-0 z-20 bg-[#FFFFFF]">
        <HeaderTop/>
      <div className="w-150 h-12 flex items-center justify-between ">
        <HeaderSub setSearch={setSearch} icons={[PiShoppingCartLight]} Page={Page} text={text}/>
      </div>
      
    </div>
  )
}

export default Header