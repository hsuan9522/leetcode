import strStr from "./index";

describe("strStr", () => {
  test("A", () => {
    expect(strStr('hello', 'll')).toEqual(2);
  });

  test("B", () => {
    expect(strStr('aaaaa', 'bba')).toEqual(-1);
  });

  test("C", () => {
    expect(strStr('', '')).toEqual(0);
  });
});
