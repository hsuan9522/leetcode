import lengthOfLongestSubstring from './index';

describe('lengthOfLongestSubstring', ()=>{
  test('A', ()=>{
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  })

  test('B', ()=>{
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  })

  test('C',() => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
})