const selfDividingNumbers = (left, right) => {
  let ans = []
  for (let i = left; i <= right; i++) {
    let check = 0;
    let tmp = i;
    while (tmp != 0) {
      if (tmp % 10 == 0) {
        check++;
        break;
      }
      if (i % (tmp % 10) != 0) {
        check++;
      }
      tmp = Math.floor(tmp / 10);
    }
    if (check == 0) ans.push(i);
  }
  return ans;
};

export default selfDividingNumbers;