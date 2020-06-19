const maxProduct = (nums) =>{
  nums.sort((a,b)=>{
    return b-a;
  })
  return nums[0] * nums[1] - nums[0] - nums[1]+1
}
export default maxProduct;