
export interface CarAffordabilityResult {
  canAffordPerMonth: boolean;
  percentagePerMonth: number;
  monthsToSave: number;
  affordableAmount: number;
}

export const calculateCarAffordability = (
  monthlySalary: number,
  carPrice: number,
  budgetPercentage: number = 30
): CarAffordabilityResult => {
  // Calculate the monthly budget for car expenses (default 30% of salary)
  const monthlyBudget = monthlySalary * (budgetPercentage / 100);
  
  // Determine if the car can be afforded in a single month
  const canAffordPerMonth = monthlyBudget >= carPrice;
  
  // Calculate what percentage of the car can be afforded per month
  const percentagePerMonth = (monthlyBudget / carPrice) * 100;
  
  // Calculate how many months it would take to save for the car
  const monthsToSave = Math.ceil(carPrice / monthlyBudget);
  
  // The amount that can be afforded with the monthly budget
  const affordableAmount = monthlyBudget;
  
  return {
    canAffordPerMonth,
    percentagePerMonth,
    monthsToSave,
    affordableAmount
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
