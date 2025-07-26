import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () =>{
    setToggle(false)
  }
  const iinks = [
{
icon:<CiSearch/>,
name: "Search"
},
{
  icons: <CiDiscount1/>,
  name: "Offers"
}
{
  icon: "",
  name: "Help"
}


  ]

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed dur-500" onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div onClick={(e) => {
          e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
        style={{
          left: toggle ? '0%' : '-100%'
        }}
        ></div>
      </div>
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
<nav className='flex list-none gap-10 border border-black ml-auto text-[18px] font-semibold'>
  {
links.map(
(link, index) =>{

return <li className='flex items-center gap-2'>
{link.icon}
{link.name}
</li>

}


)



  }
</nav>


        </div>
      </header>
    </>
  );
}
