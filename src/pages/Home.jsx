import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSvg from '../components/AnimatedSvg';
import { fadeIn } from '../fadeIn';

const themes = [

      {
        bg: 'bg-[#122256]',
        text: 'text-[#0037FF]',
        border: 'border-[#0037FF]',
        hoverBg: 'hover:bg-[#0037FF]',
        hoverText: 'hover:text-[#122256]',
      },
      {
        bg: 'bg-[#C98613]',
        text: 'text-[#c62a00]',
        border: 'border-[#c62a00]',
        hoverBg: 'hover:bg-[#c62a00]',
        hoverText: 'hover:text-[#C98613]',
      },
      {
        bg: 'bg-[#4c5602]',
        text: 'text-[#ffb600]',
        border: 'border-[#ffb600]',
        hoverBg: 'hover:bg-[#ffb600]',
        hoverText: 'hover:text-[#4c5602]',
      },
      {
        bg: 'bg-[#42012b]',
        text: 'text-[#d30000]',
        border: 'border-[#d30000]',
        hoverBg: 'hover:bg-[#d30000]',
        hoverText: 'hover:text-[#42012b]',
      },
      {
        bg: 'bg-[#ddb19b]',
        text: 'text-[#e5350c]',
        border: 'border-[#e5350c]',
        hoverBg: 'hover:bg-[#e5350c]',
        hoverText: 'hover:text-[#dfbd9a]',
      },
      {
        bg: 'bg-[#647c89]',
        text: 'text-[#FEEAC8]',
        border: 'border-[#FEEAC8]',
        hoverBg: 'hover:bg-[#FEEAC8]',
        hoverText: 'hover:text-[#647c89]',
      },
      {
        bg: 'bg-[#e2aeb3]',
        text: 'text-[#c60042]',
        border: 'border-[#c60042]',
        hoverBg: 'hover:bg-[#c60042]',
        hoverText: 'hover:text-[#e2aeb3]',
      }
];

const svgPaths = [
  "M531.39,267.29v32.02h0c28.63,0,51.83-23.21,51.83-51.83v-31.33h-.69c-28.24,0-51.14,22.9-51.14,51.14Z",
  "M644.31,216.15c-28.24,0-51.14,22.9-51.14,51.14v32.02h0c28.63,0,51.83-23.21,51.83-51.83v-31.33h-.69Z",
  "M51.83,35.72V4.39h-.69C22.9,4.39,0,27.29,0,55.53v32.02h0c28.63,0,51.83-23.21,51.83-51.83Z",
  "M113.62,35.72V4.39h-.69c-28.24,0-51.14,22.9-51.14,51.14v32.02c28.63,0,51.83-23.21,51.83-51.83Z",
  "M292.15,0l-89.93,47.98c-16.8,8.96-27.29,26.45-27.29,45.49v119.58s.33,22.76-4.44,35.86c-2.26,6.21-4.62,13.95-16.31,18.71-5.08,1.64-12.05,2.67-15.5,2.67-38.37,0-69.53-27.2-80.25-65.94-10.34-37.39-.19-74.9,35.62-93.07,3.9-2,8.92-3.18,13.99-3.6,16.99-1.4,31.85,19.75,33.94,38.63,1.02,9.25,7.56,7.24,13.23,1.44,12.15-12.44,16.65-31.56,6.47-45.8-11.35-15.88-36.13-11.72-49.74-6.58-5.77,2.18-12.85,4.74-20.76,8.96C52.85,124.74-2.74,166.28,12.35,230.54c1.32,5.63,3.95,10.89,6.92,15.72,36.53,59.49,109.35,38.24,128.24,30.91,14.31-5.55,40.76-19.53,54.16-28.9,28.27-19.77,27.87-53.06,27.87-53.08v-46.2l7.98-4.28c-.39,31.13,12.8,60.79,54.63,55.25v-101.82s.03,0,.05,0v-24.11s-.04.06-.05.1V0ZM237.54,137.31l-8.01,4.29V40.83l8.01-4.28v100.76Z",
  "M571.36,185.17c14.73-39.6-10.89-84.71-52.8-82.37-2.67.15-7.15.39-7.38-1.63.14-1.37,1.62-2.38,2.86-3.19,17.06-11.17,33.51-23.31,43.15-42.26,8.34-16.38-.08-36.8-15.45-46.51-10.45-6.6-28.4-5.21-39.1,1.51-19.62,12.32-35.29,35.56-40.04,47.18-1.68-5.71-2.33-7.97-3.39-11.15-6.32-19.02-15.68-30.51-28.32-35.83-6.91-2.55-15.25-2.54-22.08.82,0,0-46.18,21.17-59.27,31.7-15.56,12.52-20.31,22.86-22.14,27.3-6.15,15.66-8.56,32.53-5.43,47.81,2.75,13.42,14.7,24.37,28.2,25.82,14.15,1.52,34.28-12.78,38.2-26.96,1.25-4.52.15-6.99-4.62-8.4-5.4-1.59-10.99-3.33-15.73-6.25-13.47-8.32-23-22.95-22.69-39.6.11-5.81,4.93-13.29,11.27-16.56,8.16-4.21,19.4-5.22,29.9,2.19,19.63,13.85,25.81,36.66,26.68,60.07.79,21.49-6.26,46.2-15.16,50.43,0,0-54.42,27.53-71.62,38.34-13.52,8.49-22.56,28.67-25.12,44.5-2.99,18.45,6.75,37.55,20.58,42.58,16.46,5.98,33.84.25,44.17-13.74,4.82-6.53,5.15-9.51-3.54-12.82-15.87-6.05-31.84-12.75-38.15-34.5-1.94-6.71.85-17.35,4.59-20.38,5.9-4.77,11.05-6.08,17.33-3.19,7.54,3.48,19.39,11.75,26.22,16.6,17.82,12.66,34.91,26.19,53.78,37.52,17.23,10.35,32.4,4.79,40.58,1.16,0,0,61.18-33.02,81.67-43.85,15.35-8.12,20.77-20.71,22.87-26.34ZM463.12,115.65c.31-12.81.68-21.54,1.11-34.35.3-9.06,4.53-24.58,10.84-31.19,6.52-6.83,16.37-8.18,24.12-4.25,7.93,4.02,11.81,15.13,11.17,23.4-.62,12.56-6.65,22.12-13.17,28.66-8.69,8.72-17.82,16.11-28.1,22.75-1.71,1.1-3.3,2.46-4.97,1.19-.83-.63-1.02-4.79-.99-6.2ZM526.95,202.4c-.71,11.52-7.62,18.94-15.58,23.24-24.43,13.23-101.39-51.96-112.01-58.79,19.79-10.6,32.63-17.28,50.7-26.96,18.82-10.21,37.41-8.23,53.04,6.32,15.14,14.09,25.13,35.29,23.84,56.19Z"
];


const Home = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [transitionCount, setTransitionCount] = useState(0);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const storedThemeIndex = localStorage.getItem('themeIndex');
    if (storedThemeIndex !== null) {
      setThemeIndex(parseInt(storedThemeIndex));
    }
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [animating, transitionCount]);

  const handleThemeSwitch = () => {
    if (!animating) {
      setAnimating(true);
      const newIndex = (themeIndex + 1) % themes.length;
      setThemeIndex(newIndex);
      setTransitionCount((prevCount) => prevCount + 1);
      localStorage.setItem('themeIndex', newIndex);
    }
  };

  const { bg, hoverBg, text, border, hoverText } = themes[themeIndex];

  if (!themeLoaded) {
    return null; 
  }

  return (
    <div className={`relative w-full h-screen overflow-hidden transition-colors duration-1000 z-10 ${bg} ${text} ${border}`}>
      <div className='z-0'>
        <motion.img
          src="./images/nuagelowqual.png"
          initial={{ y: "549px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            y: {
              type: 'spring',
              damping: 18,
              stiffness: 15,
              duration: 2.5,
              delay: 1
            },
            opacity: {
              duration: 2.5,
              delay: 1
            }
          }}
          viewport={{ once: false }}
          className="absolute w-[300%] right-[-400px] bottom-[-88px] sm:right-[-120px] sm:bottom-[-50px] sm:w-[1100px] h-auto z-0 max-w-none"
        />
        <motion.img
          src="./images/nuagelowqual2.png"
          initial={{ y: "-459px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            y: {
              type: 'spring',
              damping: 18,
              stiffness: 15,
              duration: 2.5,
              delay: 1
            },
            opacity: {
              duration: 2.5,
              delay: 1
            }
          }}
          viewport={{ once: false }}
          className="absolute hidden sm:block sm:left-[-200px] sm:top-[-140px] sm:w-[1100px] h-auto z-0 max-w-none"
        />
      </div>
      <div className="fixed z-50 w-full">
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0}}
        >
          <div className="flex justify-between p-8 w-full">
            <div className="flex flex-col text-md">
              <a
                className="hover:underline gap-1 flex items-center justify-center"
                target="_blank"
                href="https://www.linkedin.com/in/alicebergonhe/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 992.13 992.13"
                  fill="currentColor"
                  className={`w-[70px] transition-colors duration-1000 ${text}`}
                >
                  <path
                    d="M483.61,613.09L278.67,146.39h0l103.19-.03c153.49-2.85,293.4,87.58,353.84,228.7l204.97,467.04h0l-113.76-.02c-149.7-1.55-284.36-91.37-343.31-228.99Z"
                  ></path>
                  <circle cx="251.34" cy="648.65" r="193.9"></circle>
                </svg>
              </a>
            </div>
            <div className="hidden md:flex md:flex-col items-center justify-center text-center ml-10">
              <h1 className="text-xs">
                FRONTEND ENGINEER APPRENTICE @QONTO
              </h1>
              <a
                className="text-xs hover:underline gap-1 flex items-center"
                target="_blank"
                href="https://www.linkedin.com/in/alicebergonhe/"
              >
                OPEN TO NEW OPPORTUNITIES
                <span className="text-sm mt-1 -rotate-45">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                className={`transition-colors duration-1000 flex text-xs border-[1px] p-2 ${hoverBg} ${text} ${border} ${hoverText}`}
                onClick={handleThemeSwitch}
              >
                ATMOSPHERES
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-10 items-center justify-center text-center w-full h-screen z-50">
        <div className="col-span-1 text-center z-50">
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
          >
            <h1 className="hidden md:block text-xs font-normal z-50">ALICE BERGONHE</h1>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
          >
            <h1 className="hidden md:block text-xs font-normal">CREATIVE FRONTEND</h1>
          </motion.div>
        </div>
        <div className="col-span-1 hidden md:flex justify-end z-50">
          <motion.div
            variants={fadeIn('', 2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 106.18 131.06"
              width="20"
              fill="currentColor"
              className={`transition-colors duration-1000 ${text}`}
            >
              <path
                className="cls-1"
                d="M104.1,65.8c-27.47-1.44-49.57-28.7-50.99-62.78-1.42,34.14-23.6,61.43-51.14,62.78v.13c27.54,1.35,49.72,28.65,51.14,62.78,1.42-34.07,23.52-61.34,50.99-62.78v-.14Z"
              />
            </svg>
          </motion.div>
        </div>

        <div className="col-span-10 md:col-span-6 text-center items-center justify-center text-[3.8rem] md:text-[5.5rem] lg:text-16xl font-bold z-50 leading-[55px] md:leading-[90px]">
          <div className={`p-6 sm:p-0 col-span-6 justify-center items-center flex max-w-none transition-colors ${text} duration-0`}>
            <AnimatedSvg
              paths={svgPaths}
              animating={animating}
              color={themes[themeIndex].text}
              className={`transition-colors ${text}`}
            />
          </div>
        </div>

        <div className="hidden md:col-span-1 md:flex justify-start z-50">
          <motion.div
            variants={fadeIn('', 2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 106.18 131.06"
              width="20"
              fill="currentColor"
              className={`transition-colors duration-1000 ${text}`}
            >
              <path
                className="cls-1"
                d="M104.1,65.8c-27.47-1.44-49.57-28.7-50.99-62.78-1.42,34.14-23.6,61.43-51.14,62.78v.13c27.54,1.35,49.72,28.65,51.14,62.78,1.42-34.07,23.52-61.34,50.99-62.78v-.14Z"
              />
            </svg>
          </motion.div>
        </div>
        <div className="col-span-1 text-center z-50">
        <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            >
          <h1 className="hidden md:block text-xs font-normal mr-4">CODE PASSIONATE<br />& WEB DESIGN ♥︎</h1>
        </motion.div>
        </div>
        <div className="absolute w-full flex bottom-[40px] justify-center text-center items-center">
        <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            >
          <h1
            className={`transition-colors duration-1000 flex text-xs border-[1px] p-2 ${text} ${border}`}>
            NEW AWESOME PORTFOLIO COMING SOON
          </h1>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;