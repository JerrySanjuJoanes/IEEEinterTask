import React from 'react'

function Card() {
  return (
    <div className="h-[290px] w-[350px]  overflow-hidden p-1 ">
        <div className="h-[70%] bg-slate-100 rounded-3xl"></div>
        <p className="pl-3">Title</p>
        <div className="h-full pl-3 text-white">user</div>
    </div>
  )
}

export default Card