import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('Should throw an error if an empty string is provided', () => {
  const testInput = '';
  const validationFunction = () => validateNotEmpty(testInput);
  expect(validationFunction).toThrow();
});

it('Should throw an error if an blank strings is provided', () => {
  const testInput = '   ';
  const validationFunction = () => validateNotEmpty(testInput);
  expect(validationFunction).toThrow();
});
it('Should throw an error with the provided message', () => {
  const testInput = '';
  const errorMessage = 'An Error Occured';
  const validationFunction = () => validateNotEmpty(testInput, errorMessage);
  expect(validationFunction).toThrow(errorMessage);
});
