import { it, expect, describe } from 'vitest';
import { transformToNumber, transformToNumericArray } from './numbers';

describe(`transformToNumber()`, () => {
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
});

describe('transformToNumericArray()', () => {
  it('should return an array of numbers when an array of numeric strings is provided ', () => {
    const numbers = ['2', '4'];
    const result = transformToNumericArray(numbers);
    expect(result).toEqual([2,4]);
  });

  it(`Should throw an error when an empty string  is contained  in the array `, () => {
    const numbers = ['', '2'];
    const transformFunc = () => transformToNumericArray(numbers);
    expect(transformFunc).toThrow();
  });

  it(`Should throw an error when an invalid type is contained in the array `, () => {
    const numbers = [true, '2'];
    const transformFunc = () => transformToNumericArray(numbers);
    expect(transformFunc).toThrow();
  });
});
