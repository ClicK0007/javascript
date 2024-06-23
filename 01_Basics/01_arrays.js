// JavaScript arrays are resizable and can contain a mix of different data types

// let myArr = [0, 1, 2, 3, 4, 5, true , "hi"] // array literal
// const myArr2 = new Array(1, 2, 3, 4) // array constructor

// console.log(myArr); // [0, 1, 2, 3, 4, 5, true, 'hi']
// console.log(myArr2); // [ 1, 2, 3, 4 ]

/*
Both are same just two ways to declare an array
Array Literal: Directly initializes an array object with specified elements.
Array Constructor: Creates an array object based on the arguments passed.
Storage: Both are stored in memory (heap) as objects, following JavaScript's object allocation rules.
*/


// --------------------------------------------------------------------------------------------
// Array Constructor

// const a1 = new Array(1, 2, 3, 4) // create an array object with 4 elements
// const a2 = new Array(5)     // create an empty array with 5 empty spaces
// console.log(a2) // [ <5 empty items> ]

// const a3 = new Array("oneElement")
// console.log(a3) // [ 'oneElement' ]

// const a4 = new Array(null)
// console.log(a4) // [ null ]

// const a6 = new Array();
// console.log(a6) // []
// a6[0] = 1;
// console.log(a6) // [1]

// --------------------------------------------------------------------------------------------

// Array methods

myArr = [0, 1, 2, 3, 4, 5]
// myArr.push(6)
// myArr.push(7)
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6, 7]

// myArr.pop() // no need of argument just popped out last elem
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9) // add element at start means shifts every element // not optimized // can be used in to-do // but ascending and descending is more proper solution
// console.log(myArr); // [9, 0, 1, 2, 3, 4, 5, 6] 
// myArr.shift() 
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6] // removes element from start // shifts every element

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // -1 // returns -1 if element is not present

// const newArr = myArr.join() // returns a string 
// const newArr1 = myArr.join('') 
// const newArr2 = myArr.join('-')
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr); // 0,1,2,3,4,5
// console.log( newArr1); // 012345
// console.log( newArr2); // 0-1-2-3-4-5


// // // ------Slice vs Splice--------

// console.log("ORIGINAL ARRAY -  ", myArr);

// const slicedArray = myArr.slice(1, 3) // slice from 1 index to 2nd index don't include 3rd index
// console.log("slicedArray : ", slicedArray);
/* 
ORIGINAL ARRAY -   [ 0, 1, 2, 3, 4, 5 ]
slicedArray :  [ 1, 2 ]
*/

// // slice don't manipulate the original array , SPLICE MANIPULATE THE ORIGINAL ARRAY

// const splicedArray = myArr.splice(1, 3) // remove element from original array and return those value // [also includes 3rd INDEX]
// console.log("splicedArray: ", splicedArray);
// console.log("ORIGINAL ARRAY -  ", myArr);
/*
ORIGINAL ARRAY -   [ 0, 1, 2, 3, 4, 5 ]
splicedArray:  [ 1, 2, 3 ]
ORIGINAL ARRAY -   [ 0, 4, 5 ]
*/