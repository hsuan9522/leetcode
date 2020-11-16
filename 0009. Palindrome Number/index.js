const isPalindrome = (x) => {
  let arrayX = Array.from(x.toString());
  let reverseX = arrayX.reverse();
  if (x.toString() == reverseX.join("")) {
    return true;
  } else {
    return false;
  }
};

export default isPalindrome;