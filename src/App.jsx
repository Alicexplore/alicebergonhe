// import { useState } from 'react';
import './App.css';
import './index.css';
import Home from './pages/Home';
// import About from './pages/About';
// import White from './pages/White';
// import Contact from './pages/Contact';
// import Sneakers from './pages/Sneakers';
// import LeftNavbar from './components/LeftNavbar';
import CustomCursor from './components/CustomCursor';
// import Spinner from './components/Spinner';
// import Preloadere from './components/Preloadere';

export default function App() {
//   const [loaded, setLoaded] = useState(false);

//   const handleLoad = () => {
//     setLoaded(true);
//   };

  return (
    <>
      {/* {!loaded && <Preloadere onLoad={handleLoad} />}
      {loaded && ( */}
        <div className='h-svh w-full'>
          {/* <div className="snap-y snap-mandatory overflow-y-scroll h-svh flex-grow z-0"> */}
            <CustomCursor />
            {/* <LeftNavbar /> */}
            {/* <div className="snap-always snap-start"> */}
                <Home />
            {/* </div> */}
            {/* <div className="snap-always snap-start">
                <About />
            </div>
            <div className="snap-always snap-start">
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
          {/* </div> */}
        </div>
      {/* )} */}
    </>
  );
}

