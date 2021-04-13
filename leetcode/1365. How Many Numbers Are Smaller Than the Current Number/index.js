const smallerNumbersThanCurrent = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      ans[i] = ans[i] ? ans[i] : 0;
      ans[j] = ans[j] ? ans[j] : 0;
      if (nums[i] > nums[j]) {
        ans[i]++;
      } else if (nums[i] < nums[j]) {
        ans[j]++;
      }
    }
  }
  return ans;
};

export default smallerNumbersThanCurrent;