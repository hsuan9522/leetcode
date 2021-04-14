import addTwoNumbers from './index';
import {arrayToListNode, listNodeToArray} from '../../utils/index';
describe('addTwoNumber', ()=>{
  test('A',()=>{
    let a = arrayToListNode([2,4,3]);
    let b = arrayToListNode([5,6,4]);
    expect(listNodeToArray(addTwoNumbers(a,b))).toEqual([7,0,8])
  })
  
  test('B',()=> {
    let a = arrayToListNode([1, , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);0
    let b = arrayToListNode([5,6,4]);
    expect(listNodeToArray(addTwoNumbers(a, b))).toEqual([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
  })

  test('C', () => {
    let a = arrayToListNode([5]);
    let b = arrayToListNode([5]);
    expect(listNodeToArray(addTwoNumbers(a, b))).toEqual([0,1])
  })

  test('C', () => {
    let a = arrayToListNode([9,9]);
    let b = arrayToListNode([9]);
    expect(listNodeToArray(addTwoNumbers(a, b))).toEqual([8, 0, 1])
  })
})