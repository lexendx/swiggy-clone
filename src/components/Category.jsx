import React, { useEffect, useState } from 'react'
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";


export default function () {
  const [categories, setCategory] = useState([]);

const fetchCategory = async () =>{
  const response = await fetch("http://localhost:5000/categories"); 
  const data = await response.json();
  setCategory(data);

}
useEffect(
() => {
fetchCategory();

},  []


)

  return (
    <div className='max-w-[1200px] mx-auto'>
    <div className='flex items-center justify-between'>
<div className='text-[25px] font-bold'>What's on your mind?</div>
<div className='flex'>
<div className='cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center'> <HiArrowSmLeft/></div>
<div className='cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center'><HiArrowSmRight />
</div>


</div>



    </div>
    <div className='flex'>
      {
        categories.map(
          (cat, index)=>{
return(
<div></div>

)
          }
        )
      }
    </div>
    
    </div>
  )
}
