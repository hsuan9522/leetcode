const arraySign = (nums) => {
    if (nums.includes(0)) return 0
    const sum = nums.reduce((acc, el) => {
        return acc * el
    })
    return sum > 0 ? 1 : -1
};

export default arraySign;
