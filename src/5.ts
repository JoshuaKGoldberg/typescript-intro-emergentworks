function fancyLog(input: string) {
  console.log(`hello ${input}`);

  if (input.length > 3) {
    return null;
  }

  return true;
}

let returnsVoid: (input: string) => void;

returnsVoid = (input) => {
  console.log(`yo ${input}`);
  return false;
};

const voidResult = returnsVoid("");

voidResult.toString();

const otherProcess = (input: string): number => {
  //
  return input.length;
  // return 'alskdfja';
};

let process: (input: string) => number;

// We can infer that 'input' is of type string
process = (input) => input.length;

// Error: Type 'string' is not assignable to type 'number'.
process = (input) => `${input}!`;

// Error: Type '(input: number) => number' is not
// assignable to type '(input: string) => number'.
//   Types of parameters 'input' and 'input' are incompatible.
//     Type 'string' is not assignable to type 'number'.
process = (input: number) => input * 2;
