import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-brazilian-yellow via-yellow-400 to-brazilian-yellow flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo with bounce animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/78594582-c731-46b2-a322-8d85310ce381.png" 
            alt="Brazilian Day Vancouver 2025 Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Loading text */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-brazilian-blue mb-4 font-daft"
        >
          Brazilian Day Vancouver 2025
        </motion.h2>

        {/* Loading dots */}
        <motion.div className="flex justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-brazilian-blue rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Brazilian flag colors wave */}
        <motion.div className="flex justify-center mt-8 gap-1">
          {['bg-brazilian-green', 'bg-brazilian-yellow', 'bg-brazilian-blue'].map((color, index) => (
            <motion.div
              key={index}
              className={`w-2 h-8 ${color} rounded-full`}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation; 