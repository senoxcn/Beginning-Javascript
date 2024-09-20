const sandwich = ["peanut butter", "jelly", "bread"];
const teams = [["Bulls", 23], ["White Sox", 45]];   //multidimensional array

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
console.log(data);

const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log(ourArray);

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

const subarray = arr[3];            //[[10, 11, 12], 13, 14]
const nestedSubarray = arr[3][0];   //[10, 11, 12]
const element = arr[3][0][1];       //11

//push
const arr1 = [1, 2, 3];
arr1.push(4);
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr1);
console.log(arr2);

//pop
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//.shift() like works like pop() except it removes the first element instead
const theArray = ["Stimpson", "J", ["cat"]];
const removedFromTheArray = theArray.shift();
console.log(theArray);

//unshift() -> works like push(), but adds the element at the beginning of the array
const theArray1 = ["Strimpson", "J", ["cat"]];
theArray1.shift();
theArray1.unshift("Happy");
console.log(theArray1);

//objects
const cat = {
    "name": "Jerry",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};
console.log(cat);

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

//accessing object properties using dot notation
const myObj = {
    prop1: "val1",
    prop2: "val2"
};
const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

//bracket notation - use this if the property of the object you are trying to access has a space in its name
const myObject = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

console.log(myObject["Space Name"]);
myObject['More Space'];
myObject["NoSpace"];

//updating
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.name = "Happy Camper";       //ourDog["name"] = "Happy Camper";
console.log(ourDog);

//add new properties
ourDog.bark = "bow-wow";            //ourDog["bark"] = "bow-wow";
console.log(ourDog);

//delete properties
delete ourDog.bark;
