import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Currency, CurrencyCode, currencies } from '@/utils/currency';
import { motion } from 'framer-motion';

interface CurrencySelectProps {
  currencyCode: CurrencyCode;
  onCurrencyChange: (value: CurrencyCode) => void;
}

const CurrencySelect = ({ currencyCode, onCurrencyChange }: CurrencySelectProps) => {
  return (
    <motion.div 
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Label htmlFor="currency" className="text-sm font-medium">
        Currency
      </Label>
      <Select 
        value={currencyCode}
        onValueChange={(value) => onCurrencyChange(value as CurrencyCode)}
      >
        <SelectTrigger 
          id="currency" 
          className="glass-morphism border-0"
        >
          <SelectValue placeholder="Select currency" />
        </SelectTrigger>
        <SelectContent 
          className="glass-morphism border-0 shadow-lg"
          position="popper"
          sideOffset={4}
        >
          {currencies.map((currency) => (
            <SelectItem 
              key={currency.code} 
              value={currency.code}
              className="cursor-pointer focus:bg-white/10 hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                {currency.symbol} {currency.code}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  );
};

export default CurrencySelect;
