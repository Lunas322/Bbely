import { GoChevronLeft, GoChevronRight } from "react-icons/go"

type Direction = 'LEFT'|'RIGHT'

type BannerButtonProps = {
    direction: Direction,
    onClick: () => void
}

function BannerButton ({direction,onClick}:BannerButtonProps) {

    const buttonType = direction === 'LEFT' ? 'left-0' : 'right-0'
    const iconType = direction === 'LEFT' ? <GoChevronLeft className="w-full h-full text-[#FFFFFF]"/> :
    <GoChevronRight className="w-full h-full text-[#FFFFFF]"/>

    return(
        <>
        <button className={`w-10 h-10 bg-gray-800/40
        flex justify-center text-[#FFFFFF] z-10 items-center absolute ${buttonType}`}
         onClick={onClick}>
            {iconType}
            
            </button>
        </>
    )
}

export default BannerButton