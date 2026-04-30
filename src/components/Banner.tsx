import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import { bannerMockData } from "../Mock/bannerMockData"
import { useEffect, useState } from "react"
import BannerButton from "../common/BannerButton"



function Banner () {
const [count,setCount] = useState(0)
const maxIndex = bannerMockData.length
const startIndex = count/100

function upCount () {

    setCount(prev => prev +100)
}

function downCount () {

    setCount(prev=> prev-100)
}


useEffect(() => {
  const autoScroll = setInterval(() => {
    setCount(prev => prev + 100);
  }, 4000);

  return () => clearInterval(autoScroll);
}, []);


useEffect(()=>{
console.log(count)
if(count > 900) {
    setCount(prev=>prev -1000) 
} else if (count < 0) {
    setCount(prev=>prev+1000)
}
},[count])

    return (
        <>
        <div className="w-150 h-75 flex flex-row overflow-hidden justify-between items-center relative ">
        <BannerButton onClick={downCount} direction="LEFT"/>
        <div className="flex transition-transform duration-500"
        style={{transform:`translateX(-${count}%)`}}>
        {bannerMockData.map((item)=>{
            return(
                <img src={item.src} key={item.id} alt="" />
            )
        })}
        </div>
         <BannerButton onClick={upCount} direction="RIGHT"/>
             <div className="absolute bottom-2 right-2 px-3 py-1 bg-gray-800/40  rounded-3xl text-[#FFFFFF] text-sm">
    {startIndex+1} | {maxIndex}</div>
        </div>

        </>
    )
}

export default Banner