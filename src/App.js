import React, { useEffect, useState } from 'react';
import Cat from './Components/Cat';
import Navbar from './Components/Navbar';
import SidePanel from './Components/SidePanel';
import FeedsSection from './Components/FeedsSection';

function App() {
  const [videos, setVideos] = useState([]); 
  const [category, setCategory] = useState(0); 
  // const [channelName, setChannelName] = useState(0); 
  const [title, setTitle] = useState([]); 
  const [chanelname, setChanelname] = useState(0); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ypapi.formz.in/api/public/videos");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVideos(data);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div className="w-full h-full bg-slate-900  no-scrollbar">
      <Navbar videos={videos}   title={title} setTitle={setTitle}/>
      <div className="flex bg-slate-900">
        <SidePanel  chanelname={chanelname} setChanelname={setChanelname} videos={videos} />
        <div className="w-full h-full  bg-slate-900">
          <Cat category={category} setCategory={setCategory} />
          {/* Pass loading state to FeedsSection */}
          <FeedsSection videos={videos} category={category} title={title} chanelname={chanelname} loading={loading}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
