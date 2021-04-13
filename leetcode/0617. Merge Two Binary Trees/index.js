function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const mergeTrees = (t1, t2) => {
  
  if (!t1 && !t2) return null;

  if (!t1 || !t2) return t1 || t2;

  let base = new TreeNode(null);
  base.val = t1.val + t2.val;
  base.left = mergeTrees(t1.left, t2.left);
  base.right = mergeTrees(t1.right, t2.right);
  return base;
}

export default mergeTrees;