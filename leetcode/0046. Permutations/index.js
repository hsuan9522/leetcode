const permute = (nums) => {
    let ans = []
    ans.push(nums[0])
    if(nums.length===1) return ans
    for(let i = 0; i < nums.length; i++) {
        console.log(nums)
        permute(nums.slice(i+1, nums.length+1))
    }
    console.log(ans)
};

console.log(permute([1, 2, 3]))

export default permute;
