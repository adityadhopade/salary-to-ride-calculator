// Define supported currencies and their properties
export type CurrencyCode = 'USD' | 'EUR' | 'GBP';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
}

// Exchange rates relative to USD
const exchangeRates: Record<CurrencyCode, number> = {
  'USD': 1.00,    // Base currency
  'EUR': 0.93,    // 1 USD = 0.93 EUR
  'GBP': 0.81,    // 1 USD = 0.81 GBP
  // 'INR': 83.12,   // 1 USD = 83.12 INR
};

export const currencies: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  // { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
];

export const getCurrencyByCode = (code: CurrencyCode): Currency => {
  const currency = currencies.find(c => c.code === code);
  if (!currency) throw new Error(`Unsupported currency: ${code}`);
  return currency;
};

/**
 * Converts an amount from one currency to another
 */
export const convertCurrency = (
  amount: number,
  fromCurrency: CurrencyCode,
  toCurrency: CurrencyCode
): number => {
  // If same currency, return original amount
  if (fromCurrency === toCurrency) return amount;

  // Convert to USD first (if not already USD)
  const amountInUSD = fromCurrency === 'USD' 
    ? amount 
    : amount / exchangeRates[fromCurrency];

  // Convert from USD to target currency
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];

  // Round to 2 decimal places
  return Number(convertedAmount.toFixed(2));
};

/**
 * Formats a currency value according to the currency's conventions
 */
export const formatCurrencyValue = (amount: number, currencyCode: CurrencyCode): string => {
  const currency = getCurrencyByCode(currencyCode);
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
};
