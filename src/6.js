var spongebob = {
    greet: function () {
        console.log("I'm ready!");
    },
    name: "Spongebob"
};
function logPerson(person) {
    console.log("".concat(person.name, " says:"));
    person.greet();
}
// This is allowed because spongebob is known to be of type 'Person'.
logPerson(spongebob);
var patrick = {
    greet: function () {
        console.log("It's first grade, Spongebob.");
    },
    name: "Patrick"
};
// This is also allowed; 'patrick' structurally matches.
logPerson(patrick);
var plankton = {
    announce: function () {
        console.error("I will destroy all of you!");
    },
    name: "Plankton"
};
// This is not allowed because plankton doesn't structurally match.
// Error: Argument of type '{ announce: () => void; name: string; }'
// is not assignable to parameter of type 'Person'.
//   Property 'greet' is missing in type '{ announce: () => void; name: string; }'
//   but required in type 'Person'.
logPerson(plankton);
