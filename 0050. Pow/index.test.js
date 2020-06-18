import myPow from './index';

describe('myPow',()=>{
  test('A',()=>{
    let num = 2;
    let ans =1024;
    expect(myPow(num.toFixed(5), 10)).toBe(ans.toFixed(5))
  })

  test('B', () => {
    let num = 2.1;
    let ans = 9.261;
    expect(myPow(num.toFixed(5), 3)).toBe(ans.toFixed(5))
  })

  test('C', () => {
    let num = 2;
    let ans = 0.25;
    expect(myPow(num.toFixed(5), -2)).toBe(ans.toFixed(5))
  })
})