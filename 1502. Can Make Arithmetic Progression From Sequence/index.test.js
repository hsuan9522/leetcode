import canMakeArithmeticProgression from './index';

describe('canMakeArithmeticProgression',()=>{
  test('A',()=>{
    expect(canMakeArithmeticProgression([3, 5, 1])).toBe(true);
  })
  test('B',()=>{
    expect(canMakeArithmeticProgression([1,2,4])).toBe(false);
  })
})