const repeatedNTimes = (A) => {
  let tmp = {}
  A.forEach(el => {
    tmp[el] = tmp[el] ? tmp[el] + 1 : 1;
  })

  let count = A.length / 2;

  for (let i in tmp) {
    if (tmp[i] === count) return parseInt(i);
  }
};

export default repeatedNTimes;