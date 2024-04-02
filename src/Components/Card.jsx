import React from 'react'



function Card({video}) {

  const getTimeDifference = () => {
    const uploadedDate = new Date(video.uploadedDateTime);
    const currentDate = new Date();

    //
    const difference = currentDate.getTime() - uploadedDate.getTime();

   
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    
    return `${days} days`;
  };

  return (
    <div className="h-[320px] md:w-[350px] w-[285px] overflow-hidden p-1 hover:bg-gray-700 rounded-2xl duration-500 hover:shadow-sm hover:shadow-orange-600 cursor-pointer">
        <div className='relative'>
            <img className="h-[70%] bg-slate-100 rounded-3xl overflow-hidden " src={video.thumbnail} alt="" />
            <p className=" absolute top-3 right-3 bg-slate-400 p-1 rounded-xl opacity-70 text-sm">{video.duration}</p>
        </div>
        <p className="pl-5 pt-3">{video.title}</p>
        <div className="h-full pl-3 text-white">
          <div className="flex items-center p-1 gap-2">
            <img src={video.channelPicture} alt=""  className="h-10 w-10 rounded-full"/>
            <div>
            <p>{video.channelName}</p>
            <p className="text-[10px] flex gap-2 text-gray-300">
               <p>{video.views}</p>
               <p>{getTimeDifference()}</p>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card