// Basics Comparision

// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true


// console.log("2" > 1); // true 
// console.log("02" > 1); // true
/*
In JavaScript, when comparing a string with a number using comparison operators like >, the string is first converted to a number.
*/

// console.log("a2" > 1); // false
/*
When JavaScript compares a string to a number using comparison operators like >, it first attempts to convert the string to a number. If the string cannot be converted to a valid number, the result is NaN (Not-a-Number). Any comparison with NaN always returns false.
*/ 



// console.log(null == 0); // false
// console.log(null > 0); // false 
// console.log(null >= 0); // true
/*
Equality Comparison (==):
null is only loosely equal (==) to undefined and no other values.
Therefore, null == 0 is false.

Relational Comparisons (> and >=):
When using relational operators, null is converted to a number. In this context, null is converted to 0.
This conversion means the comparisons can be evaluated numerically.

null > 0:
null is converted to 0.
The comparison 0 > 0 is false.

null >= 0:
null is converted to 0.
The comparison 0 >= 0 is true.
*/


// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined == NaN); // false
// console.log(undefined === undefined); // true

// console.log(undefined == null); // true
/* JavaScript checks if the values are undefined and null.
It recognizes that undefined and null are special cases that are considered equal when using ==. The result is true.*/

// console.log(undefined === null); // false
// console.log(undefined >= null); // false
// console.log(undefined > null); // false
// console.log(undefined <= null); // false


console.log(NaN == NaN); // Every operation is false
console.log("abc" == NaN); // false
// NaN == NaN is false because, by definition, NaN is not equal to any value, including itself.


// // ===  // Strict Checking
// console.log("2" === 2); // false