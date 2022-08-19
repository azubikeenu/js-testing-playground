import { it, expect, vi, describe } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('HttpError.Class', () => {
  it('Should contain the provided messageCode , statusCode and data', () => {
    const statusCode = 401;
    const errorMessage = 'An Error occured';
    const data = { key: 'test' };
    const httpError = new HttpError(statusCode, errorMessage, data);
    expect(httpError.statusCode).toBe(statusCode);
    expect(httpError.message).toBe(errorMessage);
    expect(httpError.data).toBe(data);
  });

  it('Should contain undefined if no data is passed', () => {
    const statusCode = 401;
    const errorMessage = 'An Error occured';
    const httpError = new HttpError(statusCode, errorMessage);
    expect(httpError.data).toBeUndefined();
  });
});
describe('Validation.Class', () => {
  it('Should contain the provided message when instantiated ', () => {
    const message = 'An Error occured';
    const validationError = new ValidationError(message);
    expect(validationError.message).toBe(message);
  });

});
