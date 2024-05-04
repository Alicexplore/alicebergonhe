import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

function Navbar() {
    return (
        <div className="h-[80px] w-full fixed mix-blend-exclusion z-50">
            <section className="flex justify-between p-8 text-white">
                <div className="flex-row text-2xl">
                <motion.div
                variants={fadeIn('down', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}>
                    <h1>Alice Bergonhe</h1>
                </motion.div>
                <motion.div
                variants={fadeIn('down', 1.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}>
                    <h1>Frontend Developer</h1>
                </motion.div>
                <motion.div
                variants={fadeIn('down', 2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}>
                    <a className="flex items-center" href="https://www.linkedin.com/in/alicebergonhe/" 
                    target="_blank" rel="noopener noreferrer">LinkedIn <span className="-mb-2 ml-1 -rotate-45">
                    <ion-icon  name="arrow-forward-outline"></ion-icon></span></a>
                </motion.div>
                <motion.div
                variants={fadeIn('down', 2.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}>
                    <a className="flex items-center" href="https://www.github.com/Alicexplore" 
                    target="_blank" rel="noopener noreferrer">Github <span className="-mb-2 ml-1 -rotate-45">
                    <ion-icon  name="arrow-forward-outline"></ion-icon></span></a>   
                </motion.div>
                </div>
                <motion.div
                variants={fadeIn('down', 2.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}>
                    <div className="flex text-4xl">
                    <ion-icon name="add-outline"></ion-icon>
                </div>  
                </motion.div>
            </section>
        </div>
    );
  }
  
  export default Navbar;