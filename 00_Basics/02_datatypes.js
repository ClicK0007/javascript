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


// Two ways to check datatype 
typeof undefined;
// or
typeof(undefined);  



console.log(typeof undefined); // undefined
console.log(typeof null); // object '#'
console.log(typeof NaN) // number

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