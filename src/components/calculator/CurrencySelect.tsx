
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

interface CurrencySelectProps {
  currencyCode: CurrencyCode;
  onCurrencyChange: (value: CurrencyCode) => void;
}

const CurrencySelect = ({ currencyCode, onCurrencyChange }: CurrencySelectProps) => {
  return (
    <div className="space-y-3">
      <Label htmlFor="currency" className="text-sm font-medium">
        Currency
      </Label>
      <Select 
        value={currencyCode}
        onValueChange={(value) => onCurrencyChange(value as CurrencyCode)}
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
  );
};

export default CurrencySelect;
