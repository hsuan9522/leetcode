const reverseWords = (s) =>{
  let array = s.split(' ');
  let ans = [];
  for(let i = array.length-1; i>=0 ;i--){
    if(array[i]!='') ans.push(array[i])
  }
  return ans.join(' ');
}

export default reverseWords;