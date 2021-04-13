const minSubsequence = (nums) =>{
  nums.sort((a,b)=>{
    return b-a;
  })
  if(nums.length<=1) return nums;
  let max = [nums[0]];
  nums.shift();
  let maxSum = max.reduce((a,b)=>{
    return a+b;
  })
  let otherSum = nums.reduce((a,b)=>{
    return a+b;
  })
  while(maxSum <= otherSum){
    max.push(nums[0]);
    nums.shift();
    maxSum = max.reduce((a, b) => {
      return a + b;
    })
    otherSum = nums.length==0 ? 0 : nums.reduce((a, b) => {
      return a + b;
    });
  }
  return max;
}
export default minSubsequence