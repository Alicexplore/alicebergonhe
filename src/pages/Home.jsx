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
    <div className={`relative w-full h-svh overflow-hidden transition-colors duration-1000 z-10 ${bg} ${text} ${border}`}>
      <div className='z-0'>
        <motion.img
          src="./images/cloud-bottom.webp"
          initial={{ y: "547px", opacity: 0 }}
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
          src="./images/cloud-top.webp"
          initial={{ y: "-457px", opacity: 0 }}
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

      <div className="grid grid-cols-10 items-center justify-center text-center w-full h-svh z-50">
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
            <AnimatedSvg/>
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