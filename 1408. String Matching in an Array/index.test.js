import stringMatching from './index';

describe('stringMatching',()=>{
  test('A',()=>{
    expect(stringMatching(["mass", "as", "hero", "superhero"])).toEqual(["as", "hero"])
  })
  
  test('B',()=>{
    expect(stringMatching(["leetcode", "et", "code"])).toEqual(["et", "code"])
  })

  test('C',()=>{
    expect(stringMatching(["blue", "green", "bu"])).toEqual([])
  })

  test('D',()=>{
    expect(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"])).toEqual(["leetcode", "od", "am"])
  })
})