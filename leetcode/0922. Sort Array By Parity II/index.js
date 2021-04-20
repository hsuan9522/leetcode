const sortArrayByParityII = (nums) => {
    let store = [[],[]]
    nums.forEach((el, index)=> {
        if(el%2 !== index%2) {
            store[index%2].push(index)
        }
    })
    store[0].forEach((el,index)=>{
        let tmp = nums[el]
        nums[el] = nums[store[1][index]]
        nums[store[1][index]] = tmp
    })
    return nums
};

export default sortArrayByParityII;
