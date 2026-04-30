import React, { useEffect } from "react"
type Options = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    max: number
}

//받을거 카운트 max low
function useInfinitelLoop ({count,max,setCount}:Options) {
    useEffect(()=>{
        if(count > max){
            setCount(0)
        } else if (count < 0)
        {setCount(max)}

    },[count,max,setCount])
}
export default useInfinitelLoop










/*
useEffect(()=>{
console.log(count)
if(count > 900) {
    setCount(prev=>prev -1000) 
} else if (count < 0) {
    setCount(prev=>prev+1000)
}
},[count])*/
