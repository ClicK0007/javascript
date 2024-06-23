// let score = "33"

// console.log(typeof score); // string
// console.log(typeof(score)); // string

// let valueInNumber = Number(score) // Type casted to number
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);

//-------------------------------------------------------------------------------------------

// ((((((((((((((((((((Twist in above concept)))))))))))))))))))))))))

// let score = "33abc"

// let valueInNumber = Number(score) 
// console.log(typeof valueInNumber); // number // BUT IT IS NOT A NUMBER '#'
// console.log(valueInNumber); // NaN 


// let score = null

// let valueInNumber = Number(score) 
// console.log(typeof valueInNumber);  //number
// console.log(valueInNumber); // 0


// let score = undefined

// let valueInNumber = Number(score) 
// console.log(typeof valueInNumber);  //number
// console.log(valueInNumber); // NaN


// let score = NaN

// let valueInNumber = Number(score) 
// console.log(typeof valueInNumber);  //number
// console.log(valueInNumber); // NaN


// console.log(NaN === NaN) // false

// ---------------------------------------------------------------------------------------

// Simple Concept Boolean conversion

// let score = true

// let valueInNumber = Number(score) 
// console.log(typeof valueInNumber); // Number 
// console.log(valueInNumber); // 1


// let isLoggedIn = "abc"

// let booleanIsLoggedIn = Boolean(isLoggedIn) // Boolean to convert into boolean
//  console.log(booleanIsLoggedIn); // true

// // 1 => true; 
// // 0 => false
// // "" => false

// ---------------------------------------------------------------------------------------
// Simple Conversion to string

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // string

// // *********************** Operations ***********************

// let value = 3
// let negValue = -value // converting to negative value
// console.log(negValue); -3


// // Basic Operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(4.1%2); // possible // 0.09999999999999964


// let str1 = "hello"
// let str2 = " hitesh"

// let str3 = str1 + str2
// console.log(str3); // hello hitesh

// console.log("1" + 2); // 12 
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122 
// console.log(1 + 2 + "2"); // 32


// console.log(+true); // 1 // Not recommeded at all for exam only
// console.log(+""); // 0
// //  console.log(true+); // ERROR


// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2 // all assigned to 4


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


/*
NAN
NaN stands for "Not-a-Number" and is used to indicate an error in a numerical operation.

Why it's a number:
It results from numeric operations that don't produce a valid result (e.g., 0/0 or parsing a non-numeric string).

Keeping NaN as a number makes handling numeric operations consistent and straightforward.

Examples:
0 / 0 results in NaN.
parseFloat("hello") results in NaN.

Checking for NaN:
NaN is not equal to anything, even itself: NaN === NaN is false.

Use isNaN(value) to check if a value is NaN.
*/ 