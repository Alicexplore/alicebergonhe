import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const Preloader = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    setTimeout(() => {
      setAnimationComplete(true);
      document.body.classList.remove('overflow-hidden');
    }, 4000);
  }, []);

  return (
    <div className='fixed w-full h-full z-50'>
      {!animationComplete && (
        <div className='w-full h-full bg-[#f2f2f2] flex items-center justify-center text-[#222]'>
          <div className='bg-[#222] h-2 w-full max-w-md rotate-180'>
            <motion.div
              className='h-2 bg-[#f2f2f2]'
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 3 }}
            />
          </div>
        </div>
      )}
      {animationComplete && (
        <>
          <div className='fixed top-0 left-0 w-full h-full flex'>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 1000 }}
              transition={{ duration: 1.2 }}
              className='w-1/2 h-full bg-white'
            />
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 1000 }}
              transition={{ duration: 1, delay: 0.3 }}
              className='w-1/2 h-full bg-white'
            />
          </div>
        </>
      )}
      {!animationComplete && (
        <div className='fixed inset-0 flex items-center justify-center p-8 text-[#222] z-50'>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            className='text-2xl'>
                <h1>Alice Bergonhe</h1>
          </motion.div>
          <motion.div
            variants={fadeIn('down', 0.9)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            className='text-2xl'>
                <h1>Frontend Developer</h1>
          </motion.div>
          <motion.div
            variants={fadeIn('down', 1.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            className='text-2xl'>
                <h1>Folio 2024</h1>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Preloader;






