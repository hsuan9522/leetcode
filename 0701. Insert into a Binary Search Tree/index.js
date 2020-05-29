import {TreeNode, arrayToTreeNode} from '../utils/index';

const insertIntoBST = (root, val) => {
  let point = root.val;
  if (val > point) {
    if (!root.right) {
      let tmp = new TreeNode(val)
      root.right = tmp;
    }
    else {
      insertIntoBST(root.right, val);
    }
  } else {
    if (!root.left) {
      let tmp = new TreeNode(val)
      root.left = tmp;
    }
    else {
      insertIntoBST(root.left, val);
    }
  }
  return root;
};

export default insertIntoBST;