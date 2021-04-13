import myAtoi from "./index";

describe("myAtoi", () => {
  test("A", () => {
    expect(myAtoi("42")).toBe(42);
  });

  test("B", () => {
    expect(myAtoi("   -42")).toBe(-42);
  });

  test("C", () => {
    expect(myAtoi("4193 with words")).toBe(4193);
  });

  test("D", () => {
    expect(myAtoi("words and 987")).toBe(0);
  });
  test("E", () => {
    expect(myAtoi("-91283472332")).toBe(-2147483648);
  });

  test("F", () => {
    expect(myAtoi("-2147483649")).toBe(-2147483648);
  })

  test("G", () => {
    expect(myAtoi("2147483649")).toBe(2147483647);
  })
});
