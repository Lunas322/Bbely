import { modalOption } from "../types/items";
import { useEffect, useState } from "react";
import ModalOption from "./ModalOption";
import OptionBar from "../common/OptionBar";
import { Item } from "../types/items";


function ItemModal({ color, size, price,img, cartData, setCartData }: modalOption) {
  const [show, setShow] = useState({
    color: false,
    size: false,
    modal: false,
  });

  const [select, setSelect] = useState({
    size: "",
    color: "",
  });

  const [itemArray, setItemArray] = useState<Item[]>([]);

  const isSize = show.size ? "max-h-60 opacity-100" : "max-h-0 opacity-0";
  const isColor = show.color ? "max-h-60 opacity-100" : "max-h-0 opacity-0";
  const isModal = show.modal ? "max-h-full opacity-100 " : "max-h-0 opacity-0 pointer-events-none";

  function DetailShow(option: "color" | "size" | "modal") {
    setShow((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  }

  function handleSelectOption(type: "color" | "size", value: string) {
    setSelect((prev) => ({ ...prev, [type]: value }));
    setShow((prev) => ({ ...prev, [type]: false }));
  }

  function deleteItem(index: number) {
    setItemArray((prev) => prev.filter((_, i) => i !== index));
  }

  function countup(index: number) {
    setItemArray((prev) =>
      prev.map((item, i) => (i === index ? { ...item, count: item.count + 1 } : item))
    );
  }

  function countdown(index: number) {
    setItemArray((prev) =>
      prev.map((item, i) =>
        i === index && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    );
  }


  useEffect(()=>{
    if(select.color && select.size) {
      return(
        setItemArray((prev)=> [...prev, {...select,count: 1}]),    setSelect({color: '', size: ''})

      )
    }

  },[select.color,select.size])

function addCart () {
      if(itemArray.length === 0) {
        return;
      }
      itemArray.forEach((newItem)=> 
      {
        const existItem = cartData.find((item)=>
          item.color == newItem.color 
        && item.size == newItem.size)

        if (existItem) {
          setCartData((prev)=> prev.map((item)=>{
            return(
              item.color === newItem.color && 
              item.size === newItem.size ? 
              {...item , count: item.count + newItem.count, price: price, img:img}: item
            )
          }))
        } else {
          setCartData((prev)=> [...prev, {...newItem, price: price, img:img}])
        }
      }
      )
      console.log(cartData)
      alert('장바구니에 추가되었습니다.')
    setItemArray([])
    }
  return (
    <>
      <div className="w-150 h-22 bg-white fixed bottom-0 flex items-center justify-center">
        <button
          onClick={() => DetailShow("modal")}
          className="w-10/12 h-15 bg-black flex justify-center items-center rounded-xl text-white font-bold text-xl"
        >
          구매하기
        </button>
      </div>

      <div
        onClick={() => DetailShow("modal")}
        className={`${isModal} w-150 h-full bg-[#0c0b0b7e] rounded-t-2xl bottom-0 fixed overflow-hidden transition-all duration-200`}
      >
       <div
          className="w-150 h-auto rounded-t-2xl bg-white bottom-0 fixed py-10 flex flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full h-fit flex justify-center flex-col items-center">
            <ModalOption show={() => DetailShow("color")} text={select.color || "컬러 선택하기"} />
            <div className={`overflow-hidden transition-all duration-150 ease-in-out ${isColor}`}>
              {color?.map((c) => (
                <OptionBar key={c} text={c} onSelect={(val) => handleSelectOption("color", val)} />
              ))}
            </div>
          </div>

          <div className="w-full h-fit flex justify-center flex-col items-center">
            <ModalOption show={() => DetailShow("size")} text={select.size || "사이즈 선택하기"} />
            <div className={`overflow-hidden transition-all duration-150 ease-in-out ${isSize}`}>
              {size?.map((s) => (
                <OptionBar key={s} text={s} onSelect={(val) => handleSelectOption("size", val)} />
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            {itemArray.map((item, index) => (
              <div key={index} className="w-140 h-30 border border-[#7777773a] mt-5 rounded-sm p-4 flex flex-col justify-between">
                <div className="w-full flex justify-between">
                  <div>{item.color} / {item.size}</div>
                  <div
                    className="w-5 h-5 rounded-full flex justify-center items-center border border-[#7777773a] bg-[#7777770b] cursor-pointer"
                    onClick={() => deleteItem(index)}
                  >
                    X
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-22 h-fit flex justify-between items-center">
                    <button className="w-8 h-8 rounded-full bg-[#77777722]" onClick={() => countdown(index)}>ㅡ</button>
                    <h2>{item.count}</h2>
                    <button className="w-8 h-8 rounded-full bg-[#7777771c]" onClick={() => countup(index)}>+</button>
                  </div>
                  <div className="font-black">
                    {(Number(price ?? 0) * item.count).toLocaleString()}원
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center px-5">
            <div
              className="w-70 bg-white h-14 rounded-xl border border-[#7777773a] font-black text-xl flex justify-center items-center cursor-pointer"
              onClick={addCart}
            >
              장바구니
            </div>
            <div className="w-70 bg-black h-14 rounded-xl text-white font-black text-xl flex justify-center items-center cursor-pointer">
              구매하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemModal;