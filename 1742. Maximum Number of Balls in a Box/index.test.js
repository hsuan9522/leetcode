import countBalls from "./index";

describe("countBalls", () => {
  test("A", () => {
    expect(countBalls(1, 10)).toEqual(2);
  });

  test("B", () => {
    expect(countBalls(5, 15)).toEqual(2);
  });

  test("C", () => {
    expect(countBalls(19, 28)).toEqual(2);
  });
});
