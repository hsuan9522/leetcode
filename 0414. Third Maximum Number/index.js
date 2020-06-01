const thirdMax = (nums) => {
  let tmp = [];
  for (const i in nums) {
    if (!tmp.includes(nums[i])) tmp.push(nums[i]);
  }
  tmp = tmp.sort((a, b) => a - b);

  if (nums.length >= 3) {
    if (tmp.length >= 3)
      return tmp[tmp.length - 3];
    else
      return tmp[tmp.length - 1];
  } else {
    return tmp[tmp.length - 1];
  }
};

export default thirdMax;