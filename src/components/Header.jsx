import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
setToggle(true);        

  }

  return (
    <>
    <div className='black-overlay w-full h-full fixed dur-500' style={{opacity: toggle ? 1 : 0,
visibility: toggle ? "visible" : "hidden"


    }}></div>
      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
          <div className="w-[100px]">
            <img src="images/Swiggy-emblem.png" className="w-full" alt="" />
          </div>

          <div className="">
            <span className="font-bold border-b-[3px] border-black">
              Ratanada
            </span>
            Jodhpur, Rajsthan, India
            <RxCaretDown
  onClick={showSideMenu}
  fontsize={25}
  className="font-bold inline text-[.9rem] text-[#fc8019] cursor-pointer"
/>
          </div>
        </div>
      </header>
    </>
  );
}
