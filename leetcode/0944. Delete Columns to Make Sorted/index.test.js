import minDeletionSize from './index';

describe('minDeletionSize',()=>{
  test('A',()=>{
    expect(minDeletionSize(["zyx", "wvu", "tsr"])).toBe(3)
  })

  test('B',()=>{
    expect(minDeletionSize(["cba", "daf", "ghi"])).toBe(1);
  })

  test('C',()=>{
    expect(minDeletionSize(["a", "b"])).toBe(0)
  })
})