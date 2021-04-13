const finalPrices = (prices) => {
  let ans = prices.map((el,index)=>{
    let tmp = null;
    for(let i = index+1; i < prices.length; i++){
      if(el>=prices[i]){
        tmp = el-prices[i];
        break;
      }
    }
    return tmp!==null? tmp : el;
  })
  return ans;
};

export default finalPrices;
