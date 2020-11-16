import isPalindrome from "./index";

describe("isPalindrome", () => {
  test("A", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test("B", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test("C", () => {
    expect(isPalindrome(10)).toBe(false);
  });

  test("D", () => {
    expect(isPalindrome(-101)).toBe(false);
  });
});