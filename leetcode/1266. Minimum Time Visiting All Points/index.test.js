import minTimeToVisitAllPoints from './index';

describe('minTimeToVisitAllPoints',()=>{
  test('A',()=>{
    expect(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])).toBe(7);
  })

  test('B',()=>{
    expect(minTimeToVisitAllPoints([[3, 2], [-2, 2]])).toBe(5)
  })
})