/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = (S) => {
  let n = S.length+1;
  let array = []
  let ans = [];
  for (let i = 0; i < n; i++) {
    array[i] = i;
  }
  for(let i in S){
    switch(S[i]){
      case 'I':
        ans.push(array[0]);
        array.shift();
        break;
      case 'D':
        ans.push(array[array.length - 1]);
        array.pop();
        break;
    }
  }
  ans.push(array[0]);
  return ans;
};
export default diStringMatch;