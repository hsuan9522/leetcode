
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
    tn.left = arr[i] ? new TreeNode(arr[i]) : null;
    tn.right = arr[i + 1] ? new TreeNode(arr[i + 1]) : null;
    tns.push(tn.left);
    tns.push(tn.right);
  }

  return root;
}

const treeNodeToArray = (tree) =>{
  let array = []
  let point = tree;
  if(!point) return false;
  array.push(point.val);
  array.push(treeNodeToArray(point.left));
  array.push(treeNodeToArray(point.right));
  
  return array.filter(el=>el).flat();
}


function nthPow(n,val,ans){
  if(n===1) return val;
  if (val === 1 || val % n != 0) return ans;
  return nthPow(n, val/n, ++ans)
}

export { TreeNode, arrayToTreeNode, nthPow, treeNodeToArray };