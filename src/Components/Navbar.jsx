import React, { useState } from 'react';
import { FaMicrophone } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";


import logo from '../images/logo.png';
import useror from '../images/useror.png';

function Navbar({ videos, setTitle, title }) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false); 

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchText(inputValue);

    
    const filteredResults = videos.filter(video =>
      video.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResults(filteredResults);
    setTitle(filteredResults.map(result => result.title));
    setShowSearchResults(true); 
  };


  const toggleSearchResults = () => {
    setShowSearchResults(!showSearchResults);
  };

  return (
    <div className="w-full h-16 z-50 bg-slate-900 flex gap-5 p-3 sticky top-0  text-white ">
      <div className='rounded-full p-2 bg-slate-800 flex items-center justify-center'><img src={logo} alt="" className="h-10 w-8 " /></div>
      <div className="flex w-full justify-center  items-center gap-5 p-2 pr-10">
        <div className="w-[98%] flex justify-end items-center  gap-5 relative">
          <div className='hover:bg-orange-600 p-3 items-center md:flex justify-center rounded-full duration-500 hidden'><FaMicrophone /></div>
          <div className='flex items-center justify-end  w-[90%] md:w-[40%]'>
            <input
              type="text"
              placeholder="Search..."
              className="rounded-3xl w-full bg-transparent border-transparent bg-slate-600 p-2 ov"
              value={searchText}
              onChange={handleInputChange}
            />
            <div className="p-[1%] rounded-full hover:bg-slate-300 duration-700 flex justify-center items-center" onClick={toggleSearchResults}>
              {!showSearchResults && <RiArrowDropDownLine className='h-8 w-8  text-white' />}
              { showSearchResults && <RiArrowDropUpLine className='h-8 w-8  text-white' />
}
            </div>
          </div>
          {showSearchResults && searchText !== '' && searchResults.length > 0 && (
            <div className="absolute z-50 top-14 bg-slate-900 md:w-[52%] p-2 rounded-lg shadow-lg ">
              {searchResults.map((result, index) => (
                <div key={index} className="p-1 hover:bg-gray-700 cursor-pointer w-[100%] h-[80%] text-sm overflow-auto">
                  {result.title}
                </div>
              ))}
            </div>
          )}
          <div className='flex gap-5'>
            <div className='hover:bg-orange-600 p-3 items-center md:flex justify-center rounded-full duration-500 hidden  '><IoIosNotifications className='h-5 w-5 ' /></div>
            <div className='hover:bg-orange-600 p-3 items-center md:flex justify-center rounded-full duration-500 hidden'><BsCameraVideo className='h-5 w-5' /></div>
          </div>
          <div> <img src={useror} alt="" className="h-8 w-8 rounded-full" /></div>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar;
