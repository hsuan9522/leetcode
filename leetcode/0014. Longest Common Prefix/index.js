const longestCommonPrefix = (strs) => {
    if (strs.length == 0) return "";

    let word = strs[0];
    strs.forEach(el=>{
        word = el.length < word.length ? el : word
    })
    let index = 1;
    let ansIdx = 0;
    while(index <= word.length) {
        let count = 0;
        for(let i=0;i<strs.length;i++) {
            if (strs[i].substring(0,index) == word.substring(0, index)) {
                count++;
                ansIdx = count == strs.length? index: ansIdx;
            }else{
                break
            }
        }
        index++;
    }
    return word.substring(0,ansIdx);
}

export default longestCommonPrefix;