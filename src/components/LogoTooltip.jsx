import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          className="w-[70px] transition-colors duration-0"
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <motion.a
                href="https://github.com/alicexplore"
                target="_blank"
                className="flex text-sm transition-colors duration-0 gap-[2px] hover:underline hover:underline-offset-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }} 
              >
                GITHUB
                <span className="text-md mt-[2px] -rotate-45">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/alicebergonhe"
                target="_blank"
                className="flex text-sm transition-colors duration-0 gap-[2px] hover:underline hover:underline-offset-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ transition: { duration: 0.5, delay: 0.6, type: 'spring', damping: 30, stiffness: 80, ease: 'easeOut' } }}
                transition={{ duration: 0.5, delay: 0.6, type:'spring', damping: 30, stiffness: 80, ease: 'easeOut'}}
              >
                LINKEDIN
                <span className="text-md mt-[2px] -rotate-45">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </button>
    </div>
  );
};

export default LogoTooltip;
