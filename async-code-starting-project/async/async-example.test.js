import { it, expect, beforeEach } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

let testUserEmail;

beforeEach(() => {
  testUserEmail = 'test@gmail.com';
});

it('should generate a token value', (done) => {
  generateToken(testUserEmail, (error, token) => {
    try {
      expect(token).toBeDefined();
      expect(token).toBeTypeOf('string');
      done();
    } catch (err) {
      done(err);
    }
  });
});

it(`Should generate a token with a value : [promised based]`, () =>
  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined());

it(`Should generate a token with a value : [promised based]`, async () => {
  const token = await generateTokenPromise(testUserEmail);
  return expect(token).toBeDefined();
});
