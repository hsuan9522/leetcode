const myPow = (x, n) =>{
  if (n >= 0) {
    return Math.pow(x, n).toFixed(5)
  } else {
    return Math.pow(1 / x, n * -1).toFixed(5)
  }
}

export default myPow;