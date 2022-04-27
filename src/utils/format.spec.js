import { priceForm } from './format';

describe('-----format test-----', () => {
  test('price format', () => {
    expect(priceForm('1000000')).toBe('1,000,000');
  });
});
