import thirdMax from './index';

describe('thirdMax',()=>{
  test('A', ()=>{
    expect(thirdMax([3, 2, 1])).toBe(1);
  })

  test('B', ()=>{
    expect(thirdMax([1,2])).toBe(2);
  })

  test('C', ()=>{
    expect(thirdMax([2,2,3,1])).toBe(1);
  })
})