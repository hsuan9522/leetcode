const findingUsersActiveMinutes = (logs, k) => {
    let counted = []
    let obj = {}
    let ans = new Array(k).fill(0)
    logs.forEach(el=>{
        if (!counted.includes(el.join("/"))) {
            counted.push(el.join("/"))
            obj[el[0]] = obj[el[0]] ? obj[el[0]]+1 : 1;
        }
    })
    Object.values(obj).forEach(el=>{
        ans[el-1]++
    })
    return ans
};
export default findingUsersActiveMinutes;
