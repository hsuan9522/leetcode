const stringMatching = (words) => {
  let ans = [];
  words.forEach((el,index)=>{
    for(let i=0; i<words.length; i++){
      if (index !=i && words[i].includes(el) && !ans.includes(el)){
        ans.push(el);
      }
    }
  })
  return ans;
};


console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]))
export default stringMatching;