const singleNumber = (nums) => {
  let stash = [];
  for(const i in nums){
    let findIdx = stash.findIndex(el=>el===nums[i])
    if(findIdx!=-1){
      stash.splice(findIdx,1);
    }else{
      stash.push(nums[i]);
    }
  }
  return stash;
};

export default singleNumber;