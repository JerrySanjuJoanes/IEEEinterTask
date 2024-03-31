import React, { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Card from './Card';

function FeedsSection({ videos, category }) {
  // Define state to hold filtered data and loading state
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to filter data based on category
  const filterData = () => {
    setTimeout(() => {
      if (category !== 0) {
        const filteredData = videos.filter(video => video.category === category);
        setFilteredVideos(filteredData);
      } else {
        setFilteredVideos(videos);
      }
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  };

  // Run the filterData function when category changes
  useEffect(() => {
    setLoading(true); // Set loading to true when category changes
    filterData();
  }, [videos, category]);

  return (
   
     <div className="w-full h-full mt-3 bg-slate-900 flex flex-wrap  justify-center gap-10 text-white pl-[5%] ">
      {/* Display loading message while data is being fetched */}
      {loading && <div className="w-full h-[82vh] flex items-center justify-center  overflow-x-hidden"> <HashLoader className='' color="#EA580C" size={100} /></div>}

      {/* Render filtered videos */}
      {!loading && filteredVideos.map((video, index) => (
        <Card key={index} video={video} />
      ))}
    </div>

  );
}

export default FeedsSection;
