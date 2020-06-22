import maximum69Number from './index';

describe('maximum69Number',()=>{
  test('A',()=>{
    expect(maximum69Number(9669)).toBe(9969)
  })

  test('B', () => {
    expect(maximum69Number(9999)).toBe(9999)
  })
})