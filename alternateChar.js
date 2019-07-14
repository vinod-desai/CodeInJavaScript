// https://www.hackerrank.com/challenges/alternating-characters/

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let arrChar = s.split("");
  let len = arrChar.length,
    count = 0;
  for (let i = 1; i < len; i++) {
    if (arrChar[i - 1] === arrChar[i]) {
      count = count + 1;
    }
  }
  return count;
}

console.log(alternatingCharacters("AAAA"));
console.log(alternatingCharacters("BBBBB"));
console.log(alternatingCharacters("ABABABAB"));
console.log(alternatingCharacters("BABABA"));
console.log(alternatingCharacters("AAABBB"));
