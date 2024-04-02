import React from 'react'

function Cat({category,setCategory}) {
  return (
    <div className="w-full h-16 z-10 sticky top-16 pl-[17%] text-white   bg-slate-900 flex gap-3 overflow-hidden pt-2  ">
        <div style={{ border: category === 0       ? '1px solid white' : 'none', background: category === 0        ? 'rgb(234 88 12)' :  'rgb(75 85 99 )', }}         
          className="h-9 w-fit pt-1 px-3 pb-1 items-center flex justify-center bg-gray-600 text-white rounded-xl hover:bg-orange-600 duration-700 cursor-pointer " 
          onClick={()=>{ setCategory(0)}}>
            All
        </div>

        <div style={{ border: category === 'gaming'? '1px solid white' : 'none', background: category === 'gaming' ? 'rgb(234 88 12)' :  'rgb(75 85 99 )', }}         
          className="h-9 w-fit pt-1 px-3 pb-1 items-center flex justify-center bg-gray-600 text-white rounded-xl hover:bg-orange-600 duration-700 cursor-pointer " 
          onClick={()=>{ setCategory("gaming");}}>
           Gaming
        </div>

        <div style={{ border: category === 'music' ? '1px solid white' : 'none', background: category === 'music'  ? 'rgb(234 88 12)' :  'rgb(75 85 99 )', }}         
         className="h-9 w-fit pt-1 px-3 pb-1 items-center flex justify-center bg-gray-600 text-white rounded-xl hover:bg-orange-600 duration-700 cursor-pointer " 
         onClick={()=>{ setCategory("music");}}>
           Music
        </div>

        <div style={{ border: category === 'tech'  ? '1px solid white' : 'none', background: category === 'tech'   ? 'rgb(234 88 12)' :  'rgb(75 85 99 )', }}         
         className="h-9 w-fit pt-1 px-3 pb-1 items-center flex justify-center bg-gray-600 text-white rounded-xl hover:bg-orange-600 duration-700 cursor-pointer " 
         onClick={()=>{ setCategory('tech');}}>
           Tech
        </div>
        
       
    </div> 
  )
}

export default Cat 