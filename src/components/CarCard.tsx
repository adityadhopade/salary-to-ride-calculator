import React from 'react';
import { motion } from 'framer-motion';
import { Car, getCarPriceInCurrency } from '@/models/car';
import { formatCurrencyValue, CurrencyCode } from '@/utils/currency';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CarCardProps {
  car: Car;
  currencyCode: CurrencyCode;
  isAffordable?: boolean;
  percentageAffordable?: number;
  monthsToSave?: number;
  onClick?: () => void;
}

const CarCard = ({ 
  car, 
  currencyCode, 
  isAffordable, 
  percentageAffordable, 
  monthsToSave, 
  onClick 
}: CarCardProps) => {
  const priceInCurrency = getCarPriceInCurrency(car, currencyCode);

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden h-full flex flex-col border border-black/5 bg-white/70 backdrop-blur-sm">
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute top-2 left-2 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Badge variant="secondary" className="bg-white/80 text-black text-xs">
              {car.type}
            </Badge>
          </motion.div>
          {isAffordable !== undefined && (
            <motion.div
              className="absolute top-2 right-2 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Badge 
                variant={isAffordable ? "default" : "outline"} 
                className={`${isAffordable ? 'bg-green-500' : 'bg-red-100 text-red-500 border-red-200'}`}
              >
                {isAffordable ? 'Affordable' : 'Not Affordable'}
              </Badge>
            </motion.div>
          )}
          <motion.img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover object-center transform"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        </div>
        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-xl">{car.name}</CardTitle>
          <CardDescription className="flex justify-between items-center">
            <span className="text-lg font-semibold">{formatCurrencyValue(priceInCurrency, currencyCode)}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-2 flex-grow">
          <p className="text-sm text-gray-600 line-clamp-2">{car.description}</p>
        </CardContent>
        {percentageAffordable !== undefined && (
          <CardFooter className="p-4 pt-2 border-t border-gray-100 flex flex-col items-start gap-1">
            <div className="w-full">
              <div className="flex justify-between text-xs mb-1">
                <span>Monthly affordability</span>
                <span>{percentageAffordable.toFixed(2)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(percentageAffordable, 100)}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            {monthsToSave && monthsToSave > 0 && (
              <p className="text-xs text-gray-500 mt-2">
                Save for {monthsToSave} {monthsToSave === 1 ? 'month' : 'months'} to afford
              </p>
            )}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export default CarCard;
