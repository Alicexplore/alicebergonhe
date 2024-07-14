import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AnimatedSvg = ({ paths, delayPerItem, startDelay }) => {
  const pathAnimation = {
    hidden: { y: '100%' },
    visible: {
      y: '0%',
      transition: {
        delayPerItem: 3,
        duration: 0.3,
        type: 'spring',
        damping: 38,
        stiffness: 70,
        ease: 'easeOut',
      },
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 645.01 299.31"
      fill="currentColor"
      className="transition-colors duration-1000"
      width={700}
    >
      {paths.map((pathData, index) => (
        <motion.path
          key={index}
          d={pathData}
          initial="hidden"
          animate="visible"
          variants={pathAnimation}
          custom={index}
          transition={{
            delay: startDelay + index * delayPerItem,
          }}
        />
      ))}
    </svg>
  );
};

AnimatedSvg.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
  delayPerItem: PropTypes.number.isRequired,
  startDelay: PropTypes.number.isRequired,
};

export default AnimatedSvg;



