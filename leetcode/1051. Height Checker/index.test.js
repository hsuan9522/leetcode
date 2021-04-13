import heightChecker from './index';

describe('heightChecker',()=>{
  test('A', ()=>{
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
  })

  test('B', ()=>{
    expect(heightChecker([5, 1, 2, 3, 4])).toBe(5);
  })

  test('C', ()=>{
    expect(heightChecker([1, 2, 3, 4, 5])).toBe(0)
  })
})