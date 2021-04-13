import findMedianSortedArrays from './index';

describe('findMedianSortedArrays', ()=>{
  test('A', ()=>{
    expect(findMedianSortedArrays([1,2],[3])).toBe(2)
  })

  test('B', ()=>{
    expect(findMedianSortedArrays([1,2],[3,4])).toBe(2.5)
  })


  test('C', () => {
    expect(findMedianSortedArrays([3], [-2,-1])).toBe(-1)
  })
})