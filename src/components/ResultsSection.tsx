
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, CarType } from '@/models/car';
import CarCard from './CarCard';
import { calculateCarAffordability, formatCurrency, formatPercentage } from '@/utils/calculator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ResultsSectionProps {
  cars: Car[];
  salary: number;
  budgetPercentage: number;
  carType: CarType;
}

const ResultsSection = ({ cars, salary, budgetPercentage, carType }: ResultsSectionProps) => {
  const [selectedTab, setSelectedTab] = useState<CarType>(carType);
  const monthlyBudget = salary * (budgetPercentage / 100);

  const filteredCars = cars.filter(car => car.type === selectedTab);

  // Calculate affordability for each car
  const carsWithAffordability = filteredCars.map(car => {
    const { canAffordPerMonth, percentagePerMonth, monthsToSave } = calculateCarAffordability(
      salary,
      car.price,
      budgetPercentage
    );
    
    return {
      ...car,
      canAfford: canAffordPerMonth,
      percentagePerMonth,
      monthsToSave
    };
  });

  // Sort cars: affordable first, then by price
  const sortedCars = [...carsWithAffordability].sort((a, b) => {
    if (a.canAfford !== b.canAfford) {
      return a.canAfford ? -1 : 1;
    }
    return a.price - b.price;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <motion.h2 
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your Car Options
        </motion.h2>
        <motion.p 
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Based on your monthly salary of {formatCurrency(salary)} with {budgetPercentage}% ({formatCurrency(monthlyBudget)}/month) allocated for car expenses.
        </motion.p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue={carType} value={selectedTab} onValueChange={(value) => setSelectedTab(value as CarType)}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {Object.values(CarType).map((type) => (
              <TabsTrigger key={type} value={type} className="text-sm md:text-base">
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.values(CarType).map((type) => (
            <TabsContent key={type} value={type} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={type}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {sortedCars.map(car => (
                    <CarCard 
                      key={car.id} 
                      car={car} 
                      isAffordable={car.canAfford}
                      percentageAffordable={car.percentagePerMonth}
                      monthsToSave={car.monthsToSave}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ResultsSection;
