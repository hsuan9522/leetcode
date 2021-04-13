import singleNumber from './index';

describe('singleNumber',()=>{
  test('A',()=>{
    expect(singleNumber([1, 2, 1, 3, 2, 5])).toEqual([3,5])
  })
})