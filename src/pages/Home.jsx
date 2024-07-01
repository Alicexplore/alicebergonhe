import { motion } from "framer-motion";
import ScrollDown from '../components/ScrollDown';

const Home = () => {
  return (
  <div className="relative w-full h-svh flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#222] z-0"></div>
    <motion.img
      src="./images/clouds1.png"
      initial={{ y: "800px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 4, delay: 0 }}
      viewport={{ once: false }}
      className="absolute hidden sm:block sm:left-[-360px] sm:bottom-[-300px] sm:w-[110%] h-auto z-0 max-w-none"
    />
    <motion.img
      src="./images/bird.png"
      initial={{ y: "800px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 6, delay: 0 }}
      viewport={{ once: false }}
      className="absolute hidden sm:block sm:left-[-290px] sm:bottom-[-30px] sm:w-[110%] h-auto z-20 max-w-none"
    />
    
    <div className="absolute block left-[-700px] bottom-0 w-[410%] sm:hidden">
        <img src="./images/bird.png" alt="Bird" />
    </div>
    
     <motion.img
        src="./images/lightning-A.png"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1.5, delay: 5, repeat: Infinity, repeatDelay: 3 }}
        className="absolute hidden sm:block left-10 top-[-800px] w-[850px] h-auto z-10 max-w-none"
      />
      <motion.img
        src="./images/lightning-C.png"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1.5, delay: 8.5, repeat: Infinity, repeatDelay: 6 }}
        className="absolute hidden sm:block right-[-120px] top-[-950px] w-[850px] h-auto z-10 max-w-none"
      />
      <motion.img
        src="./images/lightning-D.png"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.3, 0.4, 0.6], duration: 1.5, delay: 9, repeat: Infinity, repeatDelay: 4 }}
        className="absolute hidden sm:block left-10 top-[-800px] w-[850px] h-auto z-10 max-w-none"
      />
      <section className="z-20 flex flex-col items-center justify-center mix-blend-exclusion">
        <ScrollDown />
      </section>
    </div>
  );
};

export default Home;