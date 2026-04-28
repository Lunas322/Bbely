import { IoIosSearch } from "react-icons/io"

function HeaderHome({disabled}:{disabled?: boolean}) {
    return (
        <>
                <div className="w-127 h-9.5 bg-[#EEEEEE] flex items-center gap-2 px-2 rounded-md">
                    <div className="w-127 h-9.5 bg-[#EEEEEE] flex items-center gap-2 px-2">
                    <IoIosSearch className="w-5 h-5 text-[#777777]" />
                    <input type="text" placeholder="하나만 사도 무료배송" className="w-100 outline-0 " disabled={disabled} />
                    </div>
                </div>
                
                </>
    )
}

export default HeaderHome