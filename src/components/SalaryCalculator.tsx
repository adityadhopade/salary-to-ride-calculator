
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { CarType } from '@/models/car';
import { Calculator, PercentIcon } from 'lucide-react';
import { Currency, CurrencyCode, currencies } from '@/utils/currency';
import { formatCurrencyValue } from '@/utils/currency';

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

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setSalary(value ? parseInt(value) : 0);
  };

  const getCurrencySymbol = (code: CurrencyCode): string => {
    const currency = currencies.find(c => c.code === code);
    return currency ? currency.symbol : '$';
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
          <div className="space-y-3 md:col-span-3">
            <Label htmlFor="salary" className="text-sm font-medium">
              Your Monthly Salary
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                {getCurrencySymbol(currencyCode)}
              </span>
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
            <Label htmlFor="currency" className="text-sm font-medium">
              Currency
            </Label>
            <Select 
              value={currencyCode}
              onValueChange={(value) => setCurrencyCode(value as CurrencyCode)}
            >
              <SelectTrigger id="currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    <span className="flex items-center">
                      {currency.symbol} {currency.code}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
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
              {formatCurrencyValue(monthlyBudget, currencyCode)}
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
