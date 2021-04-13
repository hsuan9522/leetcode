import maximumWealth from "./index";

describe("maximumWealth", () => {
  test("A", () => {
    expect(
      maximumWealth([
        [1, 2, 3],
        [3, 2, 1],
      ])
    ).toEqual(6);
  });

  test("B", () => {
    expect(
      maximumWealth([
        [1, 5],
        [7, 3],
        [3, 5],
      ])
    ).toEqual(10);
  });
  test("C", () => {
    expect(
      maximumWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ])
    ).toEqual(17);
  });
});
