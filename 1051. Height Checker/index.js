const heightChecker = (heights) => {
  const tmp = [...heights];
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      if (heights[i] < heights[j]) {
        let tmp = heights[i];
        heights[i] = heights[j];
        heights[j] = tmp;
      }
    }
  }
  let count = 0;
  for (const i in heights) {
    if (heights[i] != tmp[i]) {
      count++;
    }
  }
  return count;
};

export default heightChecker;