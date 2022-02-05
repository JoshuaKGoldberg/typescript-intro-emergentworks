// Tony Hoare
let myOtherValue = null;
let myOtherValue = undefined;

function logText(text) {
  if (text == null) {
    throw new Error("blah");
  }

  console.log(text.length);
}

logText(null);
