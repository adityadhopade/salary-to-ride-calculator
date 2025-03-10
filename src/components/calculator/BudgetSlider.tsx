
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { PercentIcon } from 'lucide-react';

interface BudgetSliderProps {
  budgetPercentage: number;
  onBudgetChange: (value: number) => void;
}

const BudgetSlider = ({ budgetPercentage, onBudgetChange }: BudgetSliderProps) => {
  return (
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
        onValueChange={(values) => onBudgetChange(values[0])}
        className="py-2"
      />
      <p className="text-sm text-muted-foreground">
        Recommended: 15-30% of your monthly income.
      </p>
    </div>
  );
};

export default BudgetSlider;
