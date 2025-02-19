import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionTransition = ({ children, className = '' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1.000]
          }
        },
        hidden: {
          opacity: 0,
          y: 50
        }
      }}
      className={className}
    >
      <motion.div
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: [0.645, 0.045, 0.355, 1.000],
              delay: 0.2
            }
          },
          hidden: {
            opacity: 0,
            scale: 0.8
          }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SectionTransition; 