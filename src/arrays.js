var myFlavors = [];
var firstFlavor = myFlavors[123];
console.log("best flavor EVER ".concat(firstFlavor));
var myDates = [];
myDates.push("sep 13 1993");
myDates.push(new Date(2022, 02, 05));
for (var _i = 0, myDates_1 = myDates; _i < myDates_1.length; _i++) {
    var date = myDates_1[_i];
    if (typeof date === "string") {
        date.toUpperCase();
    }
    else {
        date;
    }
}
// myFlavors.push("chocolate");
// myFlavors.push(null);
// function takeFlavors(...flavors: string[]) {
//   for (const flavor of flavors) {
//     console.log(flavor);
//     myFlavors.push(flavor);
//   }
// }
// takeFlavors("vanilla", "matcha", "coconut");
