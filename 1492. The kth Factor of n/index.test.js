import kthFactor from './index';

describe('kthFactor',()=>{
  test('A',()=>{
    expect(kthFactor(12,3)).toBe(3)
  })

  test('B',()=>{
    expect(kthFactor(7,2)).toBe(7)
  })

  test('C',()=>{
    expect(kthFactor(4,4)).toBe(-1);
  })

  test('D',()=>{
    expect(kthFactor(1,1)).toBe(1)
  })

  test('E',()=>{
    expect(kthFactor(1000,3)).toBe(4)
  })

  test('F',()=>{
    expect(kthFactor(4,4)).toBe(-1)
  })
})