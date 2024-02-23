import React, { useState } from "react";
import Clue from "../components/Clue";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

export default function EnterCode() {
  const [combination, setCombination] = useState(['2', '3', '8', '4', '9']);
  const correctCombination = ['1', '7', '3', '9', '5'];
  const [codeCracked, setCodeCracked] = useState(false);

  const handleClick = (index) => {
    const newCombination = [...combination];
    newCombination[index] = parseInt(newCombination[index]) === 9 ? '0' : (parseInt(newCombination[index]) + 1).toString();
    setCombination(newCombination);

    if (JSON.stringify(newCombination) === JSON.stringify(correctCombination)) {
      setCodeCracked(true); 
    }
  };

  const checkCombination = () => {
    if (JSON.stringify(combination) === JSON.stringify(correctCombination)) {
      setCodeCracked(true);
    } 
  };

  return (
    <div className='flex justify-center items-center bg-[#222] h-[100vh]'>
      <div className="text-center">
        <div className="fixed top-5 right-5 z-20">
            <Clue />
        </div>
        <h1 className="fixed top-40 left-200 tracking-wide font-apercu text-[#222]">Enter with {correctCombination.join('')}</h1>
        <button className="fixed mt-4 px-4 py-2 top-10 right-2O tracking-wide font-thin font-apercu text-[#222] text-sm transition duration-700 ease-in-out hover:text-white">Not here.</button>
        <button className="fixed px-4 py-2 bottom-40 left-28 tracking-wide font-thin font-apercu text-[#222] text-sm transition duration-700 ease-in-out hover:text-white">Not here, not that simple.</button>
        <motion.div
                variants={fadeIn('down', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}>
        <div className="flex justify-center">
          {combination.map((digit, index) => (
            <div key={index} className="w-16 h-16 m-2 text-[#e9e9e9] flex justify-center items-center text-xl cursor-pointer" onClick={() => handleClick(index)}>
              {digit}
            </div>
          ))}
        </div>
        </motion.div>
        <motion.div
                variants={fadeIn('up', 2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}>
        <button className="mt-4 px-4 py-2 text-white tracking-wide font-apercu font-thin text-sm" onClick={checkCombination}>
          {codeCracked ? 'Code cracked!' : 'Crack the code.'}
          <br /><span className="px-4 py-2 text-[#222] tracking-wide font-apercu font-thin text-sm transition duration-700 ease-in-out hover:text-white">{codeCracked ? 'Portfolio is coming soon' : 'Your mouse/cursor could help.'}</span></button>
          <button class="btn-class-name">
  <span class="back"></span>
  <span class="front"></span>
</button>
          </motion.div>
      </div>
    </div>
  );
}
