import reverseWords from "./index";

describe("reverseWords", () => {
  test("A", () => {
    expect(reverseWords("Let's take LeetCode contest")).toEqual("s'teL ekat edoCteeL tsetnoc");
  });

  test("B", () => {
    expect(reverseWords("God Ding")).toEqual("doG gniD");
  });
});
