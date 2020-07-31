const minDeletionSize = (A) => {
  
  const tmp = Array.from(A[0])
  let mapping = [];
  tmp.forEach((el,index)=>{
    let i = 1;
    mapping[index] = [];
    mapping[index].push(el)
    while (i !== A.length){
      mapping[index].push(A[i][index])
      i++;
    }
  })
  let ans = [];
  mapping.forEach((el, index)=>{
    for(let i=0; i<el.length-1; i++){
      if(el[i]>el[i+1]){
        ans.push(index)
        break;
      }
    }
  })
  return ans.length;
};

export default minDeletionSize;