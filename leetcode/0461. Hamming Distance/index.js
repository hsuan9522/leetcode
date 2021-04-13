import { nthPow } from '../utils/index'

const hammingDistance = (x,y) => {
  let difference = x^y;
  if(difference==1) return 1;
  let array=[];
  while (difference>=2){
    const pow = nthPow(2, difference, 0)
    array[pow] =1;
    difference = difference - (2 ** pow);
  }
  let ans = 0;
  array.forEach(el=>{
    if(el!=='') ans++;
  })
  return ans;
}

export default hammingDistance;