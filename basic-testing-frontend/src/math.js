import { transformToNumericArray } from './util/numbers.js';


export function add(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += convertToNumber(number); // converts to a number
  }
  return sum;
}

export function addModified(...numbers) {
  return numbers.reduce((sum, current) => sum + convertToNumber(current), 0);
}

export function calculateResult(numberInputs) {
  let result = '';
  try {
    const numbers = transformToNumericArray(numberInputs);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}

export const convertToNumber = (x) =>
  typeof x != 'number' ? parseFloat(x, 10) : x;
