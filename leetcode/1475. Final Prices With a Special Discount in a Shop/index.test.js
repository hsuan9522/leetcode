import finalPrices from './index';

describe('finalPrices', () => {
  test('A', () => {
    expect(finalPrices([8, 4, 6, 2, 3])).toEqual([4, 2, 4, 2, 3])
  })

  test('B', () => {
    expect(finalPrices([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  test('C', () => {
    expect(finalPrices([10, 1, 1, 6])).toEqual([9, 0, 1, 6])
  })
})