import hammingDistance from "./index"

describe("hammingDistance", () => {
  test("A", () => {
    expect(hammingDistance(1,4)).toBe(2);
  })

  test("B", ()=>{
    expect(hammingDistance(3,1)).toBe(1);
  })

  test("C", () => {
    expect(hammingDistance(4, 2)).toBe(2);
  })
})