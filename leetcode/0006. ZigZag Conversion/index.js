const convert = (s, numRows) => {
    if(numRows === 1) return s
    let x = 0
    let y = 0
    let l = 0
    let arr = []
    while (l < s.length) {
        arr[x] = arr[x] || []
        arr[x][y] = s[l]
        if(x%(numRows-1) === 0 ){
            if(y%(numRows-1) === 0 && y!==0){
                x++
                y--
            }else {
                y++
            }
        } else {
            x++
            y--
        }
        l++
    }
    let ans = []
    for(let i = 0; i < numRows; i++){
        arr.forEach(el=>{
            if(el[i]) ans.push(el[i])
        })
    }
    return ans.join('')
};

export default convert;
