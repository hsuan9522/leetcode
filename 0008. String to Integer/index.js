const myAtoi = (s) => {
    s = s.trim();
    if(s===''){
        return 0;
    }else if(s.length===1) {
        if(/^\D/g.test(s)) return 0
    }
    let ans;
    if(/^\D/g.test(s) && s[0]!=='-' && s[0]!=='+'){
        return 0
    }else if((s[0]==='-' || s[0]==='+') && /^\D/g.test(s.substring(1, s.length))){
        return 0;
    }else{
        s.replace(/(?![-+\d]).*/g, "");
        ans = parseInt(s)
        if(ans>=2**31){
            return 2147483647;
        }else if(ans<=(-2)**31){
            return -2147483648;
        }else {
            return parseInt(s)
        }
    }
}

export default myAtoi;
console.log(myAtoi(" +"));
let x = "d-123 -13sdfa";
// console.log(x.match(/-{1}(\d+)/g));
console.log((-2)**31);
