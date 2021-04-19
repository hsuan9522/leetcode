import checkIfPangram from "./index";

describe("checkIfPangram", () => {
  test("A", () => {
    expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).toEqual(true);
  });

  test("B", () => {
    expect(checkIfPangram('leetcode')).toEqual(false);
  });
});
