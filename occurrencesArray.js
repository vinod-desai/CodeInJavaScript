// Occurrences of an element in an array

const a = [-1, 1, 3, 2, 4, 2, 5, 6, 2, 2, 1, 8, 9];

// using linear search
function occurrences(n, elem) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] === elem) {
      count++;
    }
  }
  return count;
}

// console.log(occurrences(a.length, 1));

const sortedArray = a.sort((a, b) => (a > b ? 1 : -1));
// const sortedArray = a.sort((a, b) => (a < b ? 1 : -1));
console.log(sortedArray);

function binarySearch(arr, l, r, x) {
  let mid;
  if (r < 1) {
    return;
  }
  mid = parseInt((l + r) / 2);
  // console.log(mid);
  // console.log(typeof arr[mid]);
  if (arr[mid] === x) {
    // console.log(`${mid} ${arr[mid]} ${x}`);
    return mid;
  }
  if (arr[mid] > x) {
    return binarySearch(arr, l, mid - 1, x);
  } else {
    return binarySearch(arr, mid + 1, r, x);
  }
}

console.log(binarySearch(sortedArray, 0, sortedArray.length - 1, 9));
