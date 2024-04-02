import React, { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Card from './Card';

function FeedsSection({ videos, category, loading, title, chanelname }) {

  const [filteredVideos, setFilteredVideos] = useState([]);

  const filterData = () => {
    let filteredData = videos;

    if (category !== 0) {
      filteredData = filteredData.filter(video => video.category === category);
    }

    if (title.length > 0) {
      const titlesToFilter = title.map(t => t.toLowerCase());
      filteredData = filteredData.filter(video => titlesToFilter.includes(video.title.toLowerCase()));
    }


    if (chanelname && chanelname !== 0) {
      filteredData = filteredData.filter(video => video.channelName === chanelname);
    }

    setFilteredVideos(filteredData);
  };

  // Run the filterData function when videos, category, title, or channel name changes
  useEffect(() => {
    filterData();
    console.log(videos);
  }, [videos, category, title, chanelname]);

  return (
    <div className="min-h-[100vh] w-full h-full mt-3 bg-slate-900 flex flex-wrap  justify-center gap-10 text-white pl-[5%]  no-scrollbar">

      {loading && (
        <div className="w-full h-[82vh] flex items-center justify-center  overflow-x-hidden"> 
          <HashLoader color="#EA580C" size={100} />
        </div>
      )}

      
      {!loading && filteredVideos.map((video, index) => (
        <Card key={index} video={video} />
      ))}
    </div>
  );
}

export default FeedsSection;
