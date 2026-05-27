
import { bannerMockData } from "../Mock/bannerMockData"
import { useState } from "react"
import BannerButton from "./BannerButton"
import useAutoSlide from "../hooks/useAutoSlide"
import useInfinitelLoop from "../hooks/useInfiniteLoop"
import IndexView from "../components/IndexView"




function Banner () {
const [count,setCount] = useState(0)
const maxIndex = bannerMockData.length
const startIndex = count/100
const max = maxIndex*100

function upCount () {

    setCount(prev => prev +100)
}

function downCount () {

    setCount(prev=> prev-100)
}


useAutoSlide(() => {
  setCount(prev => prev + 100);
}, 4000);

useInfinitelLoop({
    count,
max:max-100,
setCount})

    return (
        <>
        <div className="w-150 h-75 flex flex-row overflow-hidden justify-between items-center relative mt-27 ">
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
             <IndexView maxIndex={maxIndex} startIndex={startIndex+1}/>  
        </div>

        </>
    )
}

export default Banner