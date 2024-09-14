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