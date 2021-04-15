const reverseWords = (s) => {
    let tmp = s.split(' ');
    let arr = [];
    for (const i in tmp) {
        for (let j = tmp[i].length - 1; j >= 0; j--) {
            arr.push(tmp[i][j])
        }
        if (i != tmp.length - 1) arr.push(' ')
    }
    return arr.join('');
};


export default reverseWords;
