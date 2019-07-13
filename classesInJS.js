class Parent {
  constructor() {
    console.log("Parent class Constructor");
  }
  getName() {
    console.log("Parent Method");
  }
}

class Child extends Parent {
  constructor() {
    console.log("Child class Constructor");
    super();
  }
  /* getName() {
    console.log("Child Method");
    super.getName();
  } */
}

let obj = new Child();

obj.getName();
