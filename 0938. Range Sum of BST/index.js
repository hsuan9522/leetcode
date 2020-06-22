const rangeSumBST = (root, L, R) => {

  if(!root) return 0;
  let right = root.right;
  let left = root.left;

  if (root.val <= R && root.val >= L) {
    return root.val + rangeSumBST(right, L, R) + rangeSumBST(left, L, R);
  } else {
    return rangeSumBST(right, L, R) + rangeSumBST(left, L, R);
  }
};

export default rangeSumBST;