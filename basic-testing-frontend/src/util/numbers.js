import { validateNumber, validateStringNotEmpty } from './validation.js';
import { convertToNumber } from '../math.js';

export function transformToNumber(value) {
  return +value;
}

export function transformToNumericArray(numberInputs) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = convertToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
