import MenuBar from "../common/MenuBar"

function EmptyCart () {
    return (
        <>
        <div className="w-150 h-screen pt-27 flex justify-center items-center">
            장바구니가 비어있습니다
        </div>
        <MenuBar/>
        </>
    )
}
export default EmptyCart