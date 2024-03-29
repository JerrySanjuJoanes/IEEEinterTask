import './App.css';
import Cat from './Components/Cat';
import Navbar from './Components/Navbar';
import SidePanel from './Components/SidePanel';
import FeedsSection from './Components/FeedsSection';

function App() {
  return (
    <div className="w-full h-full bg-slate-900">
      <Navbar/>
      <div className="flex">
        <SidePanel/>
        <div className='w-full h-full relative'>
          <Cat className=""/>
          <FeedsSection />
        </div>
      </div>
    </div>
  );
}

export default App;
