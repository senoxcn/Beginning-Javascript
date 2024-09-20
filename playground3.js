function testFun(param1, param2) {
    console.log(param1, param2);
}
testFun("Hello", "world!");

function plusThree(num) {
    return num + 3;
}
const answer = plusThree(5);
console.log(answer);

function myTest() {
    const loc = "foo";
    console.log(loc);
}
myTest();
console.log(loc);   //error

const someVar = "Hat";
function myFun() {
    const someVar = "Head";
    return someVar;
}
console.log(myFun());

//shorter
function isEqual(a, b) {
    return a === b;     // === returns 'true' or 'false'
}
console.log(isEqual(4, 4));

function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
}
myFun();
//return statement reached, execution of current function stops

const ourArray = [];
let i = 0;
while (i < 5) {
    ourArray.push(i);
    i++;
}
console.log(ourArray);

const theArray = [];
for (let i = 0; i < 5; i++){
    theArray.push(i);
}
console.log(theArray)

const evenNum = [];
for (let i = 0; i < 10; i += 2) {
    evenNum.push(i);
}
console.log(evenNum);

const backward = [];
for (let i = 10; i > 0; i -= 2){
    backward.push(i);
}
console.log(backward);

const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

const arrays = [
    [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < arrays.length; i++){
    for (let j = 0; j < arrays[i].length; j++){
        console.log(arrays[i][j]);
    }
}

const Arrays = [];
let i = 0;
do {
    Arrays.push(i);
    i++;
} while (i < 5);
console.log(Arrays);

const anotherArray = [];
let i = 5;

do {
    anotherArray.push(i);
    i++;
} while (i < 5);
console.log(anotherArray);

const a = parseInt("007");
console.log(a);