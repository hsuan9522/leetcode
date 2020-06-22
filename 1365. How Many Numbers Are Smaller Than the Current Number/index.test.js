import smallerNumbersThanCurrent from './index';

describe('smallerNumbersThanCurrent',()=>{
  test('A',()=>{
    expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3])
  })

  test('B', () => {
    expect(smallerNumbersThanCurrent([6, 5, 4, 8])).toEqual([2, 1, 0, 3])
  })

  test('C', () => {
    expect(smallerNumbersThanCurrent([7, 7, 7, 7])).toEqual([0, 0, 0, 0])
  })
})