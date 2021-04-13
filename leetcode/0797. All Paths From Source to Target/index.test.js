import allPathsSourceTarget from "./index";

describe("allPathsSourceTarget", () => {
  test("A", () => {
    expect(allPathsSourceTarget([[1, 2], [3], [3], []])).toEqual([
      [0, 1, 3],
      [0, 2, 3],
    ]);
  });

  test("B", () => {
    expect(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])).toEqual([
      [0, 4],
      [0, 3, 4],
      [0, 1, 3, 4],
      [0, 1, 2, 3, 4],
      [0, 1, 4],
    ]);
  });

  test("C", () => {
    expect(allPathsSourceTarget([[1], []])).toEqual([[0, 1]]);
  });

  test("D", () => {
    expect(allPathsSourceTarget([[1, 2, 3], [2], [3], []])).toEqual([
      [0, 1, 2, 3],
      [0, 2, 3],
      [0, 3],
    ]);
  });
  test("E", () => {
    expect(allPathsSourceTarget([[1, 3], [2], [3], []])).toEqual([
      [0, 1, 2, 3],
      [0, 3],
    ]);
  });

  test("F", () => {
    expect(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [], [4], []])).toEqual([
      [0, 4],
      [0, 3, 4],
      [0, 1, 3, 4],
      [0, 1, 4],
    ]);
  });

  test("G", () => {
    expect(allPathsSourceTarget([[2], [], [1]])).toEqual([[0, 2]]);
  });

});
