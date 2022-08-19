import { it, expect, describe } from 'vitest';
import { generateResult } from './output';
describe('generateResult()', () => {
  it('Should always return a string', () => {
    const stringValue = '1';
    const numericValue = 1;
    const objectValue = {};
    const booleanValue = true;
    const arrayValue = [];
    const result1 = generateResult(stringValue);
    const result2 = generateResult(numericValue);
    const result3 = generateResult(objectValue);
    const result4 = generateResult(booleanValue);
    const result5 = generateResult(arrayValue);
    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
    expect(result4).toBeTypeOf('string');
    expect(result5).toBeTypeOf('string');
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';
    const resultText = generateResult(result);
    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';
    const resultText = generateResult(result);
    expect(resultText).toContain('Invalid');
  });
});
