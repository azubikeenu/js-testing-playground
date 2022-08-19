import { it, expect, vi, describe } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData(logFn)', () => {
  it('Should execute LogFn if proviced', () => {
    const logger = vi.fn();
    generateReportData(logger);
    expect(logger).toHaveBeenCalled();

  });
});
