const checkIfPangram = (sentence) => {
    if(sentence.length < 26) return false
    let count = 0
    for(let i = 97; i <=122; i++) {
        const character = String.fromCharCode(i)
        const regex = new RegExp(character, 'g')
        if (sentence.search(regex)!==-1) count++
    }
    if(count === 26) return true
    return false
};

export default checkIfPangram;
