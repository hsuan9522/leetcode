const maximumWealth = (accounts) => {
    const ans = accounts.map(el => {
        return el.reduce((acc, a) => a + acc)
    })
    const max = Math.max(...ans)
    return max
};

export default maximumWealth;
