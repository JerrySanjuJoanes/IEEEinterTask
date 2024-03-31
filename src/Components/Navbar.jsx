import React from 'react'
import { FaMicrophone } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";



import user from '../images/user.jpg';

function Navbar() {
  return (
    <div className="w-full h-16  bg-slate-900 flex  gap-5 p-3 sticky top-0 z-10 text-white">
        <div>log</div>
       <div className="flex w-full justify-center  items-center gap-5 p-2 pr-10">
            <div className="w-[98%] flex justify-end items-center  gap-5">
                <div className='hover:bg-orange-600 p-3 items-center flex justify-center rounded-full duration-500'><FaMicrophone /></div>
                <input type="text" placeholder="Search..."  className="rounded-3xl w-[40%] bg-transparent border-transparent   bg-slate-600 p-2"/>
                <div className='flex gap-5'>
                    <div className='hover:bg-orange-600 p-3 items-center md:flex justify-center rounded-full duration-500  '><IoIosNotifications  className='h-5 w-5'/></div>
                    <div className='hover:bg-orange-600 p-3 items-center flex justify-center rounded-full duration-500'><BsCameraVideo       className='h-5 w-5'/></div>
                </div>
                <div> <img src={user} alt=""  className="h-8 w-8 rounded-full"/></div>
            </div>
       </div>
       
        
    </div>
  )
}

export default Navbar