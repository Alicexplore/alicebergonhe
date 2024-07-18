import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLetters from '../components/AnimatedLetters';

const LogoTooltip = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-center text-md relative transition-colors duration-0">
      <button>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative transition-colors duration-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 992.13 992.13"
            fill="currentColor"
            className="w-[70px] transition-colors duration-0 hover:transition-all hover:duration-2000 hover:rotate-360"
          >
            <path
              d="M483.61,613.09L278.67,146.39h0l103.19-.03c153.49-2.85,293.4,87.58,353.84,228.7l204.97,467.04h0l-113.76-.02c-149.7-1.55-284.36-91.37-343.31-228.99Z"
            ></path>
            <circle cx="251.34" cy="648.65" r="193.9"></circle>
          </svg>
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute top-18 flex flex-col gap-[1px] items-start transition-colors duration-0"
                animate={{ y: 0 }}>
                <a href="https://www.github.com/alicexplore/" target="_blank" className='hover:underline hover:underline-offset-2
                flex text-sm transition-colors duration-0 gap-[2px] uppercase'>
                  <AnimatedLetters
                    items={['g', 'i', 't', 'h', 'u', 'b']}
                    animate={{ y: 0 }}
                    delayPerItem={0.1}
                    startDelay={0.5}
                    exit={{ transition: { type: 'spring', damping: 30, stiffness: 80, ease: 'easeOut', startDelay: 1 } }}
                    className='hover:underline hover:underline-offset-2'
                  />
                </a>
                <a href="https://www.linkedin.com/in/alicebergonhe/" target="_blank">
                <h1 className='flex text-sm transition-colors duration-0 hover:underline hover:underline-offset-2 uppercase'>
                  <AnimatedLetters
                    items={['l', 'i', 'n', 'k', 'e', 'd', 'i', 'n']}
                    animate={{ y: 2 }}
                    delayPerItem={0.1}
                    startDelay={1}
                    exit={{ transition: { type: 'spring', damping: 30, stiffness: 80, ease: 'easeOut', startDelay: 3 } }}
                  />
                </h1>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
};

export default LogoTooltip;
