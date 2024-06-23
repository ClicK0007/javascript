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

/*
---------------------------------------------------------------------------------------------------------------

Type Coercion: JavaScript performs automatic type conversion (coercion) when applying operators to different types. This can sometimes lead to unexpected results and requires careful handling.
Type coercion in JavaScript refers to the automatic conversion of values from one data type to another when applying operators or comparing values.

Example of Type Coercion:
let x = 10;
let y = '5';
let result = x + y;
console.log(result); // Output: "105"

Explanation:
Variables Initialization:
x is initialized as a number (10).
y is initialized as a string ('5').

Operation with Operator:
In JavaScript, when the + operator is used with a number and a string, JavaScript will coerce (convert) the operands to the same type if possible.
Here, JavaScript converts the number x to a string ('10'), and then concatenates it with the string y.

Result:
The resulting value of x + y is '105'.
This is because JavaScript performs string concatenation when one of the operands of the + operator is a string.
Comparison Operators:
console.log(10 == '10'); // Output: true
console.log(10 === '10'); // Output: false (strict equality does not perform type coercion)
console.log(0 == false); // Output: true (false is coerced to 0)
console.log(1 == true); // Output: true (true is coerced to 1)

console.log(5 + true); // Output: 6 (true is coerced to 1)
console.log(10 + null); // Output: 10 (null is coerced to 0)
console.log('Hello' + undefined); // Output: "Helloundefined" (undefined is coerced to "undefined")

Handling Type Coercion:
To avoid unexpected results due to type coercion, it's important to:
Use strict equality (===) when comparing values to avoid automatic type conversion.
Be aware of how JavaScript treats different types when performing operations.
Explicitly convert types using functions like parseInt, parseFloat, String, Number, etc., when needed to ensure clarity and predictability in your code.
*/