const countBalls = (lowLimit, highLimit) => {
  let ans = [];
  for (let i = lowLimit; i <= highLimit; i++) {
    const index = i
      .toString()
      .split("")
      .reduce((acc, el) => parseInt(acc) + parseInt(el));
    ans[index] = ans[index] ? ans[index] + 1 : 1;
  }
  ans = ans.filter((el) => el);
  return Math.max(...ans);
};

export default countBalls;
