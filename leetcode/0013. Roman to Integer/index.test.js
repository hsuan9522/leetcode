import romanToInt from "./index";

describe("romanToInt", () => {
  test("A", () => {
    expect(romanToInt('III')).toEqual(3);
  });

  test("B", () => {
    expect(romanToInt('IV')).toEqual(4);
  });

  test("C", () => {
    expect(romanToInt('LVIII')).toEqual(58);
  });

  test("D", () => {
    expect(romanToInt('MCMXCIV')).toEqual(1994);
  });
});
