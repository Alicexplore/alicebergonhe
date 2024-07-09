import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AnimatedLetters = ({ items, delayPerItem, startDelay }) => {
  const itemAnimation = {
    hidden: { y: '100%' },
    visible: (i) => ({
      y: '0%',
      transition: {
        delay: startDelay + i * delayPerItem,
        duration: 0.3,
        type: 'spring',
        damping: 18, 
        stiffness: 100,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="relative overflow-hidden">
      {items.map((item, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={itemAnimation}
          className="inline-block relative"
          style={{ lineHeight: '1em' }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
};

AnimatedLetters.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  delayPerItem: PropTypes.number.isRequired,
  startDelay: PropTypes.number.isRequired,
};

export default AnimatedLetters;
