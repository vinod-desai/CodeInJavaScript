// https://www.hackerrank.com/challenges/the-love-letter-mystery/problem

// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(s) {
  let count = 0;
  let i = 0;
  let j = s.length - 1;
  let start, end, diff;
  while (i < j) {
    start = s[i].charCodeAt(0);
    end = s[j].charCodeAt(0);

    diff = Math.abs(start - end);

    count = count + diff;
    i++;
    j--;
  }

  return count;
}

console.log(theLoveLetterMystery("abc"));
console.log(theLoveLetterMystery("abcba"));
console.log(theLoveLetterMystery("abcd"));
console.log(theLoveLetterMystery("cba"));
