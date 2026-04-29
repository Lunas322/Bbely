import HeaderTop from "../common/HeaderTop"
import HeaderSub from "../common/HeaderSub"
import { MdOutlineShoppingBag } from "react-icons/md"

function Header() {
  return (
    <div className="w-150 h-27">
        <HeaderTop/>
      <div className="w-150 h-12 flex items-center justify-between ">
        <HeaderSub icons={[MdOutlineShoppingBag]} text="" Page="home"/>
      </div>
      
    </div>
  )
}

export default Header