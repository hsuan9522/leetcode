import maxProduct from './index';

describe('maxProduct',()=>{
  test('A',()=>{
    expect(maxProduct([3, 4, 5, 2])).toBe(12)
  })

  test('B', () => {
    expect(maxProduct([1, 5, 4, 5])).toBe(16)
  })

  test('C', () => {
    expect(maxProduct([3, 7])).toBe(12)
  })
})