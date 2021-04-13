import diStringMatch from "./index.js";

describe("diStringMatch",()=>{
  test("A", () => {
    expect(diStringMatch('IDID')).toEqual([0, 4, 1, 3, 2]);
  });
  
  test("B", () => {
    expect(diStringMatch('III')).toEqual([0, 1, 2, 3]);
  });
  
  test("C", () => {
    expect(diStringMatch('DDI')).toEqual([3, 2, 0, 1]);
  });

})