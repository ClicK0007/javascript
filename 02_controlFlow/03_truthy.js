const userEmail = []

// if (userEmail) { // Empty String treats as false // Empty Array treats as true
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length == '0') {
//     console.log("Array is empty"); // These will Print
// }





// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty"); // These will Print
// }







// Nullish Coalescing Operator (??): null undefined
// Used to check if null or undefined value coming from database

let val1 = 0 ?? 10
console.log(val1); // 0

let val2 = null ?? 10
console.log(val2); // 10 

let val3 = undefined ?? 15
console.log(val3); // 15

let val4 = null ?? 10 ?? 20
console.log(val4); // 10

/* 
The nullish coalescing operator (??) in JavaScript is used to provide a default value when dealing with null or undefined. It is a logical operator that returns its right-hand operand when its left-hand operand is null or undefined, and otherwise returns its left-hand operand. 

Usage:
let name = null;
let defaultName = "Guest";
let displayName = name ?? defaultName;
console.log(displayName); // "Guest"
*/







// Ternary Operator    (NO RELATION WITH ??)

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")