
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { CarType } from '@/models/car';
import { CurrencyCode, getCurrencyByCode } from '@/utils/currency';

// Import newly created components
import SalaryInput from './SalaryInput';
import CurrencySelect from './CurrencySelect';
import BudgetSlider from './BudgetSlider';
import CarTypeSelector from './CarTypeSelector';
import BudgetDisplay from './BudgetDisplay';
import CalculateButton from './CalculateButton';

interface SalaryCalculatorProps {
  onCalculate: (salary: number, percentage: number, carType: CarType, currencyCode: CurrencyCode) => void;
}

const SalaryCalculator = ({ onCalculate }: SalaryCalculatorProps) => {
  const [salary, setSalary] = useState<number>(5000);
  const [budgetPercentage, setBudgetPercentage] = useState<number>(30);
  const [selectedCarType, setSelectedCarType] = useState<CarType>(CarType.DailyDriver);
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('USD');
  const [monthlyBudget, setMonthlyBudget] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMonthlyBudget(salary * (budgetPercentage / 100));
  }, [salary, budgetPercentage]);

  const handleCalculate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onCalculate(salary, budgetPercentage, selectedCarType, currencyCode);
      setIsAnimating(false);
    }, 500);
  };

  const getCurrencySymbol = (code: CurrencyCode): string => {
    const currency = getCurrencyByCode(code);
    return currency.symbol;
  };

  return (
    <motion.div 
      className="glass-card rounded-xl p-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <Calculator className="mr-2 h-6 w-6" />
        Salary-to-Car Calculator
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <SalaryInput 
              salary={salary} 
              onSalaryChange={setSalary} 
              currencySymbol={getCurrencySymbol(currencyCode)}
            />
          </div>
          
          <CurrencySelect 
            currencyCode={currencyCode}
            onCurrencyChange={setCurrencyCode}
          />
        </div>

        <BudgetSlider 
          budgetPercentage={budgetPercentage}
          onBudgetChange={setBudgetPercentage}
        />

        <CarTypeSelector 
          selectedCarType={selectedCarType}
          onCarTypeChange={setSelectedCarType}
        />

        <div className="pt-4 border-t border-border">
          <BudgetDisplay 
            monthlyBudget={monthlyBudget}
            currencyCode={currencyCode}
          />

          <CalculateButton 
            isAnimating={isAnimating}
            onClick={handleCalculate}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SalaryCalculator;
