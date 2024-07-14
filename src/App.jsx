// import { useState } from 'react';
import './App.css';
import './index.css';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';
// import About from './pages/About';

export default function App() {

  return (
    <>
        <div className='h-svh w-full'>
          <div className="snap-y snap-mandatory overflow-y-scroll h-svh flex-grow z-0">
            <CustomCursor />
            {/* <LeftNavbar /> */}
            <div className="snap-always snap-start">
              <Home />
            </div>
            {/* <div className="snap-always snap-start">
                <About />
            </div> */}
            {/* <div className="snap-always snap-start">
                <White />
            </div>
            <div className="snap-always snap-start">
                <Sneakers />
            </div>
            <div className="snap-always snap-start">
                <Sneakers />
            </div>
            <div className="snap-always snap-start">
                <Sneakers />
            </div>
            <div className="snap-always snap-start"> 
                <Contact />
            </div> */}
          </div>
        </div>
      {/* )} */}
    </>
  );
}

