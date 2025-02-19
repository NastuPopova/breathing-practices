import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1.000]
          }
        }}
        exit={{ 
          opacity: 0,
          y: -20,
          transition: {
            duration: 0.3
          }
        }}
      >
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ 
            scaleY: 0,
            transition: {
              duration: 0.5,
              ease: [0.645, 0.045, 0.355, 1.000]
            }
          }}
          className="fixed inset-0 origin-bottom bg-teal-500 z-50"
        />
        
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ 
            scaleY: 0,
            transition: {
              duration: 0.5,
              delay: 0.1,
              ease: [0.645, 0.045, 0.355, 1.000]
            }
          }}
          className="fixed inset-0 origin-bottom bg-teal-600 z-40"
        />
        
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ 
            scaleY: 0,
            transition: {
              duration: 0.5,
              delay: 0.2,
              ease: [0.645, 0.045, 0.355, 1.000]
            }
          }}
          className="fixed inset-0 origin-bottom bg-teal-700 z-30"
        />
        
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 