const sortedSquares = (A) => {
  let arr = A.map(el => el ** 2)
  arr.sort((a, b) => a - b);
  return arr;
};

export default sortedSquares;