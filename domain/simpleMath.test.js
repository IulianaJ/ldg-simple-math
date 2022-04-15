const simpleMath = require("./simpleMath");

describe("simpleMath", () => {
  test("given 2 numbers, should return their sum result", () => {
    expect(simpleMath.add(2, 5)).toBe(7);
  });

  test("given 2 numbers, should return their difference result", () => {
    expect(simpleMath.substract(10, 5)).toBe(5);
  });

  test("given 2 numbers, should return multiplication result", () => {
    expect(simpleMath.multiply(10, 5)).toBe(50);
  });

  test("given 2 numbers, should return their division result", () => {
    expect(simpleMath.divide(10, 5)).toBe(2);
  });
});
