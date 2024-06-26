import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const ScrollDown = () => { 
    return (
        <div className="center-0 bottom-0 sm:right-0 p-8 absolute z-10 mix">
            <motion.div
            variants={fadeIn('up', 1.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0}}
            >
            <button className="border-2 border-[#F3F0DD] h-14 w-8 rounded-full">
                <div className="h-full w-full relative p-1.5">
                    <div className="absolute h-4 w-4 bg-[#F3F0DD] rounded-full animate-bounce bottom-1.5"></div>
                </div>
            </button>    
            </motion.div>
        </div>
    );
  }
  
  export default ScrollDown;