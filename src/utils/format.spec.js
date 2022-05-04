import { priceFormat, timeFormat } from './format';

describe('-----format test-----', () => {
  test('price format', () => {
    expect(priceFormat('1000000')).toBe('1,000,000원');
  });
  test('time format', () => {
    expect(timeFormat('2022-04-28T10:28:58.440Z')).toBe('13시간전');
  });
});
