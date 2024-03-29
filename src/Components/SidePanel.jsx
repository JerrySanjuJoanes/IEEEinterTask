import React from 'react'

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
    <div className="w-[15%] h-[100vh] fixed z-20 pr-2 flex flex-col gap-3 bg  bg-slate-900">
        <div className="h-[60%] flex flex-col gap-5  bg-slate-900">
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-1 text-white flex gap-2 items-center justify-start"><CiHome />Home</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-1 text-white flex gap-2 items-center justify-start"><FaRegCompass />Explore</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-1 text-white flex gap-2 items-center justify-start"><BsClockHistory />Watch Later</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-1 text-white flex gap-2 items-center justify-start"><ImBooks />Libary</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-1 text-white flex gap-2 items-center justify-start"><FaHistory />History</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-1 text-white flex gap-2 items-center justify-start"><CiFlag1 />Report History</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-1 text-white flex gap-2 items-center justify-start"><CiCircleQuestion />Help</div>
            <div className=" hover:bg-orange-600  pl-4 rounded-r-[10px] text-lg p-1 text-white flex gap-2 items-center justify-start"><BsExclamationDiamond />Send FeedBack</div>
        </div>
        <div className=" bg-slate-900 h-full w-[90%] text-white">
            <h1>subcription</h1>
            <div>sub1</div>
            <div>sub1</div>
            <div>sub1</div>
            <div>sub1</div>
            <div>sub1</div>
        </div>
    </div>
  )
}

export default SidePanel