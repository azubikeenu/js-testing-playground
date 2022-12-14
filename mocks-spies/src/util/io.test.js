import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import path from 'path';
import writeData from './io';

vi.mock('fs');

vi.mock('path', () => {
  return {
    default: {  // the default key is added because we used the default export in the path native function
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it('should execute the writeFile method', () => {
  const testData = 'dummy data';
  const fileName = 'data.txt';
  writeData(testData, fileName);
  expect(fs.writeFile).toHaveBeenCalled();

});

it('should ensure the writeFile method is called with correct arguments ', () => {
  const testData = 'dummy data';
  const fileName = 'data.txt';
  writeData(testData, fileName);
  expect(fs.writeFile).toHaveBeenCalledWith(fileName, testData);
});

it('should return a promise that resolves to undefined ', () => {
  const testData = 'dummy data';
  const fileName = 'data.txt';
  expect(writeData(testData, fileName)).resolves.toBeUndefined();
});

it('should execute the write file method [using spyOn]', () => {
  const testData = 'dummy data';
  const fileName = 'data.txt';
  vi.spyOn(path , 'join').mockReturnValue(fileName)
  const fsMock = vi.spyOn(fs, 'writeFile')
  writeData(testData, fileName);
  expect(fsMock).toHaveBeenCalled();
  expect(fsMock).toHaveBeenCalledWith(fileName, testData);
});
