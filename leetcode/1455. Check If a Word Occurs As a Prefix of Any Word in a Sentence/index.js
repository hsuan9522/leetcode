const isPrefixOfWord = (sentence, searchWord)=> {
  let array = sentence.split(' ');

  for(let i=0; i<array.length; i++){
    let re = new RegExp(`^${searchWord}.*`, 'g')
    if (array[i].match(re)) return i+1;
  }
  return -1
};

export default isPrefixOfWord;