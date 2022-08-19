import { describe, expect, it } from 'vitest';
import { add, addModified } from './math';

describe('Add test without reduce Add()', () => {
  it('Should return the sum of an array', () => {
    // Given
    const array = [1, 2, 3];
    // When
    const result = add(array);
    // Then
    expect(result).toBe(6);
  });

  it('Should return NaN if one of the elements of the array is invalid', () => {
    const array = [1, 2, true];
    const result = add(array);
    expect(result).toBeNaN();
  });

  it('Should return the sum of the array whose elememt are numeric strings', () => {
    const array = ['1', '2', '3'];
    const result = add(array);
    expect(result).toBe(6);
  });

  it('Should return zero on an empty array', () => {
    const array = [];
    const result = add(array);
    expect(result).toBe(0);
  });

  it('Should throw and error when no parameters are passed to the function', () => {
    expect(() => {
      add();
    }).toThrow();
  });

  it('Should throw an error when numeric parameters are passed insted of an array', () => {
    expect(() => {
      add(1, 2, 3);
    }).toThrow(/is not iterable/);
  });
});

describe('add test with reduce addModified', () => {
  it('Should return the sum of the parameters', () => {
    const result = addModified(1, 2, 3);
    expect(result).toBe(6);
  });

  it(`Should return NaN one of the parameters passed  are not of type string or numeric string  `, () => {
    const result = addModified('1', true, 3);
    expect(result).toBeNaN();
  });

});
