import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[#222] z-0"></div>
    <div className="opacity-80">
    <motion.img
      src="./images/clouds4.png"
      initial={{ y: "550px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 4.5, delay: 0.8 }}
      viewport={{ once: false }}
      className="absolute w-[400%] right-[-650px] bottom-[-470px] sm:right-[-230px] sm:w-[100%] h-auto z-0 max-w-none"
    />
    </div> 
    <motion.img
      src="./images/clouds1.png"
      initial={{ y: "800px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 4, delay: 0 }}
      viewport={{ once: false }}
      className="absolute w-[100%] left-[-550px] bottom-[-80px] sm:left-[-360px] sm:bottom-[-300px] sm:w-[110%] h-auto z-0 max-w-none"
    />
    <motion.img
      src="./images/bird-laurel.png"
      initial={{ y: "800px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 6, delay: 0 }}
      viewport={{ once: false }}
      className="absolute w-[100%] left-[-550px] bottom-[-80px] sm:left-[-290px] sm:bottom-[-30px] sm:w-[110%] h-auto z-20 max-w-none"
    />
     <motion.img
        src="./images/lightning-A.svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1, delay: 5, repeat: Infinity, repeatDelay: 13 }}
        className="absolute left-10 top-[-800px] w-[850px] h-auto z-10 max-w-none"
      />
      <motion.img
        src="./images/lightning-B.svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 2, delay: 8, repeat: Infinity, repeatDelay: 13 }}
        className="absolute right-10 top-[-800px] w-[850px] h-auto z-10 max-w-none"
      />
      <motion.img
        src="./images/lightning-C.svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1, delay: 8.5, repeat: Infinity, repeatDelay: 13 }}
        className="absolute right-[-120px] top-[-950px] w-[850px] h-auto z-10 max-w-none"
      />
      <motion.img
        src="./images/lightning-D.svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1, delay: 9, repeat: Infinity, repeatDelay: 15 }}
        className="absolute left-10 top-[-800px] w-[850px] h-auto z-10 max-w-none"
      />
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full z-30">
        <div className="grid grid-cols-1"></div>
        <div className="grid grid-cols-1">
        <div className='flex flex-col gap-2 justify-center items-center z-30 '>
           <h1 className='text-center text-5xl sm:text-[3.6rem] mb-[80px] font-medium leading-[60px] text-[#F3F0DD]'>
           life is too short<br />
             <span className='text-center text-[3.6rem] mb-14 font-medium'>let's talk</span>
           </h1>
           <div className='flex flex-col gap-12 mx-auto'>
           <button className="cursor-pointer bg-[#222] hover:bg-transparent text-white hover:transition-all hover:duration-1000 hover:text-[#222] py-4 sm:px-40 rounded border-[#CBCFBA] hover:border-[#222] border">
               Linkedin
             </button>
             <button className="cursor-pointer bg-[#222] hover:bg-transparent text-white hover:transition-all hover:duration-1000 hover:text-[#222] py-4 sm:px-40 rounded border-[#CBCFBA] hover:border-[#222] border">
               GitHub
             </button>
             <button className="cursor-pointer bg-[#222] hover:bg-transparent text-white hover:transition-all hover:duration-1000 hover:text-[#222] py-4 sm:px-40 rounded border-[#CBCFBA] hover:border-[#222] border">
               Email
             </button>
           </div>
         </div> 
        </div>
    </div>
    </div>
  );
};

export default Contact;




