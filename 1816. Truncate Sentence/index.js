const truncateSentence = (s, k) => {
    const arr = s.split(' ').splice(0,k)
    return arr.join(' ')
};
export default truncateSentence;
