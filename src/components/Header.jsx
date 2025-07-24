import React from 'react'
import { RxCaretDown } from "react-icons/rx";

export default function Header() {
  return (
   <header className='p-[15px] shadow-xl'>
    <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center'>
        <div className='w-[100px]'>
<img src="images/Swiggy-emblem.png" className='w-full' alt=''/>
 
        </div>


        <div className=''>
<span className='font-bold border-b-[3px] border-black'>Ratanada</span>
 Jodhpur, Rajsthan, India <RxCaretDown fontsize={25} className='font-bold inline text-[.9rem] text-[#fc8019]'/>

        </div>




    </div>


   </header>
  )
}
