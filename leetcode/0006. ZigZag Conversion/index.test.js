import convert from "./index";

describe("convert", () => {
  test("A", () => {
    expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
  });

  test("B", () => {
    expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  });

  test("C", () => {
    expect(convert('A', 1)).toEqual('A');
  });
  test("D", () => {
    expect(convert('AB', 1)).toEqual('AB');
  });
});
