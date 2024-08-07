import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AnimatedSvg = ({ startDelay = 0, delayPerItem = 0.5, triggerAnimation }) => {
  const Paths = [
    "M51.83,35.72V4.39h-.69C22.9,4.39,0,27.29,0,55.53v32.02h0c28.63,0,51.83-23.21,51.83-51.83Z",
    "M113.62,35.72V4.39h-.69c-28.24,0-51.14,22.9-51.14,51.14v32.02c28.63,0,51.83-23.21,51.83-51.83Z",
    "M292.15,0l-89.93,47.98c-16.8,8.96-27.29,26.45-27.29,45.49v119.58s.33,22.76-4.44,35.86c-2.26,6.21-4.62,13.95-16.31,18.71-5.08,1.64-12.05,2.67-15.5,2.67-38.37,0-69.53-27.2-80.25-65.94-10.34-37.39-.19-74.9,35.62-93.07,3.9-2,8.92-3.18,13.99-3.6,16.99-1.4,31.85,19.75,33.94,38.63,1.02,9.25,7.56,7.24,13.23,1.44,12.15-12.44,16.65-31.56,6.47-45.8-11.35-15.88-36.13-11.72-49.74-6.58-5.77,2.18-12.85,4.74-20.76,8.96C52.85,124.74-2.74,166.28,12.35,230.54c1.32,5.63,3.95,10.89,6.92,15.72,36.53,59.49,109.35,38.24,128.24,30.91,14.31-5.55,40.76-19.53,54.16-28.9,28.27-19.77,27.87-53.06,27.87-53.08v-46.2l7.98-4.28c-.39,31.13,12.8,60.79,54.63,55.25v-101.82s.03,0,.05,0v-24.11s-.04.06-.05.1V0ZM237.54,137.31l-8.01,4.29V40.83l8.01-4.28v100.76Z",
    "M571.36,185.17c14.73-39.6-10.89-84.71-52.8-82.37-2.67.15-7.15.39-7.38-1.63.14-1.37,1.62-2.38,2.86-3.19,17.06-11.17,33.51-23.31,43.15-42.26,8.34-16.38-.08-36.8-15.45-46.51-10.45-6.6-28.4-5.21-39.1,1.51-19.62,12.32-35.29,35.56-40.04,47.18-1.68-5.71-2.33-7.97-3.39-11.15-6.32-19.02-15.68-30.51-28.32-35.83-6.91-2.55-15.25-2.54-22.08.82,0,0-46.18,21.17-59.27,31.7-15.56,12.52-20.31,22.86-22.14,27.3-6.15,15.66-8.56,32.53-5.43,47.81,2.75,13.42,14.7,24.37,28.2,25.82,14.15,1.52,34.28-12.78,38.2-26.96,1.25-4.52.15-6.99-4.62-8.4-5.4-1.59-10.99-3.33-15.73-6.25-13.47-8.32-23-22.95-22.69-39.6.11-5.81,4.93-13.29,11.27-16.56,8.16-4.21,19.4-5.22,29.9,2.19,19.63,13.85,25.81,36.66,26.68,60.07.79,21.49-6.26,46.2-15.16,50.43,0,0-54.42,27.53-71.62,38.34-13.52,8.49-22.56,28.67-25.12,44.5-2.99,18.45,6.75,37.55,20.58,42.58,16.46,5.98,33.84.25,44.17-13.74,4.82-6.53,5.15-9.51-3.54-12.82-15.87-6.05-31.84-12.75-38.15-34.5-1.94-6.71.85-17.35,4.59-20.38,5.9-4.77,11.05-6.08,17.33-3.19,7.54,3.48,19.39,11.75,26.22,16.6,17.82,12.66,34.91,26.19,53.78,37.52,17.23,10.35,32.4,4.79,40.58,1.16,0,0,61.18-33.02,81.67-43.85,15.35-8.12,20.77-20.71,22.87-26.34ZM463.12,115.65c.31-12.81.68-21.54,1.11-34.35.3-9.06,4.53-24.58,10.84-31.19,6.52-6.83,16.37-8.18,24.12-4.25,7.93,4.02,11.81,15.13,11.17,23.4-.62,12.56-6.65,22.12-13.17,28.66-8.69,8.72-17.82,16.11-28.1,22.75-1.71,1.1-3.3,2.46-4.97,1.19-.83-.63-1.02-4.79-.99-6.2ZM526.95,202.4c-.71,11.52-7.62,18.94-15.58,23.24-24.43,13.23-101.39-51.96-112.01-58.79,19.79-10.6,32.63-17.28,50.7-26.96,18.82-10.21,37.41-8.23,53.04,6.32,15.14,14.09,25.13,35.29,23.84,56.19Z",
    "M531.39,267.29v32.02h0c28.63,0,51.83-23.21,51.83-51.83v-31.33h-.69c-28.24,0-51.14,22.9-51.14,51.14Z",
    "M644.31,216.15c-28.24,0-51.14,22.9-51.14,51.14v32.02h0c28.63,0,51.83-23.21,51.83-51.83v-31.33h-.69Z",
  ];

  const pathAnimation = {
    hidden: { y: '110%' },
    visible: (index) => ({
      y: '0%',
      transition: {
        delay: startDelay + index * delayPerItem,
        duration: 0.4,
        type: 'spring',
        damping: 30,
        stiffness: 80,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 645.01 299.31"
      fill="currentColor"
      className="transition-colors duration-1000"
      width={700}
    >
      {Paths.map((path, index) => (
        <motion.path
          key={index}
          d={path}
          initial="hidden"
          animate={triggerAnimation ? 'visible' : 'hidden'}
          variants={pathAnimation}
          custom={index}
        />
      ))}
    </svg>
  );
};

AnimatedSvg.propTypes = {
  triggerAnimation: PropTypes.bool.isRequired,
  startDelay: PropTypes.number,
  delayPerItem: PropTypes.number,
};

export default AnimatedSvg;
