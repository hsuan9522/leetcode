import countMatches from "./index";

describe("countMatches", () => {
  test("A", () => {
    expect(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], 'color', 'silver')).toEqual(1);
  });

  test("B", () => {
    expect(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], 'type', 'phone')).toEqual(2);
  });

});
