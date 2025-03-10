
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { CarType } from '@/models/car';
import { DollarSign, Calculator, PercentIcon } from 'lucide-react';
import { calculateCarAffordability, formatCurrency, formatPercentage } from '@/utils/calculator';

interface SalaryCalculatorProps {
  onCalculate: (salary: number, percentage: number, carType: CarType) => void;
}

const SalaryCalculator = ({ onCalculate }: SalaryCalculatorProps) => {
  const [salary, setSalary] = useState<number>(5000);
  const [budgetPercentage, setBudgetPercentage] = useState<number>(30);
  const [selectedCarType, setSelectedCarType] = useState<CarType>(CarType.DailyDriver);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMonthlyBudget(salary * (budgetPercentage / 100));
  }, [salary, budgetPercentage]);

  const handleCalculate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onCalculate(salary, budgetPercentage, selectedCarType);
      setIsAnimating(false);
    }, 500);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setSalary(value ? parseInt(value) : 0);
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
        <div className="space-y-3">
          <Label htmlFor="salary" className="text-sm font-medium">
            Your Monthly Salary
          </Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              id="salary"
              type="text"
              value={salary.toString()}
              onChange={handleSalaryChange}
              className="pl-10"
              placeholder="Enter your monthly salary"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            This is your monthly income before tax.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="budget-percentage" className="text-sm font-medium">
              Car Budget Percentage
            </Label>
            <span className="text-sm font-medium flex items-center">
              <PercentIcon className="mr-1 h-3 w-3" />
              {budgetPercentage}%
            </span>
          </div>
          <Slider
            id="budget-percentage"
            min={5}
            max={100}
            step={1}
            value={[budgetPercentage]}
            onValueChange={(values) => setBudgetPercentage(values[0])}
            className="py-2"
          />
          <p className="text-sm text-muted-foreground">
            Recommended: 15-30% of your monthly income.
          </p>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">Car Type</Label>
          <div className="grid grid-cols-3 gap-2">
            {Object.values(CarType).map((type) => (
              <Button
                key={type}
                type="button"
                variant={selectedCarType === type ? "default" : "outline"}
                onClick={() => setSelectedCarType(type)}
                className={`transition-all ${selectedCarType === type ? 'shadow-md' : ''}`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium">Monthly Car Budget:</span>
            <motion.span
              key={monthlyBudget}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-semibold"
            >
              {formatCurrency(monthlyBudget)}
            </motion.span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`button-${isAnimating}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={handleCalculate} 
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
        </div>
      </div>
    </motion.div>
  );
};

export default SalaryCalculator;
