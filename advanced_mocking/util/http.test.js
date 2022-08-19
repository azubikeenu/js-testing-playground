import { it, expect, vi, beforeEach } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

let testResponseData, testResponse, testData;

beforeEach(() => {
  testData = { key: 'testData' };
  testResponseData = { testKey: 'test response data' };
  testResponse = {
    ok: true,
    json: () => {
      return new Promise((resolve, reject) => {
        resolve(testResponseData);
      });
    },
  };
});

const fetchStub = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      reject('Not a string');
    }
    resolve(testResponse);
  });
});

vi.stubGlobal('fetch', fetchStub);

it('Should return any available response data', () => {
  expect(sendDataRequest(testData)).resolves.toBe(testResponseData);
});


it('Should call fetch method twice ', () => {
  sendDataRequest(testData);
  expect(fetch).toHaveBeenCalledTimes(2);
});


it('Should convert the data to a JSON object before sending the data', async () => {
  let errorMessage = '';
  try {
    await sendDataRequest({ key: 'testData' });
  } catch (err) {
    errorMessage = err;
  }
  expect(errorMessage).not.toBe('Not a string');
});


it('Should throw an HttpError in case of non-ok response status', async () => {
  testResponse.ok = false;
  expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
