import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import { bannerMockData } from "../Mock/bannerMockData"
import { useEffect, useState } from "react"



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
        <button className="w-10 h-10 bg-gray-800 opacity-40 flex justify-center z-1 items-center absolute left-0" onClick={downCount}><GoChevronLeft className="w-full h-full text-[#FFFFFF]"/></button>
        <div className="flex transition-transform duration-500"
        style={{transform:`translateX(-${count}%)`}}>
        {bannerMockData.map((item)=>{
            return(
                <img src={item.src} key={item.id} alt="" />
            )
        })}
        </div>
         <button className="w-10 h-10 bg-gray-800 opacity-40 flex justify-center z-1 items-center absolute right-0 " onClick={upCount}><GoChevronRight className="w-full h-full text-[#FFFFFF] "/></button>
             <div className="absolute bottom-2 right-2 px-3 py-1 bg-gray-700 opacity-60 rounded-3xl text-white text-sm">
    {startIndex+1} | {maxIndex}</div>
        </div>

        </>
    )
}

export default Banner