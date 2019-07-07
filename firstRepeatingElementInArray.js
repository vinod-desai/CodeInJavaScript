// Find the first repeating element in an array

const a = [1, 3, 2, 5, 8, 7, 4, 9];

function repeatingElement() {
  const len = a.length;
  let found = false;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (a[i] === a[j]) {
        found = true;
        console.log(`First Repeating Element ${a[i]} and Index is ${i}`);
        return;
      }
    }
  }
  if (!found) {
    console.log("No duplicate element in this array");
  }
}

repeatingElement();
