import {
  it,
  expect,
  describe
} from 'vitest';
import {
  transformToNumber,
  transformToNumericArray
} from './numbers';

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

  it(`Should return 0 when null is passed as an argument`, () => {
    const value = null;
    const result = transformToNumber(value);
    expect(result).toBe(0)
  })
});



describe('transformToNumericArray()', () => {
  it('should return an array of numbers when an array of numeric strings is provided ', () => {
    const numbers = ['2', '4'];
    const result = transformToNumericArray(numbers);
    expect(result).toEqual([2, 4]);
  });

  it(`Should throw an error when an empty string  is contained  in the array `, () => {
    const numbers = ['', '2'];
    const transformFunc = () => transformToNumericArray(numbers);
    expect(transformFunc).toThrow(/Invalid input/i);
  });

  it(`Should throw an error when an invalid type is contained in the array `, () => {
    const numbers = [true, '2'];
    const transformFunc = () => transformToNumericArray(numbers);
    expect(transformFunc).toThrow(TypeError);
  });

  it(`Should return an array of number type elements`, () => {
    const numbers = ['2', '4', '6'];
    const returnedValue = transformToNumericArray(numbers);
    returnedValue.forEach(number => {
      expect(number).toBeTypeOf("number")
    })
  })

});