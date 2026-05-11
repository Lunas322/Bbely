type OptionBarProps = {
  text: string
}

function OptionBar ({text}:OptionBarProps) {
    return <>
                <div className='w-140 h-14  text-sm border border-[#7777774f] rounded-sm flex justify-between items-center p-2'>
                        {text}
                </div>
    </>
}
export default OptionBar