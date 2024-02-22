import React, { useState } from "react";
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
            <motion.div
                variants={fadeIn('right', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}
                className='fixed top-10 left-10 grid grid-cols-1 text-left gap-y-2'>
                    <img src="/logo/logo-portfolio.svg" alt="" width={123}/>
                    <motion.div
                        variants={fadeIn('up', 2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0}}>
                        <h3 className="text-[#e9e9e9] tracking-wide font-apercu font-thin text-xs">Portfolio coming soon</h3>
                    </motion.div>
            </motion.div>
        <h1 className="fixed top-40 left-200 tracking-wide font-apercu text-[#222]">Enter with {correctCombination.join('')}</h1>
        <button className="fixed mt-4 px-4 py-2 top-10 right-2O tracking-wide font-thin font-apercu text-[#222] text-sm transition duration-700 ease-in-out hover:text-white">Not that simple, but remember, <br />your mouse/cursor knows everything.</button>
        <div className="flex justify-center">
          {combination.map((digit, index) => (
            <div key={index} className="w-16 h-16 m-2 text-[#e9e9e9] flex justify-center items-center text-xl cursor-pointer" onClick={() => handleClick(index)}>
              {digit}
            </div>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 text-white tracking-wide font-apercu font-thin text-sm" onClick={checkCombination}>
          {codeCracked ? 'Code cracked!' : 'Crack the code.'}
          <br /><span className="px-4 py-2 text-[#222] tracking-wide font-apercu font-thin text-sm transition duration-700 ease-in-out hover:text-white">{codeCracked ? 'Portfolio is coming soon' : 'Your mouse/cursor could help.'}</span></button>
      </div>
    </div>
  );
}
