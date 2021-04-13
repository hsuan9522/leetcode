import minDays from './index';

describe('minDays',()=>{
  test('A',()=>{
    expect(minDays([1, 10, 3, 10, 2],3,1)).toBe(3)
  })

  test('B', () => {
    expect(minDays([1, 10, 3, 10, 2], 3, 2)).toBe(-1)
  })

  test('C', () => {
    expect(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)).toBe(12)
  })

  test('D', () => {
    expect(minDays([1000000000, 1000000000], 1, 1)).toBe(1000000000)
  })

  test('E', () => {
    expect(minDays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4, 2)).toBe(9)
  })
})