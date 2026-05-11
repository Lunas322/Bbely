import React from "react"
type selectCase = 'color' | 'size'
type select = {
    color: string
    size: string
}

type OptionBarProps = {
  text: string
  setSelect: React.Dispatch<React.SetStateAction<select>>
  Case: selectCase
}



function OptionBar ({text, setSelect, Case}:OptionBarProps) {

    function selectData () {
    Case === 'color' ? setSelect((prev)=> ({...prev, color: text})) : setSelect((prev)=> ({...prev, size: text}))
}

    return <>
                <div className='w-140 h-14  text-sm border border-[#7777774f] rounded-sm flex justify-between items-center p-2'
                onClick={()=>{selectData()}}
                >
                        {text}
                </div>
    </>
}
export default OptionBar