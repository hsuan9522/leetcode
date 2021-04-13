const destCity = (paths) => {
  let ans;
  paths.forEach((el,index)=>{
    let tmp = [...paths];
    tmp.splice(index,1);
    try{
      if (tmp.findIndex(e => e[0] == el[1])<0){
        throw el[1];
      }
    }catch(e){
      ans = e;
      return e;
    }
  })
  return ans;
};

export default destCity;