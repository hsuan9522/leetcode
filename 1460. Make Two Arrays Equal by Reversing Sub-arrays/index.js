var canBeEqual = (target, arr) => {
  let x = target.sort((a, b)=> a - b).join('');
  let y = arr.sort((a, b)=> a - b).join('');
  if(x==y) return true;
  else return false;
};

export default canBeEqual;