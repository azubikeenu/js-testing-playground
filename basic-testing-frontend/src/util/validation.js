import { transformToNumber } from './numbers.js';
import { add } from '../math.js';
export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number) {
  if (isNaN(number) || typeof number != 'number') {
    throw new Error('Invalid number input.');
  }
}

export function validateFormInput(numberInputs) {
  let result = '';
  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
