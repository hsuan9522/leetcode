import numIdenticalPairs from "./index";

describe("numIdenticalPairs", () => {
  test("A", () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toEqual(4);
  });

  test("B", () => {
    expect(numIdenticalPairs([1, 1, 1, 1])).toEqual(6);
  });
  
  test("C", () => {
    expect(numIdenticalPairs([1, 2, 3])).toEqual(0);
  });

  test("C", () => {
    expect(numIdenticalPairs([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual(37);
  });
});