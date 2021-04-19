const countMatches = (items, ruleKey, ruleValue) => {
    const map = {
        type: 0,
        color: 1,
        name: 2
    }
    return items.filter(el=> el[map[ruleKey]] === ruleValue).length
};

export default countMatches;
