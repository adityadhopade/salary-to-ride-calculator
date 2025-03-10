
export type CurrencyCode = 'USD' | 'EUR' | 'INR' | 'GBP';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rate: number; // Conversion rate from USD
}

export const currencies: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 83.5 },
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.78 },
];

export const getCurrencyByCode = (code: CurrencyCode): Currency => {
  return currencies.find(c => c.code === code) || currencies[0];
};

export const formatCurrencyValue = (amount: number, currencyCode: CurrencyCode = 'USD'): string => {
  const currency = getCurrencyByCode(currencyCode);
  // Convert from USD to the selected currency
  const value = amount * currency.rate;
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

export const convertCurrency = (amount: number, fromCurrency: CurrencyCode, toCurrency: CurrencyCode): number => {
  const from = getCurrencyByCode(fromCurrency);
  const to = getCurrencyByCode(toCurrency);
  
  // Convert to USD first, then to target currency
  const amountInUSD = amount / from.rate;
  return amountInUSD * to.rate;
};
