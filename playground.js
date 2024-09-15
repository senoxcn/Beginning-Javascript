/*
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

/*
JS have 8 data types - undefined, null, boolean, string, symbol, number, object
*/

var ourName;
myVariable = 5;

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

var myVar = 0;      //initialize a variable to an initial value

var myName;
var myName = "your name";   //string literal

/*
- when variables are declared, they have an initial value of 'underfined'.
- when mathematical operation performed on an 'undefined' variable, the       result will be 'NaN' which means 'Not a Number'.
- if you concatenate a string with an 'undefined' variable, you will get a string of 'undefined'.

*/

//write variable names in JS in 'camelCase'.
var someVariable;
var anotherVariableName;
var thisVariableIsSoLong;

//var vs. let keywords
var camper = "James";
var camper = "David";   //var keyword can overwrite variable declarations
console.log(camper);

//let camper = "James";
//let camper = "David";
//console.log(camper);  //error
/*let was introduced in ES6. it cannot overwrite variable declarations or rather a variable with the same name can only be declared once.*/

const FAV_PET = "Cats";
//FAV_PET = "Dogs"; //error
//can also declare variables using 'const' keyword. It is similar to 'let' but 'const' are read-only
//uppercase variable identifiers for immutable values
//lowercase or camelCase for mutable values (objects and arrays)

/*
let myVar = 5 + 10;
let myVar = 12 - 6;
let myVar = 13 * 13;
let myVar = 16 / 2;
*/

i++;    //equivalent of i = i + 1
i--;    //i = i - 1;

let multiplyFN = 3.14 * 4.9;
let divideFN = 8.658 / 2.463;
console.log(multiplyFN);
console.log(divideFN);

console.log(5 % 2); //% - outputs the remainder

let addVal = 1;
addVal += 5;
console.log(addVal); //6

let subtractVal = 5;
subtractVal -= 2
console.log(subtractVal);

let multiplyVal = 4;
multiplyVal *= 2;
console.log(multiplyVal);

let divideVal = 10;
divideVal /= 2;
console.log(divideVal);

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);

const singleQuoteStr = "He said 'Nah, I'd win'.";
console.log(singleQuoteStr);

const newLine = "First paragraph.\nSecond paragraph.";
console.log(newLine);

const tabStr = "Testing\t\tthe\t\tjavascript\t\ttab.";
console.log(tabStr);

const goodStr = 'Jake ask Finn, "Hey, let\'s go on an adventure"';
//const badStr = 'Finn responds, "Let's go!"';        //error

// use \ as an escape character

const ourStr = "I come first. " + "I come second.";
console.log(ourStr);

let concatStr = "I come first. ";
concatStr += "I come second.";
console.log(concatStr);

const sampleName = "Metacrafters";
const concatName = "Hello, our name is " + sampleName + ", how are you?";
console.log(concatName);

const anAdjective = "awesome!";
let str = "Metracarfters is ";
str += anAdjective;     //output: Metacrafters is awesome!

//length of a string
console.log("Alan Peter".length);

//String values are IMMUTABLE (cannot be altered)
let myStr = "Bob";
myStr[0] = "J";     //output: no change

function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "it was false";
}

//test(true);
//test(false);
console.log(test(false));

function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(equalityTest('10'));
//the == operator performs type coercion, which means it tries to convert the values being compared to a common type before making the comparison.

//Strict equality === operator does not perform a type conversion.
function equalTest(val) {
    if (val === 10) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(equalTest('10')); // "Not Equal"

function notEqual(myNumber) {
    if (myNumber != 2) {
        return "Not equal";
    }
    return "Equal";
}
console.log(notEqual('2'));

//strict inequality operator !==
function strict(notNum) {
    if (notNum !== 3) {
        return "Not equal";
    }
    return "Equal";
}
console.log(strict('3'));

function greater(numGreat) {
    if (numGreat > 5) {
        return numGreat + " is greater than 5";
    }
    return numGreat + " is not greater than 5";
}
console.log(greater(10));

function less(numLess) {
    if (numLess < 5) {
        return numLess + " is less than 5";
    }
    return numLess + " is greater than 5";
}
console.log(less('2'));

function andOp(andVal) {
    if (andVal > 5 && andVal < 10) {
        return "Yes";
    }
    return "No";
}
console.log(andOp(7));

function orOp(orVal) {
    if (orVal > 5 || orVal < 10) {
        return "Yes";
    }
    return "No";
}
console.log(orOp(7));

function testFalse(testVal) {
    if (testVal > 15) {
        return "Bigger than 15";
    }
    else if (testVal < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 15";
    }
}
console.log(testFalse(-16));

function checkNumber(num) {
    if (num > 10) {
        return "Greater than 10";
    }
    else if (num === 10){
        return "Equal to 10";
    }
    else if (num > 5) {
        return "Greater than 5 but less than 10";
    }
    else {
        return "5 ir less";
    }
}
console.log(checkNumber(12));
console.log(checkNumber(10));
console.log(checkNumber(7));
console.log(checkNumber(4));