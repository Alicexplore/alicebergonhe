import { motion } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const Menu = () => {

  return (
    <div className='fixed right-0 top-0 z-50 p-10 mt-4'>
      <motion.div
        variants={fadeIn('down', 1.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0}}
        >
        <div className='flex gap-2'>
          <a href="#About" className="w-3 h-3 sm:w-4 sm:h-4 bg-[#F3F0DD] hover:opacity-40 transition-opacity ease-in-out duration-700"></a>
          <a href="#About" className="w-3 h-3 sm:w-4 sm:h-4 bg-[#F3F0DD] hover:opacity-40 transition-opacity ease-in-out duration-700"></a>
          <a href="#About" className="w-3 h-3 sm:w-4 sm:h-4 bg-[#F3F0DD] hover:opacity-40 transition-opacity ease-in-out duration-700"></a>
          <a href="#About" className="w-3 h-3 sm:w-4 sm:h-4 bg-[#F3F0DD] hover:opacity-40 transition-opacity ease-in-out duration-700"></a>
          <a href="#About" className="w-3 h-3 sm:w-4 sm:h-4 bg-[#F3F0DD] hover:opacity-40 transition-opacity ease-in-out duration-700"></a>
         </div>    
      </motion.div>
    </div>
  );
};

export default Menu;

