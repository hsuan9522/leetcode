import canBeEqual from './index';

describe('canBeEqual',()=>{
  test('A',()=>{
    expect(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])).toBe(true);
  })

  test('B',()=>{
    expect(canBeEqual([7],[7])).toBe(true);
  })

  test('C',()=>{
    expect(canBeEqual([1, 12], [12, 1])).toBe(true);
  })

  test('D',()=>{
    expect(canBeEqual([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])).toBe(true);
  })

  test('E',()=>{
    expect(canBeEqual([3, 7, 9], [3, 7, 11])).toBe(false);
  })
})