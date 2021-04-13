import busyStudent from './index';

describe('busyStudent',()=>{
  test('A',()=>{
    expect(busyStudent([1,2,3],[3,2,7],4)).toBe(12);
  })

  test('B',()=>{
    expect(busyStudent([4],[4],4)).toBe(1)
  })
})