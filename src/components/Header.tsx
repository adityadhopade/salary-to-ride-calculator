
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="w-full py-4 px-8 border-b border-black/5 bg-white/70 backdrop-blur-sm fixed top-0 z-50">
      <motion.div 
        className="container mx-auto flex justify-between items-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-xl font-semibold tracking-tight">Salary-to-Ride</span>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          <motion.a 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#calculator" 
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Calculator
          </motion.a>
          <motion.a 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#cars" 
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Cars
          </motion.a>
          <motion.a 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#about" 
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            About
          </motion.a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
