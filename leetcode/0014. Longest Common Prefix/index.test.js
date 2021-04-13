import longestCommonPrefix from "./index";

describe("longestCommonPrefix", () => {
  test("A", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
  });

  test("B", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("C", () => {
    expect(longestCommonPrefix(["a"])).toBe("a");
  });

});