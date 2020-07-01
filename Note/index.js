//解決浮點數加法

function sum(a, b) {
  let tmpA = a.toString();
  let tmpB = b.toString();
  tmpA = tmpA.replace(/^.*\./g, '');
  tmpB = tmpB.replace(/^.*\./g, '');
  a = a * 10 ** tmpA.length;
  b = b * 10 ** tmpB.length;
  let sum = a + b;
  return tmpA.length >= tmpB.length ? sum / 10 ** tmpA.length : sum / 10 ** tmpB.length;
}

console.log(sum(0.1, 0.7))