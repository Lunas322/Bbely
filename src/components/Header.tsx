import HeaderTop from "../common/HeaderTop"
import HeaderSub from "../common/HeaderSub"
import { PiShoppingCartLight } from "react-icons/pi"
import { HeaderSubProps } from "../types/header"

function Header(Page:HeaderSubProps) {
  return (
    <div className="w-150 h-27 fixed top-0 z-20 bg-[#FFFFFF]">
        <HeaderTop/>
      <div className="w-150 h-12 flex items-center justify-between ">
        <HeaderSub icons={[PiShoppingCartLight]} Page={Page.Page}/>
      </div>
      
    </div>
  )
}

export default Header