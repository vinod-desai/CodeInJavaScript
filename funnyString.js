// HackerRank coding challenge
// https://www.hackerrank.com/challenges/funny-string/problem

// Complete the funnyString function below.
function funnyString(s) {
  let r = s
    .split("")
    .reverse()
    .join("");
  let len = s.length;
  let flag = true;
  // console.log(`${r}`);
  for (let i = 1; i < len; i++) {
    /* console.log(
      ` ${s[i].charCodeAt(0) - s[i - 1].charCodeAt(0)} ${r[i].charCodeAt(0) -
        r[i - 1].charCodeAt(0)} ${r[i]}`
    ); */
    if (
      Math.abs(s[i].charCodeAt(0) - s[i - 1].charCodeAt(0)) !==
      Math.abs(r[i].charCodeAt(0) - r[i - 1].charCodeAt(0))
    ) {
      // console.log(`${s[i]} ${s[i - 1]} ${r[i]} ${r[i - 1]} ${i}`);
      flag = false;
      break;
    }
  }

  if (flag) {
    return "Funny";
  }

  return "Not Funny";
}

console.log(funnyString("acxz"));
console.log(funnyString("bcxz"));
console.log(funnyString("ovyvzvptyvpvpxyztlrztsrztztqvrxtxuxq"));
