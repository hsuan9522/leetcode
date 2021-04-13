import truncateSentence from "./index";

describe("truncateSentence", () => {
  test("A", () => {
    expect(truncateSentence("Hello how are you Contestant", 4)).toEqual("Hello how are you");
  });

  test("B", () => {
    expect(truncateSentence("What is the solution to this problem", 4)).toEqual("What is the solution");
  });

  test("C", () => {
    expect(truncateSentence("chopper is not a tanuki", 5)).toEqual("chopper is not a tanuki");
  });
});
