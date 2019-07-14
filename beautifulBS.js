// https://www.hackerrank.com/challenges/beautiful-binary-string/problem

// Complete the beautifulBinaryString function below.
function beautifulBinaryString(b) {
  console.log(`${b.replace(/010/g, "")} ${b.replace(/010/g, "").length}`);
  return (b.length - b.replace(/010/g, "").length) / 3;
}

console.log(beautifulBinaryString("0101010"));
console.log(beautifulBinaryString("01100"));
