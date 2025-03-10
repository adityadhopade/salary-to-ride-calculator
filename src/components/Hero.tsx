
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-blue-100 mix-blend-multiply filter blur-xl opacity-70"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-[15%] w-80 h-80 rounded-full bg-purple-100 mix-blend-multiply filter blur-xl opacity-70"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -10, 0],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Calculate your car affordability
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From <span className="text-gradient">Salary</span> to <span className="text-gradient">Wheels</span> in seconds
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover which cars you can afford based on your monthly income. From practical daily drivers to exotic supercars, find your perfect match.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={scrollToCalculator}
              className="bg-black text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Calculate Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        onClick={scrollToCalculator}
      >
        <ChevronDown className="w-10 h-10 text-gray-400" />
      </motion.div>
    </div>
  );
};

export default Hero;
