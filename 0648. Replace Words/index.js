const replaceWords = (dict, sentence) => {
  let arr = sentence.split(' ');
  for (const i in arr) {
    for (const j in dict) {
      let regex = '^' + dict[j];
      let re = new RegExp(regex, "g");
      if (arr[i].match(re)) {
        arr[i] = dict[j]
      }
    }
  }
  return arr.join(' ');
};

export default replaceWords;