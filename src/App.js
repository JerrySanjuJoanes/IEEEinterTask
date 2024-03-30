import React, { useEffect, useState } from 'react';
import './App.css';
import Cat from './Components/Cat';
import Navbar from './Components/Navbar';
import SidePanel from './Components/SidePanel';
import FeedsSection from './Components/FeedsSection';

function App() {
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/videos");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when component mounts
  }, []); // Empty dependency array ensures useEffect only runs once on component mount

  return (
    <div className="w-full h-full bg-slate-900">
      <Navbar />
      <div className="flex">
        <SidePanel />
        <div className="w-full h-full relative">
          <Cat className="" />
          <FeedsSection  /> {/* Pass fetched videos as prop */}
        </div>
      </div>
    </div>
  );
}

export default App;
