
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface CalculateButtonProps {
  isAnimating: boolean;
  onClick: () => void;
}

const CalculateButton = ({ isAnimating, onClick }: CalculateButtonProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`button-${isAnimating}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button 
          onClick={onClick} 
          className="w-full"
          disabled={isAnimating}
        >
          {isAnimating ? (
            <div className="flex items-center">
              Calculating
              <span className="ml-2 flex">
                <span className="animate-bounce mx-0.5 delay-0">.</span>
                <span className="animate-bounce mx-0.5 delay-150">.</span>
                <span className="animate-bounce mx-0.5 delay-300">.</span>
              </span>
            </div>
          ) : (
            "Calculate My Car Options"
          )}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default CalculateButton;
