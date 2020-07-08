const kthFactor = (n, k) => {
  let ans_r = [];
  let ans_l = [];
  let all = [];
  for(let i = 1; i < n/2+1; i++){
    if(n%i==0){
      if(!ans_l.includes(i)) {
        ans_r.push(i);
        if(!ans_r.includes(n/i)) ans_l.push(n/i);
      }else break;
    }
  }
  all = ans_r.concat(ans_l.reverse())
  if (n == 1) all = [1];
  return all[k-1] || -1;
};

export default kthFactor;