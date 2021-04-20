import sortArrayByParityII from "./index";

describe("sortArrayByParityII", () => {
  test("A", () => {
    expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([4, 5, 2, 7]);
  });

  test("B", () => {
    expect(sortArrayByParityII([2, 3])).toEqual([2, 3]);
  });

  test("C", () => {
    expect(sortArrayByParityII([2, 0, 3, 4, 1, 3])).toEqual([2, 3, 0, 1, 4, 3]);
  });
});
