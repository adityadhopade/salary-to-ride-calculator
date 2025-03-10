import { convertCurrency } from './currency'; // Adjust the path if necessary
import { CurrencyCode } from '../types'; // Import from types.ts

export interface CarAffordabilityResult {
  canAffordPerMonth: boolean;
  percentagePerMonth: number;
  monthsToSave: number;
  affordableAmount: number;
}

export const calculateCarAffordability = (
  salary: number,
  carPrice: number,
  budgetPercentage: number,
  currencyCode: CurrencyCode
): CarAffordabilityResult => {
  let convertedPrice = carPrice;

  // Convert USD to INR if necessary
  if (currencyCode === 'INR') {
    convertedPrice = convertCurrency(carPrice, 'USD', 'INR'); // Ensure this conversion is applied
  }

  const monthlyBudget = currencyCode === 'INR' 
    ? convertCurrency(salary, 'USD', 'INR') * (budgetPercentage / 100) 
    : salary * (budgetPercentage / 100);
  const canAffordPerMonth = monthlyBudget >= convertedPrice;
  const percentagePerMonth = (monthlyBudget / convertedPrice) * 100;

  // Calculate months to save
  const monthsToSave = canAffordPerMonth ? 0 : Math.ceil(convertedPrice / monthlyBudget);

  return {
    canAffordPerMonth,
    percentagePerMonth,
    monthsToSave,
    affordableAmount: monthlyBudget
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value / 100);
};
