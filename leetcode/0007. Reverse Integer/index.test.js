import reverse from './index';

describe('reverse', ()=>{
  test('A',()=>{
    expect(reverse(123)).toBe(321);
  })

  test('B',()=>{
    expect(reverse(-123)).toBe(-321);
  })

  test('C',()=>{
    expect(reverse(120)).toBe(21);
  })
})