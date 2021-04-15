//在leetCode上Output Limit Exceeded
//TODO 要重新想解法
const longestPalindrome = (s) => {
  if(s=='') return '';
  let array = Array.from(s);
  let ans = [];
  let x = 0;
  let index = []
  for(let i=0; i<array.length; i++){
    if(array[i] == array[i+2]){
      ans[x] = [array[i], array[i+1], array[i+2]];
      index[x] = i+1;
      for (let j = i + 3; j < array.length; j++) {
        if (array[j] == array[2*index[x]-j]){
          
          ans[x].push(array[j]);
          ans[x].unshift(array[2 * index[x] - j]);
        }else{
          break;
        }
      }
      x++;
    } 
    if (array[i] == array[i + 1]) {
      ans[x] = [array[i], array[i + 1]]
      index[x] = [i, i + 1]
      for (let j = i + 2; j < array.length; j++) {
        if (array[j] == array[index[x][0] + index[x][1] - j]) {
          ans[x].push(array[j]);
          ans[x].unshift(array[index[x][0] + index[x][1] - j])
        }else{
          break;
        }
      }
      x++;
    }
  }
  let tmp = [];
  ans.forEach(el=>{
    if(el.length>tmp.length){
      tmp = el
    }
  })
  return tmp.toString().replace(/,/g, '') || Array.from(s)[0];
}; 

// console.log(longestPalindrome("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"));
export default longestPalindrome;