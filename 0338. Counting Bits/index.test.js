import countBits from "./index";

describe("countBits", () => {
  test("A", () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  test("B", () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
