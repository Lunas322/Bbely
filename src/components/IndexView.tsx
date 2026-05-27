type indexProps = {
    startIndex: number
    maxIndex: number
}

function IndexView ({startIndex,maxIndex}:indexProps) {
    return<>
    <div className="absolute bottom-2 right-2 px-3 py-1 bg-gray-800/40  rounded-3xl text-[#FFFFFF] text-sm">
    {startIndex} | {maxIndex}</div> 
    </>
}

export default IndexView