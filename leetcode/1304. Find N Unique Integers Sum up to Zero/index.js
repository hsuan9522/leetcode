var sumZero = (n) => {
  let ans = [];
  if(n%2!==0) ans.push(0)
  for(let i=1; i<=n/2; i>i++){
    ans.push(i);
    ans.push(-i);
  }
  return ans;
};

export default sumZero;