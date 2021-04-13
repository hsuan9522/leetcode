const runningSum = (nums)=>{
  let array = [...nums];
  let ans = [nums[0]]
  for(let i=1;i <array.length; i++){
    ans.push(array[i]+ans[ans.length-1])
  }
  
  return ans
}
export default runningSum;