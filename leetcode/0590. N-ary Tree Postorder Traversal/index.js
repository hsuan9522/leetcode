const postorder = (root) => {
    if (!root) return []
    else if (root.children.length === 0) return [root.val]
    let answer = []
    answer.push(seek(root, answer))
    function seek(node, ans) {
        if (node.children.length === 0) {
            ans.push(node.val)
            return node.val
        }

        node.children.forEach((el, index) => {
            if (el.children.length > 0) {
                ans.push(seek(el, ans))
            } else {
                ans.push(el.val)
                return el.val
            }
        })
        return node.val
    }
    return answer
};


export default postorder;
