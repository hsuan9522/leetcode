const numIdenticalPairs = (nums) => {
    let ans = 0;
    nums.forEach((el,index)=>{
        for(let i = index+1 ; i < nums.length ; i++){
            if(el === nums[i]){
                ans++
            }
        }
    })
    return ans
};

export default numIdenticalPairs;
