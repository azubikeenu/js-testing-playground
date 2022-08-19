import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('Should return a positive number when a positive numeric string is passed', () => {
  const number = '1';
  const result = transformToNumber(number);
  expect(result).toBe(1);
});

it('Should return a negative number when a negative numeric string is passed', () => {
  const number = '-1';
  const result = transformToNumber(number);
  expect(result).toBeTypeOf('number').toBe(-1);
});

it('Should return NaN when a non-numeric string is passed', () => {
  const number = 'Richard';
  const result = transformToNumber(number);
  expect(result).toBeNaN();
});

it('Should return NaN when no parameter is passed ', () => {
  expect(transformToNumber()).toBeNaN();
});
