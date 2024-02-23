import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

export default function Clue() {
  const [number, setNumber] = useState(2);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleClick = () => {
    if (number === 2) {
      setNumber(1);
      setTooltipText('Your mouse/cursor is the key.');
      setTooltipVisible(true); 
    } else if (number === 1) {
      setNumber(0);
      setTooltipText('The code is hidden somewhere.');
      setTooltipVisible(true);
    } else {
      setNumber(2);
      setTooltipVisible(false); 
    }
  };

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
     <motion.div
        variants={fadeIn('down', 4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0}}>
        <div
            className={`w-8 h-8 rounded-full bg-[#222] text-[#e9e9e9] font-thin font-apercu text-sm flex items-center justify-center border border-[#e9e9e9] cursor-pointer ${number === 0 && 'pointer-events-none'}`}
            onClick={handleClick}
      >
        {number}
      </div>
      {tooltipVisible && (
        <div className="absolute top-0 right-full ml-2 mt-4 p-2 w-[200px]">
          <p className="text-[#e9e9e9] text-xs font-inter ">{tooltipText}</p>
        </div>
      )}
      </motion.div>
    </div>
  );
};

