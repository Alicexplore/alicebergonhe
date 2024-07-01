import { motion } from 'framer-motion';
import { fadeIn } from '../fadeIn';

const About = () => {
  return (
    <div id="About" className="relative h-svh w-full grid grid-cols-1 md:grid-cols-2 h-svh text-[#f2f2f2] bg-[#222] overflow-hidden">
      <motion.img
        src="./images/clouds1.png"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
        className="absolute bottom-[-160px] left-[-40px] w-[900px] h-auto z-0"
      />
       <motion.img
        src="./images/lightning-A.svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1, delay: 5, repeat: Infinity, repeatDelay: 13 }}
        className="absolute left-[-120px] top-[-950px] w-[850px] h-auto z-10 max-w-none"
      />
      <div className="col-span-1 relative z-10">
      </div>
      <div className="p-8 sm:mt-[100px] space-y-24 col-span-1 relative z-10">
        <motion.div
          variants={fadeIn('down', 1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0}}
          className="text-2xl">
            <h1>01 About</h1>
        </motion.div>
        <motion.div
          variants={fadeIn('down', 1.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0}}
          className="text-[3rem] leading-[40px] sm:text-[3rem] font-medium sm:leading-[52px]">
            <p>I build intuitive and visually appealing interfaces that<br />users love to interact with.</p>
        </motion.div>
        <div className="grid-cols-1">
          <motion.div
            variants={fadeIn('down', 2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0}}
            className="text-justify -mt-10 sm:mb-4">
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
            className="cursor-pointer mt-6 bg-[#222] hover:bg-[#f2f2f2] text-[#f2f2f2] hover:transition-all 
            hover:duration-1000 hover:text-[#222] font-bold py-2 px-4 rounded border-[#f2f2f2] border hover:border-[#f2f2f2]">
              <button>Contact me</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
