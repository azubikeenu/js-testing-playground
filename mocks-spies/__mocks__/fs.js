import { vi } from 'vitest';
export const promises = {
  writeFile: vi.fn((data, file) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};
