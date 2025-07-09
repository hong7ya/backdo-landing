import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, vi } from 'vitest';

afterEach(() => {
  vi.clearAllMocks();
});

afterAll(() => {
  vi.resetAllMocks();
});
