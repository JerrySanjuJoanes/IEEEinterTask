import React from 'react'
import Cat from './Cat'

function Navbar() {
  return (
    <div className="w-full h-16  bg-slate-900 flex  gap-5 p-3 sticky top-0 z-10 text-white">
        <div>log</div>
       <div className="flex w-full justify-end items-center gap-5 p-2 ">
            <div>mic</div>
            <input type="text" placeholder="Search"  className="rounded-3xl w-[20%] bg-transparent border-transparent  outline-slate-950"/>
            <div>random buuton</div>
            <div>profile </div>
       </div>
       
        
    </div>
  )
}

export default Navbar