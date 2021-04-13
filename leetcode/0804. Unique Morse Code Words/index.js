const uniqueMorseRepresentations = (words) => {
  const map = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let arr = [];
  words.forEach((el) => {
    let string = "";
    Array.from(el).forEach((e) => {
      string += map[e.charCodeAt() - 97];
    });
    arr.push(string);
  });
  return [...new Set(arr)].length;
};

export default uniqueMorseRepresentations;
