import twoSum from './index';

describe('twoSum', ()=>{
  test('A', ()=>{
    expect(twoSum([2,7,11,15],9)).toEqual([0,1]);
  })

  test('B', ()=>{
    expect(twoSum([3, 3],6)).toEqual([0,1])
  })
})