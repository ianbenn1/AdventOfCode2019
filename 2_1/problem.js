const invals = require('./input.js');

const inputString = invals.inputstring;

let intcodeArray2 = inputString.split(",");
intcodeArray = intcodeArray2.map(val => {return parseInt(val)});
let curPosition = 0;
let exit = 0;



while (exit == 0)
{
    if(intcodeArray[curPosition] == 1)
    {
        let addval1 = intcodeArray[curPosition + 1];
        let addval2 = intcodeArray[curPosition + 2];
        let resultval = intcodeArray[addval1] + intcodeArray[addval2]; // 0 indexed?
        let storeval = intcodeArray[curPosition + 3];
        intcodeArray[storeval] = resultval
    }
    else if (intcodeArray[curPosition] == 2)
    {
        let addval1 = intcodeArray[curPosition + 1];
        let addval2 = intcodeArray[curPosition + 2];
        let resultval = intcodeArray[addval1] * intcodeArray[addval2]; // 0 indexed?
        let storeval = intcodeArray[curPosition + 3];
        intcodeArray[storeval] = resultval
    }
    else if (intcodeArray[curPosition] == 99)
    {
        console.log("Done");
        console.log(intcodeArray[0]);
        exit = 1;
    }
    else {
        console.log("Error. opcode: " + intcodeArray[curPosition]);
        exit = 1;
    }
    curPosition += 4;
}
