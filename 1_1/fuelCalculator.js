const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;
const testString2 = invals.teststring2;
const testString3 = invals.teststring3;

let stringToUse = inputString; // Change this to run different input strings.
let totalFuel = 0;
stringToUse.split("\n").forEach(massValue => {
    totalFuel += (Math.floor(massValue / 3)) - 2;

});
console.log(`The total fuel required for this mass is ${totalFuel}`);