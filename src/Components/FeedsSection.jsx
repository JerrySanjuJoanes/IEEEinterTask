import React, { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Card from './Card';

function FeedsSection({ videos, category, loading, title, chanelname }) {
  // Define state to hold filtered data
  const [filteredVideos, setFilteredVideos] = useState([]);

  // Function to filter data based on category, title, and channel name
  const filterData = () => {
    let filteredData = videos;

    // Filter by category if category is selected
    if (category !== 0) {
      filteredData = filteredData.filter(video => video.category === category);
    }

    // Filter by title if title list is not empty
    if (title.length > 0) {
      const titlesToFilter = title.map(t => t.toLowerCase());
      filteredData = filteredData.filter(video => titlesToFilter.includes(video.title.toLowerCase()));
    }

    // Filter by channel name if a channel name is selected and it's not 0
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
      {/* Display loading spinner if loading is true */}
      {loading && (
        <div className="w-full h-[82vh] flex items-center justify-center  overflow-x-hidden"> 
          <HashLoader color="#EA580C" size={100} />
        </div>
      )}

      {/* Render filtered videos if not loading */}
      {!loading && filteredVideos.map((video, index) => (
        <Card key={index} video={video} />
      ))}
    </div>
  );
}

export default FeedsSection;
