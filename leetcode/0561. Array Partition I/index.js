const arrayPairSum = (nums) =>{
  let ans = 0;
  nums.sort((a,b)=>{
    return a-b;
  })
  for(let i=0; i<nums.length; i+=2){
    ans+=nums[i];
  }
  return ans;
}

export default arrayPairSum;