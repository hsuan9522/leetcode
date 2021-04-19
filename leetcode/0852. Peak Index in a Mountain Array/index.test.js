import peakIndexInMountainArray from "./index";

describe("peakIndexInMountainArray", () => {
  test("A", () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toEqual(1);
  });

  test("B", () => {
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toEqual(1);
  });

  test("C", () => {
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toEqual(1);
  });

  test("D", () => {
    expect(peakIndexInMountainArray([3, 4, 5, 1])).toEqual(2);
  });

  test("E", () => {
    expect(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])).toEqual(2);
  });
});
