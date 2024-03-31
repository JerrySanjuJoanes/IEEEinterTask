import React from 'react'

import user from '../images/user.jpg';

import { FaRegCompass } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { BsExclamationDiamond } from "react-icons/bs";









function SidePanel() {
  return (
    <div className="w-[15%] h-[100vh] fixed z-20 pr-2 flex flex-col gap-3 mb-3  bg-slate-900 overflow-auto scroll-auto">
        <div className="h-[63%] flex flex-col gap-5 pb-5 bg-slate-900">
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-2 text-white flex gap-2 items-center justify-start duration-500 cursor-pointer"><CiHome />Home</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-2 text-white flex gap-2 items-center justify-start duration-500 cursor-pointer"><FaRegCompass />Explore</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-2 text-white flex gap-2 items-center justify-start duration-500 cursor-pointer"><BsClockHistory />Watch Later</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-2 text-white flex gap-2 items-center justify-start duration-500 cursor-pointer"><ImBooks />Libary</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-2 text-white flex gap-2 items-center justify-start duration-500 cursor-pointer"><FaHistory />History</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-2 text-white flex gap-2 items-center justify-start duration-500 cursor-pointer"><CiFlag1 />Report History</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-2 text-white flex gap-2 items-center justify-start duration-500 cursor-pointer"><CiCircleQuestion />Help</div>
          
        </div>
        <div className=" bg-slate-900 h-full w-[90%] text-white pl-4 flex  flex-col gap-8">
            <h1 className="text-base text-gray-300 mb-2">subcription</h1>
            <div className="flex items-center gap-2"> <img src={user} alt=""  className="h-7 w-7 rounded-full  cursor-pointer"/>sub1</div>
            <div className="flex items-center gap-2"> <img src={user} alt=""  className="h-7 w-7 rounded-full  cursor-pointer"/>sub1</div>
            <div className="flex items-center gap-2"> <img src={user} alt=""  className="h-7 w-7 rounded-full  cursor-pointer"/>sub1</div>
           
        </div>
    </div>
  )
}

export default SidePanel