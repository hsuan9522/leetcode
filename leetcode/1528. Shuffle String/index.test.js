import restoreString from "./index";

describe("restoreString", () => {
  test("A", () => {
    expect(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])).toEqual('leetcode');
  });

  test("B", () => {
    expect(restoreString('abc', [0, 1, 2])).toEqual('abc');
  });

  test("C", () => {
    expect(restoreString('aiohn', [3, 1, 4, 2, 0])).toEqual('nihao');
  });

  test("D", () => {
    expect(restoreString('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5])).toEqual('arigatou');
  });

  test("E", () => {
    expect(restoreString('art', [1, 0, 2])).toEqual('rat');
  });
});
