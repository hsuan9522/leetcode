import insertIntoBST from './index';
import { treeNodeToArray, arrayToTreeNode} from '../../utils/index'

describe('insertIntoBST',()=>{
  let inputTree = arrayToTreeNode([4, 2, 7, 1, 3])
  let ansTree = treeNodeToArray(arrayToTreeNode([4,2,7,1,3,5]))
  test('A', ()=>{
    let myAns = insertIntoBST(inputTree, 5);
    myAns = treeNodeToArray(myAns);
    expect(myAns).toEqual(ansTree)
  })
  
})