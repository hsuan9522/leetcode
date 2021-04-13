import minSubsequence from "./index";

describe("minSubsquence", () => {
  test("A", () => {
    expect(minSubsequence([4,3,10,9,8])).toEqual([10,9])
  })

  test("B", () => {
    expect(minSubsequence([4,4,7,6,7])).toEqual([7,7,6])
  })

  test("C", () => {
    expect(minSubsequence([6])).toEqual([6])
  })

  test("D", () =>{
    expect(minSubsequence([10,2,5])).toEqual([10])
  })

  test("E", () => {
    expect(minSubsequence([3,5])).toEqual([5])
  })

  test("F", () => {
    expect(minSubsequence([8, 8])).toEqual([8, 8])
  })
})