let myFlavors: string[] = [];

let firstFlavor = myFlavors[123];

console.log(`best flavor EVER ${firstFlavor}`);

let myDates: (Date | string)[] = [];

myDates.push("sep 13 1993");
myDates.push(new Date(2022, 02, 05));

for (const date of myDates) {
  if (typeof date === "string") {
    date.toUpperCase();
  } else {
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
