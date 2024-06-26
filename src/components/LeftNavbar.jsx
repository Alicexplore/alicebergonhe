import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const LeftNavbar = () => {
   
    return (
        <div className="h-[80px] w-full fixed z-40 mix-blend-exclusion">
            <div className="flex justify-between p-8">
                <div className="flex-row text-md sm:text-2xl">
                    <motion.div
                        variants={fadeIn('down', 1)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0 }}
                        style={{ fill: '#222222', stroke: '#f2f2f2', strokeWidth: '6'}}>
                        <img className="w-[15%] sm:w-[25%]" src="./images/initsvg.svg" alt=""  />
                    </motion.div>
                    <div className="mix-blend-exclusion text-[#F3F0DD]">
                    <motion.div
                        variants={fadeIn('down', 1.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0 }}
                        className="mix-blend-exclusion">
                        <h1>Alice Bergonhe</h1>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('down', 2)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0 }}
                        className="">
                        <h1>Frontend Developer</h1>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('down', 2.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0 }}>
                        <a className="flex items-center hover:opacity-40 transition-opacity ease-in-out duration-700" href="https://www.linkedin.com/in/alicebergonhe/"
                            target="_blank" rel="noopener noreferrer">
                            LinkedIn <span className="-mb-2 ml-1 -rotate-45">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('down', 3)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0 }}>
                        <a className="flex items-center hover:opacity-40 transition-opacity ease-in-out duration-700" href="https://www.github.com/Alicexplore"
                            target="_blank" rel="noopener noreferrer">
                            Github <span className="-mb-2 ml-1 -rotate-45">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </a>
                    </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 3.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0 }}
                        className="hidden sm:block mt-1 cursor-pointer w-[230px] -[42px] ">
                        <iframe
                        style={{ border: '0', width: '230px', height: '42px' }}
                        src="https://bandcamp.com/EmbeddedPlayer/album=2081062495/size=small/bgcol=222222/linkcol=ffffff/artwork=none/track=3626635635/"
                        seamless>
                        </iframe>
                    </motion.div>
                    <div>
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default LeftNavbar;



