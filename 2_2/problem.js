const invals = require('./input.js');

const inputString = invals.inputstring;

const opcodeADD = 1;
const opcodeMULT = 2;
const opcodeDONE = 99;

let curPosition = 0;
let exit = 0;

let noun = -1;
let verb = 0;
let finalOutput = 0;

let desiredresult = 19690720;


const VERBOSITY = 1; // 1 - very talky, 2 - neat deets, 0 - off       [0 adds many speed]

while(finalOutput != desiredresult)
{
    let intcodeArray = inputString.split(",").map(val => {return parseInt(val)}); // Read in fresh file (resets memory)

    curPosition = 0;

    if (noun < 100)
    {
        noun++;
    }
    else
    {
        noun = 0;
        verb++;
    }
    
    if (verb == 100)
    {
        console.log("Unreachable state. No solution. Exiting");
        return;
    }

    (VERBOSITY == 1 || VERBOSITY == 2) && console.log("Trying N:" + noun + " V:" + verb);
    intcodeArray[1] = noun;
    intcodeArray[2] = verb;

    exit = 0;
    while (exit == 0)
    {
        if(intcodeArray[curPosition] == opcodeADD || intcodeArray[curPosition] == opcodeMULT)
        {
            let addval1 = intcodeArray[curPosition + 1];
            let addval2 = intcodeArray[curPosition + 2];
            let resultval;
            intcodeArray[curPosition] == opcodeADD ? (resultval = intcodeArray[addval1] + intcodeArray[addval2]) : (resultval = intcodeArray[addval1] * intcodeArray[addval2]);
            let storeval = intcodeArray[curPosition + 3];
            intcodeArray[storeval] = resultval
        }
        else if (intcodeArray[curPosition] == opcodeDONE)
        {
            VERBOSITY == 1 && console.log("Done");
            VERBOSITY == 1 && console.log(intcodeArray[0]);
            finalOutput = intcodeArray[0];
            if (finalOutput == desiredresult)
            {
                console.log("GOT IT! Noun: " + noun + " Verb: " + verb);
                return;
            }
            exit = 1;
        }
        else {
            console.log("Error. opcode: " + intcodeArray[curPosition]);
            exit = 1;
        }
        curPosition += 4; // Advance by instruction size
    }
}

