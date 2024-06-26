import { motion } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const White = () => {
  return (
    <div className="relative w-full grid grid-cols-1 md:grid-cols-2 h-screen text-[#f2f2f2] bg-[#222] overflow-hidden">
      <div className="p-8 sm:mt-[100px] space-y-24 col-span-1 relative z-10 text-right">
        <motion.div
          variants={fadeIn('down', 1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0}}
          className="text-2xl">
            <h1>Projects</h1>
        </motion.div>
        <motion.div
          variants={fadeIn('down', 1.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0}}
          className="text-[3rem] leading-[40px] sm:text-[4rem] font-medium sm:leading-[60px]">
            <p>When ideas becomes reality.</p>
        </motion.div>
        <div className="grid-cols-1">
          <motion.div
            variants={fadeIn('down', 2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0}}
            className="-mt-10 sm:mb-4 text-right">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa, aperiam dolores
                voluptas porro eius nam eaque non ratione earum!
              </p>
          </motion.div>
          <motion.div
            variants={fadeIn('down', 2.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0}}
            className="cursor-pointer mt-6 bg-[#222] hover:bg-transparent text-white hover:transition-all 
            hover:duration-1000 hover:text-[#222] font-bold py-2 px-4 rounded border-[#222] border">
              <button>Contact me</button>
          </motion.div>
        </div>
      </div>
      <div className="">
        <motion.img
          src="./images/clouds5-02.png"
          initial={{ y: "650px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 5.5, delay: 1.2 }}
          viewport={{ once: false }}
          className="absolute w-[200%] right-[-650px] bottom-[-470px] sm:right-[-40px] sm:bottom-[-120px] sm:w-[900px] h-auto z-0 max-w-none"
        />
      </div>
       <motion.img
        src="./images/lightning-C.svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 2, delay: 5, repeat: Infinity, repeatDelay: 13 }}
        className="absolute right-10 top-[-600px] w-[850px] h-auto z-10 max-w-none"
      />
      <motion.img
        src="./images/lightning-D.svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1, delay: 7, repeat: Infinity, repeatDelay: 13 }}
        className="absolute right-10 top-[-600px] w-[850px] h-auto z-10 max-w-none"
      />
      <div className="col-span-1 relative z-10">
      </div>
    </div>
  );
};

export default White;