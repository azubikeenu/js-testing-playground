import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
  it('Should not throw an error if a valid string is passed', () => {
    const input = 'Richard';
    expect(() => {
      validateStringNotEmpty(input);
    }).not.toThrow();
  });

  it('Should throw an error if the parameter type is not a string ', () => {
    const input = 1;
    const obj = {};
    const bool = true;
    expect(() => {
      validateStringNotEmpty(input);
    }).toThrow(/value.trim is not a function/);
    expect(() => {
      validateStringNotEmpty(obj);
    }).toThrow(/value.trim is not a function/);
    expect(() => {
      validateStringNotEmpty(bool);
    }).toThrow(/value.trim is not a function/);
  });

  it('Should throw an error when an empty string is passed', () => {
    // given
    const input = '';
    // when
    const validateStringFunction = () => validateStringNotEmpty(input)
    // then
    expect(validateStringFunction).toThrow(/Invalid input - must not be empty./);
  });
});



describe('validateNumber()', () => {
  it('should throw an error if NaN is provided', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('should throw an error with a message that contains a reason (invalid number)', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });

  it('should throw an error if a non-numeric value is provided', () => {
    const input = '1';
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('should not throw an error, if a number is provided', () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
  });
});
