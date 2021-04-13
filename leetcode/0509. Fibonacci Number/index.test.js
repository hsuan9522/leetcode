import fib from './index';

describe('fib',()=>{
  test('A',()=>{
    expect(fib(2)).toBe(1);
  })

  test('B', () => {
    expect(fib(3)).toBe(2);
  })

  test('C', () => {
    expect(fib(4)).toBe(3);
  })
})