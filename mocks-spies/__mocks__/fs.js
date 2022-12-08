import { vi } from 'vitest';
export const promises = {
  writeFile: vi.fn((data, file) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};

// to mock out path.js ..create a path.js file and dump the ff code snippet
// export default {
//   join: vi.fn((...args) => args[args.length-1])
// }