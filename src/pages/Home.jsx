import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import AnimatedLetters from '../components/AnimatedLetters';
import { fadeIn } from '../fadeIn';

const themes = [

  {
    bg: 'bg-[#122256]',
    text: 'text-[#0037FF]',
    border: 'border-[#0037FF]',
    hoverBg: 'hover:bg-[#0037FF]',
    hoverText: 'hover:text-[#122256]',
  },
    // {
    //     bg: 'bg-[#E1DED9]',
    //     text: 'text-[#222]',
    //     border: 'border-[#222]',
    //     hoverBg: 'hover:bg-[#222]',
    //     hoverText: 'hover:text-[#E1DED9]',
    //   },
    {
        bg: 'bg-[#5E7300]',
        text: 'text-[#F4C500]',
        border: 'border-[#F4C500]',
        hoverBg: 'hover:bg-[#F4C500]',
        hoverText: 'hover:text-[#5E7300]',
      },
      {
        bg: 'bg-[#C98613]',
        text: 'text-[#B73204]',
        border: 'border-[#B73204]',
        hoverBg: 'hover:bg-[#B73204]',
        hoverText: 'hover:text-[#C98613]',
      },
      {
        bg: 'bg-[#7A0545]',
        text: 'text-[#D30000]',
        border: 'border-[#D30000]',
        hoverBg: 'hover:bg-[#D30000]',
        hoverText: 'hover:text-[#7A0545]',
      },
      {
        bg: 'bg-[#EB4818]',
        text: 'text-[#DFBD9A]',
        border: 'border-[#DFBD9A]',
        hoverBg: 'hover:bg-[#DFBD9A]',
        hoverText: 'hover:text-[#EB4818]',
      },
      {
        bg: 'bg-[#E6A0C3]',
        text: 'text-[#EA000C]',
        border: 'border-[#EA000C]',
        hoverBg: 'hover:bg-[#EA000C]',
        hoverText: 'hover:text-[#E6A0C3]',
      },
  {
    bg: 'bg-[#97CABD]',
    text: 'text-[#FEEAC8]',
    border: 'border-[#FEEAC8]',
    hoverBg: 'hover:bg-[#FEEAC8]',
    hoverText: 'hover:text-[#97CABD]',
  },
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
  }, [animating]);

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
    return null; // or a loading spinner if you prefer
  }

  return (
    <div className={`relative w-full h-svh overflow-hidden transition-colors duration-1000 z-10 ${bg} ${text} ${border}`}>
      <div className='z-0'>
      <motion.img
          src="./images/nuagelowqual.png"
          initial={{ y: "549px", opacity: 1 }}
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
          initial={{ y: "-459px", opacity: 1 }}
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
        {/* <motion.img
          src="./images/nuage.svg"
          initial={{ y: "0", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, delay: 1.2 }}
          viewport={{ once: false }}
          className="absolute right-0 bottom-0 w-[20%] z-0 max-w-none"
        /> */}
      <div className="fixed z-50 w-full">
      <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            >
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
              FRONTEND ENGINEER APPRENTICE @QONTO
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
        <div className="col-span-1 hidden md:flex justify-end">
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
            className={`transition-colors duration-1000 ${text}`}>
            <path
              className="cls-1"
              d="M104.1,65.8c-27.47-1.44-49.57-28.7-50.99-62.78-1.42,34.14-23.6,61.43-51.14,62.78v.13c27.54,1.35,49.72,28.65,51.14,62.78,1.42-34.07,23.52-61.34,50.99-62.78v-.14Z"
            />
          </svg>
          </motion.div>
        </div>
        <div className="col-span-10 md:col-span-6 text-center items-center justify-center text-[3.8rem] md:text-[5.5rem]  lg:text-16xl font-bold z-50 leading-[55px] md:leading-[90px]">

          {/* <div className='w-full flex justify-center items-center'>
            <div className={`transition-colors duration-1000 flex h-[140px] md:h-[100px] w-[1px] border-[0.5px] ${border}`} ></div>
          </div> */}

          {/* <motion.div
            variants={fadeIn('down', 1.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            >
             <h2 className="text-sm font-normal leading-10">(HI MY NAME IS ALICE BERGONHE)</h2>
          </motion.div> */}
          <div className='p-6 sm:p-0 col-span-6 justify-center items-center flex'>
            <img className={`transition-colors duration-1000 ${text}`} src="./images/logofinal.svg" alt="" width={700} />
          </div>

          {/* <h1 className='flex justify-center items-center uppercase'>
            <AnimatedLetters
            items={['c','r','e','a','t','i','v','e']}
            delayPerItem={0.1} 
            startDelay={0.5}
            />
          </h1>

          <h1 className='flex justify-center items-center uppercase'>
            <AnimatedLetters
            items={['f','r','o','n','t','e','n','d']}
            delayPerItem={0.1} 
            startDelay={1.1}
            />
          </h1> */}

          {/* <div className='w-full flex justify-center items-center'>
            <div className={`transition-colors duration-1000 flex h-[140px] md:h-[100px] w-[1px] border-[0.5px] ${border}`} ></div>
          </div> */}

          {/* <motion.div
            variants={fadeIn('up', 1.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            >
            <h2 className="text-sm font-normal leading-10">(CREATIVE FRONTEND DEVELOPER)</h2>
            </motion.div> */}
          
         

           <div className="absolute flex flex-col items-center justify-center text-center md:hidden text-sm font-normal mt-10 w-full">
          <motion.div
            variants={fadeIn('up', 2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            >
            <div className='flex mt-2 items-center justify-center'>
            <a
              className="hover:underline gap-1 flex items-center justify-center"
              target="_blank"
              href="https://www.linkedin.com/in/alicebergonhe/ "
            >
               LINKEDIN
              <span className="text-md mt-1 -rotate-45">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </a>
            </div>
            </motion.div>
          </div> 
        </div>
        <div className="col-span-1 hidden md:flex justify-start z-50">
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
            className={`transition-colors duration-1000 ${text}`}>
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
