//TODO Time Limit Exceeded
const minDays = (bloomDay, m, k) =>{
  let require = m*k;
  if(bloomDay.length<require) return -1;
  if(m*k ==1) return Math.min(...bloomDay);
  let ans = m*k;
  bloomDay = bloomDay.map(el=>{
    return  el-m*k <=0 ? 0 : el-m*k; 
  })
  while (!checkCanUse(bloomDay, m, k)){
    if (checkCanUse(bloomDay, m, k)){
      return ans;
    }else{
      let leftmin = findNonZero(bloomDay);
      ans+=leftmin;
      bloomDay = bloomDay.map(el=>{
        return el-leftmin<0?0:el-leftmin
      })
    }
  }
  return ans;
}
function findNonZero(array){
  let smallNonZero;
  array.forEach(el=>{
    if(el!==0){
      smallNonZero = smallNonZero? el<smallNonZero?el:smallNonZero : el
    }
  })
  return smallNonZero;
}

function checkCanUse(data, m ,k){
  let array = [...data]
  array.forEach((el,index) => {
    if(el==0){
      let tmp_k = k-1;
      for(let i = index+1; i<index+k; i++){
        if(array[i]==0){
          tmp_k--;
        }
      }
      if(tmp_k==0){
        for(let i =index; i<index+k ;i++){
          array[i] = -1;
        }
        m--;
      }
    }
  });
  if(m==0) return true;
  return false;
}
export default minDays;