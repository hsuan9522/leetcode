const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies)
    const ans = candies.map(el=>{
        if(el+extraCandies >= max){
            return true
        }
        return false
    })
    return ans
};

export default kidsWithCandies;