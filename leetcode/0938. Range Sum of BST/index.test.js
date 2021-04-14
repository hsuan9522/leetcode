import rangeSumBST from './index';
import { arrayToTreeNode } from '../../utils/index'

describe('rangeSumBST', () => {
  test('A', () => {
    expect(rangeSumBST(arrayToTreeNode([10, 5, 15, 3, 7, null, 18]), 7, 15)).toBe(32)
  })

  test('B', () => {
    expect(rangeSumBST(arrayToTreeNode([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 6, 10)).toBe(23)
  })
})