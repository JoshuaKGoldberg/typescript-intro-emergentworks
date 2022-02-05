function fancyLog(input) {
    console.log("hello ".concat(input));
    if (input.length > 3) {
        return null;
    }
    return true;
}
var returnsVoid;
returnsVoid = function (input) {
    console.log("yo ".concat(input));
    return false;
};
var voidResult = returnsVoid("");
voidResult.toString();
var otherProcess = function (input) {
    //
    return input.length;
    // return 'alskdfja';
};
var process;
// We can infer that 'input' is of type string
process = function (input) { return input.length; };
// Error: Type 'string' is not assignable to type 'number'.
process = function (input) { return "".concat(input, "!"); };
// Error: Type '(input: number) => number' is not
// assignable to type '(input: string) => number'.
//   Types of parameters 'input' and 'input' are incompatible.
//     Type 'string' is not assignable to type 'number'.
process = function (input) { return input * 2; };
