
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, CarType, cars } from '@/models/car';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SalaryCalculator from '@/components/calculator/SalaryCalculator';
import ResultsSection from '@/components/ResultsSection';
import Footer from '@/components/Footer';
import { toast } from "sonner";
import { CurrencyCode } from '@/utils/currency';

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [salary, setSalary] = useState(0);
  const [budgetPercentage, setBudgetPercentage] = useState(0);
  const [selectedCarType, setSelectedCarType] = useState<CarType>(CarType.DailyDriver);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('USD');
  const [calculationsPerformed, setCalculationsPerformed] = useState(0);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (salary: number, percentage: number, carType: CarType, currencyCode: CurrencyCode) => {
    setSalary(salary);
    setBudgetPercentage(percentage);
    setSelectedCarType(carType);
    setSelectedCurrency(currencyCode);
    setCalculationsPerformed(prev => prev + 1);
    
    if (!showResults) {
      setShowResults(true);
      toast.success("Calculation complete! Scroll down to see your options.");
    } else {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      toast.success("Calculation updated! Check out your new options.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero />
      
      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto">
          <SalaryCalculator onCalculate={handleCalculate} />
        </div>
      </section>
      
      <AnimatePresence>
        {showResults && (
          <motion.section 
            id="cars" 
            className="py-16 px-4 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            ref={resultsRef}
          >
            <div className="container mx-auto">
              <ResultsSection 
                cars={cars} 
                salary={salary} 
                budgetPercentage={budgetPercentage} 
                carType={selectedCarType}
                currencyCode={selectedCurrency}
                key={calculationsPerformed}
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Index;
