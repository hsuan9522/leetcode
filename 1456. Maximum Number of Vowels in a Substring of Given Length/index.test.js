import maxVowels from './index';

describe('maxVowels',()=>{
  test('A', ()=>{
    expect(maxVowels('abciiidef',3)).toBe(3);
  })

  test('B', () => {
    expect(maxVowels('aeiou',2)).toBe(2);
  })

  test('C', () => {
    expect(maxVowels('leetcode', 3)).toBe(2);
  })

  test('D', () => {
    expect(maxVowels('rhythms', 4)).toBe(0);
  })

  test('E', () => {
    expect(maxVowels('weallloveyou', 7)).toBe(4);
  })
})