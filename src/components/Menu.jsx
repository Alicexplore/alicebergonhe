import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const menuVariants = {
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  closed: {
    y: '100%',
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
        <motion.div
          variants={fadeIn('down', 1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0}}
          className="p-8 focus:outline-none z-50 fixed right-0 mix-blend-exclusion mt-2 "
          >              
      <button
        onClick={toggleMenu}
        className="hover:-rotate-45 transition duration-700"
      >
        {isOpen ? (
          <svg
            className="w-9 h-9 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-9 h-9 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        )}
      </button>
      </motion.div> 
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#222] flex items-center justify-center z-40"
          >
            <motion.ul className="text-center text-[#f2f2f2] space-y-4 text-3xl font-extralight items-center justify-center">
            <div className="flex flex-col items-center justify-center h-screen">
            <ul className="flex flex-col text-center justify-center">
                <motion.li
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="mb-4"
                >
                    <h1 className='flex justify-center items-center gap-2'>Home
                        <span className="-mb-3 -rotate-45">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>
                    </h1>           
                </motion.li>
                <motion.li
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="mb-4"
                >
                    <h1 className='flex justify-center items-center gap-2'>About
                        <span className="-mb-3 -rotate-45">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>
                    </h1>
                </motion.li>
                <motion.li
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="mb-4"
                >
                    <h1 className='flex justify-center items-center gap-2'>Projects
                        <span className="-mb-3 -rotate-45">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>
                    </h1>           
                </motion.li>
                <motion.li
                    variants={fadeIn('up', 0.8)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="mb-4"
                >
                    <h1 className='flex justify-center items-center gap-2'>Contact
                        <span className="-mb-3 -rotate-45">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>
                    </h1>           
                </motion.li>
            </ul>
        </div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence> 
    </div>
  );
};

export default Menu;

