import { encode, decode } from './index';
describe('TinyURL', ()=>{
  test('A',()=>{
    expect(decode(encode("https://leetcode.com/problems/design-tinyurl"))).toBe("https://leetcode.com/problems/design-tinyurl")
  })
})