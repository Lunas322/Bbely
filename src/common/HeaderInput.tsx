import { IoIosSearch } from "react-icons/io"
import { useNavigate } from "react-router-dom"

function HeaderHome({disabled}:{disabled?: boolean}) {
    const nav = useNavigate()
    function moveSearch () {
        if (disabled) {
            nav('/search')
        }
    }
    return (
        <>
                <div className="w-auto h-9.5 bg-[#EEEEEE] flex items-center mx-auto gap-2 px-2 rounded-md">
                    <div className="w-127 h-9.5 bg-[#EEEEEE] flex items-center gap-2 px-2">
                    <IoIosSearch className="w-5 h-5 text-[#777777]" />
                    <input type="text" placeholder="하나만 사도 무료배송" className="w-100 outline-0 " readOnly={disabled} onClick={moveSearch}/>
                    </div>
                </div>
                
                </>
    )
}

export default HeaderHome