
import React from 'react';
import { motion } from 'framer-motion';
import { formatCurrencyValue } from '@/utils/currency';
import { CurrencyCode } from '@/utils/currency';

interface BudgetDisplayProps {
  monthlyBudget: number;
  currencyCode: CurrencyCode;
}

const BudgetDisplay = ({ monthlyBudget, currencyCode }: BudgetDisplayProps) => {
  return (
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
  );
};

export default BudgetDisplay;
