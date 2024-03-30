import React from 'react'

import thumnail from '../images/Thumnail.jpg'

function Card() {
  return (
    <div className="h-[290px] w-[350px]  overflow-hidden p-1 hover:bg-gray-700 rounded-2xl duration-500">
        <div >
            <img className="h-[70%] bg-slate-100 rounded-3xl overflow-hidden" src={thumnail} alt="" />
        </div>
        <p className="pl-3">Title</p>
        <div className="h-full pl-3 text-white">user</div>
    </div>
  )
}

export default Card