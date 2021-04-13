const sortByBits = (arr) => {
  let tmp = [];
  arr.sort((a, b) =>{
    return a-b;
  })
  arr.forEach((e)=>{
    const num = e;
    let b = 0
    while(e){
      if(e>=2 && e%2!=0){
        b++;
      }else if(e==1){
        b++;
        e=0;
      }
      e = Math.floor(e / 2);
    }
    tmp.push({num:num, bits: b})
  })
  const ans = tmp.sort((a,b)=>{
    return a.bits-b.bits
  }).map(el=>el.num)

  return ans;
}

export default sortByBits;