const replaceElements = (arr) => {
  let tmp = [...arr];
  let ans = [];
  for(let i = 0; i < arr.length; i++){
    if(i===arr.length-1) {
      ans.push(-1);
      break;
    }
    tmp.shift();
    ans.push(Math.max(...tmp))
  }
  return ans;
};
export default replaceElements;