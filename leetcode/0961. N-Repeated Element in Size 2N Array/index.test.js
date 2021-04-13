import repeatedNTimes from './index';

describe("repeatedNTimes", () => { 
  test('A',()=>{
    expect(repeatedNTimes([1,2,3,3])).toBe(3);
  })
  test('B', () => {
    expect(repeatedNTimes([2, 1, 2, 5, 3, 2 ])).toBe(2);
  })
  test('C', () => {
    expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toBe(5);
  })
})