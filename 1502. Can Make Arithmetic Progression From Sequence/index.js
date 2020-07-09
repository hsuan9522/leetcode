const canMakeArithmeticProgression = (arr) => {
  arr.sort((a, b) =>a-b);
  let dif = arr[1]-arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i+1]-arr[i]!==dif && i!=arr.length-1) return false; 
  }
  return true;
};
export default canMakeArithmeticProgression;