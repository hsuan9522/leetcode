const twoSum = (nums, target) => {
  let ans;
  for(let i=0; i<nums.length; i++){
    ans=[];
    for(let j=i+1; j<nums.length; j++){
      const left = target - nums[i];
      if(nums[j]===left) {
        ans = [i,j];
        break;
      }
    }
    if(ans.length>0) break;
  }
  return ans;
};

export default twoSum;