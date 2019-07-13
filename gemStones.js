// https://www.hackerrank.com/challenges/gem-stones/problem

// Complete the gemstones function below.
function gemstones(arr) {
  let gemStones = arr[0].split("");
  let uniq = [...new Set(gemStones)];
  let len = arr.length;
  let len2 = uniq.length;
  let temp = [];
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len2; j++) {
      if (arr[i].indexOf(uniq[j]) === -1) {
        temp.push(uniq[j]); // Contains elements to be removed
      }
    }
  }
  temp = [...new Set(temp)]; // Remove Duplicate elements
  for (let k = 0; k < temp.length; k++) {
    uniq.splice(uniq.indexOf(temp[k]), 1);
  }
  return uniq.length;
  // return uniq;
}

console.log(gemstones(["abcdde", "baccd", "eeabg"]));
console.log(gemstones(["basdfj", "asdlkjfdjsa", "bnafvfnsd", "oafhdlasd"]));
