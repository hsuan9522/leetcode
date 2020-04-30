
function TreeNode(val){
 this.val = val;
 this.left = this.right = null;
};

const arrayToTreeNode = (arr) => {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const tns = [root];

  for (let i = 1; i < arr.length; i += 2) {
   
    const tn = tns.shift();
    tn.left = arr[i] ? new TreeNode(arr[i]) : new TreeNode(null);
    tn.right = arr[i + 1] ? new TreeNode(arr[i + 1]) : new TreeNode(null);
    tns.push(tn.left);
    tns.push(tn.right);
  }

  return root;
}

export { arrayToTreeNode };