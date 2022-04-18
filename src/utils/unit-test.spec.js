import { sum } from "./unit-test";

describe("unit test >>>", () => {
  test("/", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
