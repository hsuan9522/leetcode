import dayOfWeek from './index';
import dayOfTheWeek from './index';

describe('dayOfWeek',()=>{
  test('A',()=>{
    expect(dayOfTheWeek(31,8,2019)).toBe('Saturday');
  })

  test('B',()=>{
    expect(dayOfTheWeek(18,7,1999)).toBe('Sunday');
  })

  test('C',()=>{
    expect(dayOfTheWeek(15,8,1993)).toBe('Sunday')
  })
})