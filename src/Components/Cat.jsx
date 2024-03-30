import React from 'react'

function Cat() {
  return (
    <div className="w-full h-16 z-10 sticky top-16 pl-[17%] text-white   bg-slate-900 flex gap-3 overflow-hidden pt-2 ">
        <div className="h-9 w-fit pt-1 px-3 pb-1 items-center flex justify-center bg-gray-600 text-white rounded-xl hover:bg-orange-600 duration-700 ">All</div>
        <div className="h-9 w-fit pt-1 px-3 pb-1 items-center flex justify-center bg-gray-600 text-white rounded-xl hover:bg-orange-600 duration-700 ">Gaming</div>
        <div className="h-9 w-fit pt-1 px-3 pb-1 items-center flex justify-center bg-gray-600 text-white rounded-xl hover:bg-orange-600 duration-700 ">Music</div>
        <div className="h-9 w-fit pt-1 px-3 pb-1 items-center flex justify-center bg-gray-600 text-white rounded-xl hover:bg-orange-600 duration-700 ">Tech</div>
        
       
    </div>
  )
}

export default Cat