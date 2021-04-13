const restoreString = (s, indices) => {
    let ans = []
    indices.forEach((el, index)=>{
        ans[el] = s[index]
    })
    return ans.join('')
};
export default restoreString;
