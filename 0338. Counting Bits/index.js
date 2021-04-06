const countBits = (num) => {
    let ans = []
    for (let i = 0; i <= num; i++) {
        ans[i] = root(i, 0)
    }
    function root(num, count) {
        if (num === 0) {
            return count;
        } else if (num % 2 === 1) {
            count++;
        }
        return root(Math.floor(num / 2), count)
    }
    return ans
};
export default countBits;

