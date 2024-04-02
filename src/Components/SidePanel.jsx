import React, { useState } from 'react';

import { FaRegCompass } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";

function SidePanel({ videos, chanelname, setChanelname }) {
  const [activeChannel, setActiveChannel] = useState(null);

  // Get unique channel names
  const uniqueChannels = Array.from(new Set(videos.map(video => video.channelName)));

  // Handle channel name click
  const handleChannelClick = (channelName) => {
    // Check if the clicked channel is not one of the non-channel items
    if (!['Home', 'Explore', 'Watch Later', 'Library', 'History', 'Report History', 'Help'].includes(channelName)) {
      // Toggle between setting the channel name and setting it to 0
      if (activeChannel === channelName) {
        setChanelname(0);
        setActiveChannel(null);
      } else {
        setChanelname(channelName);
        setActiveChannel(channelName);
      }
    }
  };

  // Function to render channel items
  const renderChannelItem = (channelName, icon, label) => {
    return (
      <div className={`hover:bg-orange-600 w-[90%] pl-4 rounded-r-[10px] text-lg p-2 text-white flex gap-2 items-center justify-start duration-500 cursor-pointer ${activeChannel === channelName ? 'bg-gray-800' : ''}`} onClick={() => handleChannelClick(channelName)}>
        {icon}
        <div className='md:block hidden'>{label}</div>
      </div>
    );
  };

  return (
    <div className="w-[15%] h-full fixed z-20 pr-2 flex flex-col gap-3 mb-3 bg-slate-900 overflow-auto scroll-auto no-scrollbar">
      <div className="h-[63%] flex flex-col gap-5 pb-5 bg-slate-900 md:items-start items-center">
        {renderChannelItem('Home', <CiHome />, 'Home')}
        {renderChannelItem('Explore', <FaRegCompass />, 'Explore')}
        {renderChannelItem('Watch Later', <BsClockHistory />, 'Watch Later')}
        {renderChannelItem('Library', <ImBooks />, 'Library')}
        {renderChannelItem('History', <FaHistory />, 'History')}
        {renderChannelItem('Report History', <CiFlag1 />, 'Report History')}
        {renderChannelItem('Help', <CiCircleQuestion />, 'Help')}
      </div>
      <div className="bg-slate-900 h-full w-[90%] text-white pl-4 flex flex-col md:gap-1 gap-8">
        <h1 className="text-base text-orange-600 justify-center mb-2 flex items-center ">SUB</h1>
        {/* Mapping unique channels */}
        {uniqueChannels.map((channelName, index) => (
          <div key={index} className={`flex items-center md:justify-start justify-center gap-2 p-1 rounded-2xl duration-300 w-full hover:bg-orange-600 cursor-pointer ${activeChannel === channelName ? 'bg-orange-600' : ''}`} onClick={() => handleChannelClick(channelName)}>
            <img src={videos.find(video => video.channelName === channelName).channelPicture} alt="" className="h-6 w-6 md:h-7 md:w-7 text-wrap text-center rounded-full cursor-pointer" />
            <div className="hidden md:block">{channelName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidePanel;
