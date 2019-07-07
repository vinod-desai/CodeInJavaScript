const str = "BACDGABCDA",
  pat = "ABCD";
// const str = "AAABABAA", pat = "AABA";

function search(m, n) {
  // console.log(`${m} ${n} ${str.split("")}`);
  let indPosArray = [],
    sortedPat;
  sortedPat = pat
    .split("")
    .sort()
    .join("");

  // console.log(patArray);
  for (let i = 0; i < m; i++) {
    /* console.log(
      `${str
        .substring(i, n + i)
        .split("")
        .sort()
        .join("")} ${sortedPat}`
    ); */
    /* console.log(
      typeof str
        .substring(i, n + i)
        .split("")
        .sort()
        .join("")
    ); */
    /* console.log(
      str
        .substring(i, n + i)
        .split("")
        .sort()
        .join("") === sortedPat
    ); */
    if (
      str
        .substring(i, n + i)
        .split("")
        .sort()
        .join("") === sortedPat
    ) {
      indPosArray.push(i);
    }
  }
  console.log(indPosArray);
}

search(str.length, pat.length);
