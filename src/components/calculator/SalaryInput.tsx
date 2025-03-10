
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CurrencyCode } from '@/utils/currency';

interface SalaryInputProps {
  salary: number;
  onSalaryChange: (value: number) => void;
  currencySymbol: string;
}

const SalaryInput = ({ salary, onSalaryChange, currencySymbol }: SalaryInputProps) => {
  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    onSalaryChange(value ? parseInt(value) : 0);
  };

  return (
    <div className="space-y-3">
      <Label htmlFor="salary" className="text-sm font-medium">
        Your Monthly Salary
      </Label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {currencySymbol}
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
  );
};

export default SalaryInput;
