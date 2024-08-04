export const formatCurrency = (value: number | string): string => {
  // Ensure value is a number
  const numberValue = Number(value);
  if (isNaN(numberValue)) {
    return '₹0.00'; // Return a default value if input is not a number
  }

  // Format currency based on INR
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(numberValue);
};

export const formatDecimal = (value: number | string): string => {
  // Ensure value is a number
  const numberValue = Number(value);
  if (isNaN(numberValue)) {
    return '0.00'; // Return a default value if input is not a number
  }

  // Format decimal values
  return numberValue.toFixed(2);
};

export const formatProfitLoss = (amount: number, invested: number): string => {
  const profitOrLoss = amount - invested;
  const percentage = calculatePercentage(invested, profitOrLoss);
  const profitOrLossFormatted = formatCurrency(profitOrLoss);
  const percentageFormatted = formatDecimal(percentage);

  return `${profitOrLossFormatted} (${percentageFormatted}%)`;
};

export const calculatePercentage = (invested: number | string, profitOrLoss: number | string): string => {
  // Ensure both values are numbers
  const investedValue = Number(invested);
  const profitOrLossValue = Number(profitOrLoss);

  if (isNaN(investedValue) || isNaN(profitOrLossValue) || investedValue === 0) {
    return '0.00'; // Return 0 if inputs are not numbers or invested amount is zero
  }

  // Calculate percentage profit or loss
  return ((profitOrLossValue / investedValue) * 100).toFixed(2);
};