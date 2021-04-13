import reverseWords from './index';

describe('reverseWords',()=>{
  test('A',()=>{
    expect(reverseWords("the sky is blue")).toBe("blue is sky the")
  })

  test('B', () => {
    expect(reverseWords("  hello world!  ")).toBe("world! hello")
  })

  test('C', () => {
    expect(reverseWords("a good   example")).toBe("example good a")
  })
})