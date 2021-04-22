const findSolution = (customfunction, z) => {
    let ans = [];
    for (let i = 1; i < z; i++) {
        for (let j = 1; j < z; j++) {
            if (customfunction.f(i, j) == z) {
                ans.push([i, j]);
            }
        }
    }
    return ans;
};


export default findSolution;
