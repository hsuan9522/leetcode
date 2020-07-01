const reverse = (x) => {
  let xArray = Array.from(x.toString());
  xArray.reverse();
  let returnNum = 0;
  if (xArray[xArray.length - 1] == '-') {
    xArray[xArray.length - 1] = null;
    let tmp = xArray.join('');
    returnNum = tmp * -1;
  } else {
    returnNum = parseInt(xArray.join(''));
  }
  if (Math.pow(2, 31) < parseInt(returnNum) || Math.pow(2, 31) * -1 > parseInt(returnNum)) {
    return 0;
  } else {
    return returnNum;
  }
};

export default reverse;