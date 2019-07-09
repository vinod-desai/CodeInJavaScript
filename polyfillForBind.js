let name = {
  firstname: "Vinod",
  lastname: "Desai"
};

let printName = function(city, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " , " +
      city +
      ", " +
      state +
      ", " +
      country
  );
};

let printMyName = printName.bind(name, "Bengaluru", "Karnataka");
// printMyName();
printMyName("India");

Function.prototype.mybind = function(...args) {
  let obj = this,
    params = args.slice(1);
  // console.log(obj);
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "Bengaluru", "Karnataka");
printMyName2("India");
