// Find a triplet that sum to a given value
const a = [1, 4, 45, 6, 10, 8];
const sum = 22;

function find3Number() {
  let arrLen = a.length;
  for (let i = 0; i < arrLen - 2; i++) {
    for (let j = i + 1; j < arrLen - 1; j++) {
      for (let k = j + 1; k < arrLen; k++) {
        if (a[i] + a[j] + a[k] === sum) {
          console.log(`3 Numbers are ${a[i]}, ${a[j]}, ${a[k]}`);
          return;
        }
      }
    }
  }
}

find3Number();
