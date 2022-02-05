function logAndReturn<T>(thing: T) {
  console.log(`I have ${thing}`);

  if (typeof thing === "string") {
    thing.toUpperCase();
  }

  //   thing.asdkfjad.ajsfdm.aksjdf.aksdjf.asjkdf;

  return thing;
}

const firstValue = logAndReturn("asdf");

logAndReturn(0);
logAndReturn(new Date());
logAndReturn([3, 4]);

let myBoolean: boolean = Math.random() > 0.5;

const returnedBoolean = logAndReturn(myBoolean);

interface Box<T> {
  value: T;
}

let myBox: Box<number>;

myBox = { value: 0 };
myBox = { value: 1 };

myBox = { value: "nope" };

class ValueBox<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

const myValueBox = new ValueBox("hello");

myValueBox.value;
