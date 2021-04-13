import removeElement from './index'

describe('removeElement',()=>{
  test('A',()=>{
    expect(removeElement([3,2,2,3],3)).toEqual([2,2])
  })

  test('B',()=>{
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2],2)).toEqual([0,1,3,0,4])
  })
})