// 1st and 2nd Smallest element

const arr = [2, 4, 6, 1, -2, 0, 1, 8, 3, 4, -3];
//const arr = [2, 2];

function findFirstTwoSmallNumber() {
  let firstSmall = (secondSmall = Infinity);
  const arraylen = arr.length;
  if (arraylen < 2) {
    console.log("Invalid Input");
    return;
  }
  for (let i = 0; i < arraylen; i++) {
    if (arr[i] < firstSmall) {
      secondSmall = firstSmall;
      firstSmall = arr[i];
    }
    if (arr[i] < secondSmall && arr[i] !== firstSmall) {
      secondSmall = arr[i];
    }
  }
  if (secondSmall === Infinity) {
    console.log(
      `First smallest element is: ${firstSmall} and There is no second smallest element`
    );
  } else {
    console.log(
      `First smallest element is: ${firstSmall} and Second smallest element is: ${secondSmall}`
    );
  }
}

findFirstTwoSmallNumber();
