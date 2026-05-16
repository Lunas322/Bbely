import { GoArrowDown } from "react-icons/go"

type option = {
    show: ()=>void
    text: string
}
function ModalOption ({show,text}:option) {
    return (
        <>
            <div onClick={show} className="w-140 h-14 text-sm border border-[#7777774f] rounded-sm flex justify-between items-center p-2">
                <p>{text}</p>
                <GoArrowDown className="w-5 h-5 font-black text-[#777777]"/>
            </div>
        </>
    )
}

export default ModalOption