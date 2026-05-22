
import { IoIosSearch } from "react-icons/io"
import { useNavigate } from "react-router-dom"
// 1번 입력창의 state 받기
// 2번 입력창의 state 와 동일한 단어가 들어간 상품을
// page에 뿌리기 

type HeaderInputProps = {
      disabled: boolean
      setSearch: React.Dispatch<React.SetStateAction<string>>
}

function HeaderInput({disabled,setSearch}:HeaderInputProps) {

    const nav = useNavigate()
    function handleChange (e:React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }
    function moveSearch () {
        if (disabled) {
            nav('/search')
        }
    }
    
    return (
        <>
                <div className="w-auto h-9.5 bg-[#EEEEEE] flex items-center mx-auto gap-2 px-2 rounded-md">
                    <div className="w-127 h-9.5 bg-[#EEEEEE] flex items-center gap-2 px-2">
                    <IoIosSearch className="w-5 h-5 text-[#777777]" />
                    <input type="text" placeholder="하나만 사도 무료배송" className="w-100 outline-0 " onChange={handleChange} readOnly={disabled} onClick={moveSearch}/>
                    </div>
                </div> 

                </>
    )
}

export default HeaderInput