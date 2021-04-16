
const deepestLeavesSum = (root) => {
    function dfs(node, i, preVal, arr) {
        if (node.left) {
            dfs(node.left, i + 1, node.left.val, arr)
        }
        if (node.right) {
            dfs(node.right, i + 1, node.right.val, arr)
        }
        if (!node.left && !node.right) {
            arr.push({ idx: i, val: preVal })
        }
        return arr
    }
    let ansArr = dfs(root, 0, root.val, []).sort((a, b) => b.idx - a.idx).filter
    const deepIdx = ansArr[0].idx

    return ansArr.reduce((acc, el) => {
        if (el.idx === deepIdx) return acc + el.val
        else return acc
    }, 0)
};

export default deepestLeavesSum;