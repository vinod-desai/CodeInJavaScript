// convert uppercase letter to lowercase and vice-versa.

let str = "MicroSoft"; // Output: mICROsOFT
str = str.split("");
const strlen = str.length;
for (let i = 0; i < strlen; i++) {
  if (str[i] >= "A" && str[i] <= "Z") {
    // console.log(str[i].toLowerCase());
    str[i] = str[i].toLowerCase();
  } else {
    str[i] = str[i].toUpperCase();
  }
}

console.log(str.join(""));
