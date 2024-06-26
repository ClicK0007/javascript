"use strict"; // treat all JS code as newer version of JS

// alert( 3 + 3) // we are using nodejs, not browser so ERROR

console.log(3 // Not give error but readability is too low
    +
     3) // code readability should be high 

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number        range => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value // Null means empty value
// undefined => not initialize
// symbol => unique


// Two ways to check datatype  // Both have same functionality
// typeof is operator
// typeof operand
// typeof (operand) // Just for readabilty of complex problem
typeof undefined;
// or
typeof(undefined);  



console.log(typeof undefined); // undefined
console.log(typeof null); // object '#'
console.log(typeof NaN) // number

// ------------------------------------BIGINT---------------------------------------------

// let n=124890123456789012378902555555756546445745356345376453847568346586834658465864645
// console.log(n + typeof n); // 1.24890123456789e+80 number
/* 
In JavaScript, the number 1.2345678901234568e+19 means:
1.2345678901234568×10^19  //  LOSS IN PRECISION WHEN STORING IN NUMBER
*/ 

// const bigInt1 = 1234567890123456789012345678901234567890n;
// const bigInt2 = BigInt("1234567890123456789012345678901234567890");
// console.log(bigInt1); // 1234567890123456789012345678901234567890n
// console.log(bigInt2); // 1234567890123456789012345678901234567890n



// const bigIntValue = 12345678901234567890n;
// const numberValue = Number(bigIntValue); // May lose precision if BigInt is too large
// const bigIntFromNumber = BigInt(123); // 123n
// console.log(numberValue);      // 1.2345678901234568e+19
// console.log(bigIntFromNumber); // 123n



// const bigIntValue1 = 10n;
// const numberValue1 = 20;
// // This will throw an error
// // const sum = bigIntValue + numberValue;

// // Correct way
// const sum = bigIntValue1 + BigInt(numberValue1); // 30n
// const sum1 = Number(bigIntValue1) + numberValue1; // 30
// console.log(sum) // 30n
// console.log(sum1) // 30

/* 
When you store a number in JavaScript using exponential notation, it remains within the range of the Number type, which is based on the IEEE 754 double-precision floating-point format.
*/

// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// console.log(Number.MIN_VALUE); // 5e-324


// ---------------------------------------------------------------------------------------

/* 
#
What null is:

null in JavaScript represents the intentional absence of an object value. It indicates that there's no object there.
Why typeof null is "object":

This is a historical inconsistency that goes back to the early days of JavaScript's development. Back then, null was used to check for empty pointers (similar to C), which are technically object-like in nature.
While the behavior might seem illogical, changing it now would cause compatibility issues with a lot of existing JavaScript code.

typeof Operator: When the typeof operator was first implemented, it checked the type tag to return the type of the value. Since null had the same type tag as objects, typeof null returned "object".
This is considered a bug, but for the sake of backward compatibility, it has never been fixed. As a result, typeof null still returns "object" in all JavaScript environments.

*/

/*
NULL vs UNDEFINED

null:
Usage: Intentionally assigned by programmer to indicate no value or empty.
Example: Used to reset a variable or indicate no value.
Check: Use variable === null.

undefined:
Type: Undefined.
Usage: Default value for uninitialized variables, function parameters that are not provided, and missing object properties.
Example: Variables declared but not assigned a value.
Check: Use variable === undefined.

Key Differences
Assignment:
null is explicitly set by the programmer.
undefined is automatically set by JavaScript.

Typeof:
typeof null returns "object".
typeof undefined returns "undefined".

Equality:
null == undefined is true (loose equality).
null === undefined is false (strict equality).

Practical Usage
Use null to explicitly indicate the absence of a value.
For example: if code got some error, instead of returning 0 use null 

Use undefined to represent uninitialized variables, missing parameters, or non-existent object properties.
*/