// 不能用reduce，題目有說不能重新allocate a new array
const removeDuplicates = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};

export default removeDuplicates;
