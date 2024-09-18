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
