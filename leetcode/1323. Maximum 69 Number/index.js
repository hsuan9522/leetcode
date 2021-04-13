const maximum69Number = (num) => {
  let arr = Array.from(num.toString());
  let s = true;
  let count = 0;

  while (s && count < arr.length) {
    if (arr[count] == '6') {
      arr[count] = '9'
      s = false;
    }
    count++;
  }
  return parseInt(arr.join(''));
};

export default maximum69Number;