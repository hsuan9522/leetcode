//Sliding Window Algorithm
const maxVowels = (s, k) => {
  if(!s.match(/a|e|i|o|u/g)) return 0;
  let array = Array.from(s);
  let ans = 0;

  for(let i=0; i<k; i++){
    if (['a', 'e', 'i', 'o', 'u'].includes(array[i])) {
      ans++
    }
  } 
  let tmp = ans;
  for(let i=k; i<array.length; i++){
    if (['a', 'e', 'i', 'o', 'u'].includes(array[i])){
      tmp++;
    }
    if (['a', 'e', 'i', 'o', 'u'].includes(array[i - k])) {
      tmp--;
    }
    ans = tmp > ans ? tmp :ans;
  }
  
  return ans;
};

export default maxVowels;