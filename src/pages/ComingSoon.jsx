import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const ComingSoon = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(34,34,34)] z-0"></div>  
        <motion.div
            variants={fadeIn('up', 1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0}}
            className="text-lg text-[#f2f2f2] z-50 font-bold bg-[#222] px-14 py-4 "
        >
            <h1>COMING SOON</h1>
        </motion.div>
        <div>
            <img className="absolute block z-10 md:hidden left-[-250px] bottom-[-50px] w-[200%] max-w-none" src="./images/clouds1.png" alt="clouds" />
            <img className="absolute block z-20 md:hidden left-[-250px] bottom-0 w-[200%] max-w-none" src="./images/bird.png" alt="bird" />
        </div>
        
        <div>
            <img className="absolute hidden md:block md:bottom-[-400px] md:left-[-200px] sm:w-full z-10 " src="./images/clouds1.png" alt="clouds" />
            <img className="absolute hidden md:block md:bottom-0 md:left-[-500px] md:z-20 md:w-[100%] md:max-w-none " src="./images/bird.png" alt="bird" />
        </div>
        <motion.img
            src="./images/lightning-D.png"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1.5, delay: 8, repeat: Infinity, repeatDelay: 4 }}
            className="absolute left-10 top-[-800px] w-[850px] h-auto z-10 max-w-none"
        />
    </div>
  );
};

export default ComingSoon;