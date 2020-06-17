import runningSum from './index';
import { run } from 'jest';

describe('runningSum',()=>{
  test('A',()=>{
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
  })

  test('B', () => {
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1,2,3,4,5])
  })
  test('C', () => {
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17])
  })
})