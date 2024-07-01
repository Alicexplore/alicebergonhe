import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const ComingSoon = () => {
  return (
    <div className="relative w-full h-svh flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(34,34,34)] z-0"></div> 
        {/* <div className="flex-row text-2xl sm:text-2xl fixed left-0 top-0 z-50 mix-blend-exclusion p-8 text-white">
                    <motion.div
                        variants={fadeIn('down', 1)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0 }}
                        style={{ fill: '#222222', stroke: '#f2f2f2', strokeWidth: '6'}}>
                        <img className="w-[20%] md:w-[25%]" src="./images/initsvg.svg" alt="logo"/>
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
                    </div>
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
                    <motion.div
                        variants={fadeIn('down', 3.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0 }}
                        className="absolute w-[100px] sm:w-[230px] mt-2 cursor-pointer">
                        <iframe
                        style={{ border: '0', width: '230px', height: '42px' }}
                        src="https://bandcamp.com/EmbeddedPlayer/album=2081062495/size=small/bgcol=222222/linkcol=ffffff/artwork=none/track=3626635635/"
                        seamless>
                        </iframe>
                    </motion.div>
                    <div>
                    </div>  */}
                {/* </div> */}
                <div className="flex flex-col gap-4 z-50 top-0 left-0 p-6 md:p-8 absolute">
                    {/* <motion.div
                        variants={fadeIn('down', 1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0}}>
                    <div className="flex items-center justify-center px-[30px] md:px-18 h-full text-[#f2f2f2] bg-[#303030] border-[#575757] border-[1px]">
                        <div className="flex py-[4px] border-r-[1px] border-[#575757] text-xl text-left ">
                            <div className="mt-1">
                                <ion-icon name="alert-circle"></ion-icon>
                            </div>                     
                        </div>
                        <div className="flex-1 text-left text-[0.8rem] md:px-[10px] tracking-tight font-normal">
                            Portfolio Coming Soon
                        </div>
                    </div>
                    </motion.div>  */}

                    <motion.div
                        variants={fadeIn('down', 1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0}}>
                    <div className="flex">
                        <div className="flex w-[42px] h-[42px] bg-[#303030] border-[#575757] border-[1px] items-center text-center justify-center">
                            <div className="flex text-xl text-[#D3D3D2]">
                                <ion-icon name="alert-circle"></ion-icon>
                            </div> 
                        </div>
                        <div className="flex font-normal tracking-tight text-[0.8rem] w-[188.5px] h-[42px] text-white bg-[#303030] border-[#575757] border-b-[1px] border-t-[1px] border-r-[1px] items-center text-left">
                            <h1 className="px-[10px]">Portfolio Coming Soon</h1>
                        </div>
                    </div>
                    </motion.div> 
        
                    <motion.div
                        variants={fadeIn('down', 1.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0 }}
                        className="w-[100px] sm:w-[230px]">
                        <iframe
                        style={{ border: '0', width: '230px', height: '42px' }}
                        src="https://bandcamp.com/EmbeddedPlayer/album=2081062495/size=small/bgcol=222222/linkcol=ffffff/artwork=none/track=3626635635/"
                        seamless>
                        </iframe>
                    </motion.div>
                </div>
    
                <div>
                    <img className="absolute block z-10 md:hidden left-[-250px] bottom-[-50px] w-[200%] max-w-none" src="./images/clouds1.png" alt="clouds" />
                    <img className="absolute block z-20 md:hidden left-[-250px] bottom-0 w-[200%] max-w-none" src="./images/bird.png" alt="bird" />
                </div>
        
                <div>
                    <img className="absolute hidden md:block md:bottom-[-600px] md:left-[-200px] md:w-[120%] md:z-10 md:max-w-none" src="./images/clouds1.png" alt="clouds" />
                    <img className="absolute hidden md:block md:bottom-[-60px] md:left-[-500px] md:z-20 md:w-[120%] md:max-w-none " src="./images/bird.png" alt="bird" />
                </div>
                <motion.img
                    src="./images/lightning-A.png"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1.5, delay: 3, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute hidden sm:block left-10 top-[-800px] w-[850px] h-auto z-10 max-w-none"
                />
                <motion.img
                    src="./images/lightning-D.png"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1.5, delay: 5, repeat: Infinity, repeatDelay: 4 }}
                    className="absolute left-10 top-[-800px] w-[850px] h-auto z-10 max-w-none"
                />
                <motion.img
                    src="./images/lightning-C.png"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1.5, delay: 7, repeat: Infinity, repeatDelay: 6 }}
                    className="absolute right-[-120px] top-[-950px] w-[850px] h-auto z-10 max-w-none"
                />

      {/* <div className="absolute z-50 p-8">
      <motion.div
            variants={fadeIn('up', 1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0}}
            className="text-xl px-20 text-[#f2f2f2] z-50 font-bold bg-[#222] md:px-56 py-4 "
        >
            <h1>COMING SOON</h1>
        </motion.div>
      </div> */}
      {/* <div className="absolute center-0 z-50 bottom-0 md:right-0 p-8">
      <motion.div
            variants={fadeIn('up', 1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0}}
            className="text-xl center-0 bottom-0 md:right-O text-[#222] z-50 font-bold bg-[#E9EAD5] px-14 py-4 "
        >
            <h1>COMING SOON</h1>
        </motion.div>
      </div> */}
      
    </div>
  );
};

export default ComingSoon;