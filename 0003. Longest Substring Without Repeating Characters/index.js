const lengthOfLongestSubstring = (s) => {
  let array = Array.from(s);
  let ans = []
  for(let i=0; i<array.length; i++){
    ans[i]=[]
    ans[i].push(array[i])
    for(let j=i+1; j<array.length; j++){
      if(!ans[i].includes(array[j])){
        ans[i].push(array[j])
      }else{
        break;
      }
    }
  }
  let ansLen = 0;
  ans.forEach(el=>{
    if(el.length>ansLen){
      ansLen = el.length;
    }
  })
  return ansLen;
};

export default lengthOfLongestSubstring;