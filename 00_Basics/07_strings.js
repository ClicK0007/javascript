// "" ''   In js both are same

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // old way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // modern way

let gameName = new String('hitesh-hc-com') // stored in heap
let stackName = 'hitesh-hc-com' // stored in stack

// console.log(typeof(gameName)) // object 
// console.log(typeof(stackName)) // string 

// console.log(gameName); // [String: 'hitesh-hc-com']
// // gameName.String(hi) // ERROR: hi is not defined
// console.log(stackName); // hitesh-hc-com


// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); 
// console.log(gameName.toUpperCase()); // not make changes to original string 
// let upper = gameName.toUpperCase
// console.log(upper); // [Function: toUpperCase]
// upper = gameName.toUpperCase() // returns string converted to upper-case
// console.log(upper); // HITESH-HC-COM

// // Original string: hitesh-hc-com

// console.log(gameName.charAt(2)); // gives character at index 2
// console.log(gameName.indexOf('t')); // gives index of t

// const newString = gameName.substring(0, 4) // hite   // returns substring which starts from 0 - 3rd index [4 not included]
// console.log(newString);
// const newwString = gameName.substring(-8, 4) // substring string ignored -ve value and starts from 0
// const newwwString = gameName.substring(4, 2) // te    // starts from 2nd index ends on 3rd [4th not included]
// console.log(newwwString); 


// // Original string: hitesh-hc-com

// const anotherString = gameName.slice(2, 4) // te
// const anotherString = gameName.slice(-13, 2) // hi
// const anotherString = gameName.slice(-8, 2) // results in empty string // because start index is after end index
// console.log(anotherString);


// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove whitespaces from both start and end

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) // replace %20 with -

// console.log(url.includes('sundar')) // false

// console.log(gameName.split('-')); // returns array splited by -