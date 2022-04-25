import { sum } from './unitTest';

describe('unit test >>>', () => {
  test('/', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
