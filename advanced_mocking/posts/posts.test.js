import { it, expect, describe } from 'vitest';
import { ValidationError } from '../util/errors';
import { serializeData, validateEntries } from './posts';

describe('validateEntries', () => {
  it('Should throw a validation error when one of the entries is an empty string', () => {
    const testEntries = { title: 'Hello World', content: '' };
    const fncValidateEntries = () => validateEntries(testEntries);
    expect(fncValidateEntries).toThrow(ValidationError);
  });

  it('Should throw a validation error when one of the entries is undefined', () => {
    const testEntries = { title: 'Hello World', content: undefined };
    const fncValidateEntries = () => validateEntries(testEntries);
    expect(fncValidateEntries).toThrow(ValidationError);
  });

  it('Should throw a validation error when one of the entries is a blank string of variable length', () => {
    const testEntries = { title: 'Hello World', content: '     ' };
    const fncValidateEntries = () => validateEntries(testEntries);
    expect(fncValidateEntries).toThrow(ValidationError);
  });

  it('Should return an object when passed with valid parameters ', () => {
    const testEntries = { title: 'Hello World', content: 'Hello World' };
    expect(validateEntries(testEntries)).toBeDefined();
  });

  it('Should return an object of valid keys  when passed with valid parameters ', () => {
    const testEntries = { title: 'Hello World', content: 'Hello World' };
    const returnedObject = validateEntries(testEntries);
    expect(returnedObject.title).toBe(testEntries.title);
    expect(returnedObject.content).toBe(testEntries.content);
  });
});

describe('serializeData()', () => {
  it('Should return an object of form data with key value pairs', () => {
    const formData = {
      title: 'Hello World',
      content: 'Just trying to say hello',
      keys() {
        return ['title', 'content'];
      },
      get(key) {
        return this[key];
      },
    };
    const parsedData = serializeData(formData);

    expect(parsedData.title).toBe(formData.title);
    expect(parsedData.content).toBe(formData.content);
  });
});
