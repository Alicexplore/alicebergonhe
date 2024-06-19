import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const menuVariants = {
  open: {
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    y: '100%',
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
       <motion.div
          variants={fadeIn('down', 6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0}}
          className="p-8 focus:outline-none z-50 fixed right-0 mix-blend-exclusion"
          >              
      <button
        onClick={toggleMenu}
        className=""
      >
        {isOpen ? (
          <svg
            className="w-8 h-8 text-white"
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
            className="w-8 h-8 text-white"
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
            className="fixed inset-0 bg-[#f2f2f2] flex items-center justify-center z-40"
          >
            <motion.ul className="text-center text-[#222] space-y-6 text-7xl">
              <motion.li
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Home
              </motion.li>
              <motion.li
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                About
              </motion.li>
              <motion.li
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Projects
              </motion.li>
              <motion.li
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Contact
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;

