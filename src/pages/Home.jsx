import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  {
    bg: 'bg-[#e2deda]',
    text: 'text-[#222]',
    border: 'border-[#222]',
    hoverBg: 'hover:bg-[#222]',
    hoverText: 'hover:text-[#e2deda]',
  },
  {
    bg: 'bg-[#0e1950]',
    text: 'text-[#1538e5]',
    border: 'border-[#1538e5]',
    hoverBg: 'hover:bg-[#1538e5]',
    hoverText: 'hover:text-[#0e1950]',
  },
  {
    bg: 'bg-[#5E7300]',
    text: 'text-[#FF7FCD]',
    border: 'border-[#FF7FCD]',
    hoverBg: 'hover:bg-[#FF7FCD]',
    hoverText: 'hover:text-[#5E7300]',
  },
  {
    bg: 'bg-[#222]',
    text: 'text-[#e2deda]',
    border: 'border-[#e2deda]',
    hoverBg: 'hover:bg-[#e2deda]',
    hoverText: 'hover:text-[#222]',
  },
  {
    bg: 'bg-[#C60084]',
    text: 'text-[#EA6A00]',
    border: 'border-[#EA6A00]',
    hoverBg: 'hover:bg-[#EA6A00]',
    hoverText: 'hover:text-[#C60084]',
  },
];

const Home = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [transitionCount, setTransitionCount] = useState(0);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 500); // Durée de l'animation (en millisecondes)

      return () => clearTimeout(timer);
    }
  }, [animating]);

  const handleThemeSwitch = () => {
    if (!animating) {
      setAnimating(true);
      setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
      setTransitionCount((prevCount) => prevCount + 1);
    }
  };

  const { bg, text, border, hoverBg, hoverText } = themes[themeIndex];

  return (
    <div className={`relative w-full h-svh overflow-hidden transition-colors duration-1000 ${bg} ${text} ${border}`}>
      <div className="fixed z-50 w-full">
        <div className="flex justify-between p-8 w-full">
          <div className="flex flex-col text-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 992.13 992.13"
              fill="currentColor"
              className={`w-[70px] transition-colors duration-1000 ${text}`}>
              <path
                d="M483.61,613.09L278.67,146.39h0l103.19-.03c153.49-2.85,293.4,87.58,353.84,228.7l204.97,467.04h0l-113.76-.02c-149.7-1.55-284.36-91.37-343.31-228.99Z"
              ></path>
              <circle cx="251.34" cy="648.65" r="193.9"></circle>
            </svg>
          </div>
          <div className="hidden md:flex md:flex-col items-center justify-center text-center ml-10">
            <h1 className="text-xs">
              CURRENTLY FRONTEND ENGINEER APPRENTICE @QONTO
            </h1>
            <a
              className="text-xs hover:underline gap-1 flex items-center"
              target="_blank"
              href="https://www.linkedin.com/in/alicebergonhe/ "
            >
              OPEN TO NEW OPPORTUNITIES
              <span className="text-sm mt-1 -rotate-45">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <button
              className={`transition-colors duration-1000 flex text-xs border-[1px] p-2 ${bg} ${text} ${border} md:${hoverBg} md:${hoverText}`} 
              onClick={handleThemeSwitch}
            >
              ATMOSPHERES
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10 items-center justify-center text-center w-full h-svh z-40">
        <div className="col-span-1 text-center">
          <h1 className="hidden md:block text-xs font-normal">MCMLXXXIV</h1>
        </div>
        <div className="col-span-1 hidden md:flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.18 131.06"
            width="20"
            fill="currentColor"
            className={`transition-colors duration-1000 ${text}`}>
            <path
              className="cls-1"
              d="M104.1,65.8c-27.47-1.44-49.57-28.7-50.99-62.78-1.42,34.14-23.6,61.43-51.14,62.78v.13c27.54,1.35,49.72,28.65,51.14,62.78,1.42-34.07,23.52-61.34,50.99-62.78v-.14Z"
            />
          </svg>
        </div>
        <div className="col-span-10 md:col-span-6 text-center items-center justify-center text-[3.8rem] md:text-9xl font-bold z-10 leading-[55px] md:leading-[110px]">
          <h2 className="text-sm font-normal leading-10">(HI MY NAME IS ALICE)</h2>
          <h1>CREATIVE</h1>
          <h1>FRONTEND</h1>
          <h2 className="text-sm font-normal leading-10">(DEVELOPER)</h2>

          <div className="flex flex-col items-center justify-center text-center md:hidden text-xs font-normal">
            <h1 className="">
              CURRENTLY FRONTEND ENGINEER APPRENTICE @QONTO
            </h1>
            <a href=""></a>
            <a
              className="hover:underline gap-1 flex items-center"
              target="_blank"
              href="https://www.linkedin.com/in/alicebergonhe/ "
            >
              OPEN TO NEW OPPORTUNITIES
              <span className="text-sm mt-1 -rotate-45">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-1 hidden md:flex justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.18 131.06"
            width="20"
            fill="currentColor"
            className={`transition-colors duration-1000 ${text}`}>
            <path
              className="cls-1"
              d="M104.1,65.8c-27.47-1.44-49.57-28.7-50.99-62.78-1.42,34.14-23.6,61.43-51.14,62.78v.13c27.54,1.35,49.72,28.65,51.14,62.78,1.42-34.07,23.52-61.34,50.99-62.78v-.14Z"
            />
          </svg>
        </div>
        <div className="col-span-1 text-center">
          <h1 className="hidden md:block text-xs font-normal">CODE PASSIONATE &<br />DESIGN ENTHUSIAST</h1>
        </div>
        <div className="absolute w-full flex bottom-[40px] justify-center text-center items-center">
          <h1
            className={`transition-colors duration-1000 flex text-xs border-[1px] p-2 ${text} ${border}`}>
            NEW PORTFOLIO COMING VERY SOON
          </h1>
        </div>
      </div>

      <AnimatePresence>
        {animating && (
          <motion.div
            key={transitionCount}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 transition-colors duration-1000 ${(themeIndex + 1) % themes.length}`}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
