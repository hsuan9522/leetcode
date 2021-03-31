import uniqueMorseRepresentations from "./index";

describe("uniqueMorseRepresentations", () => {
  test("A", () => {
    expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toEqual(2);
  });
});
