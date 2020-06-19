import isPrefixOfWord from './index';

describe('isPrefixOfWord',()=>{
  test('A',()=>{
    expect(isPrefixOfWord("i love eating burger","burg")).toBe(4)
  })

  test('B', () => {
    expect(isPrefixOfWord("this problem is an easy problem", "pro")).toBe(2)
  })

  test('C', () => {
    expect(isPrefixOfWord("i am tired", "you")).toBe(-1)
  })

  test('D', () => {
    expect(isPrefixOfWord("i use triple pillow", "pill")).toBe(4)
  })
})