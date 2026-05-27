
import { IoIosSearch, IoMdHome, IoMdPerson } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"

//menuBar가 해야할것 1 누르면 색 변하기
//눌렀을때 다른 메뉴는 색이 없어야함.
//누르면 페이지로 이동 하기

function MenuBar () {
    const menuData = [
        {id:1, label:'홈', path:'/', icon:<IoMdHome className="w-5 h-5"/>},
        {id:2, label:'검색', path:'/search', icon:<IoIosSearch className="w-5 h-5"/>},
        {id:3, label:'마이페이지',path:'/my',icon:<IoMdPerson className="w-5 h-5"/>}
    ]

    const location = useLocation()
    const nav = useNavigate()
    
    return (
        <>
        <div className="w-150 h-13 grid grid-cols-3 z-10  fixed bottom-0 mt-26 bg-[#FFFFFF]">
        {menuData.map((data)=>{
            const isActive = data.path === location.pathname ? 'text-[#FF5160]' : 'text-[#777777]'
            return (
                       <div className={`${isActive} flex justify-center items-center flex-col col-span-1`}
                       onClick={(()=>{nav(data.path)})}
                       >
                        {data.icon}
                        <p className="text-xs">{data.label}</p>
                       
                        </div> 
            )
        })}

        </div>
        </>
    )
}
export default MenuBar