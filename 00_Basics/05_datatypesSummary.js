/*  Datatypes are divided into two types:
    Primitive and Non Primitive
    
    Primitive:::: 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
    They are call by value (copy is made when u pass it to any function)

*/
const score = 100 // Number type
const scoreValue = 100.3 //  // Number type

const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId); // false
/*In JavaScript, Symbol is a unique and immutable primitive value that can be used as an identifier for object properties. Even if two Symbol values are created with the same description, they are guaranteed to be unique. */


// const bigNumber = 3456543576654356754n // ends with n or it automatically gets converted to big int


// -----------------------------------------------------------------------------------------
// Reference (Non primitive) (call by reference)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



/*
In JavaScript, the return type of variables can be categorized into primitive data types and non-primitive (or reference) data types. Let's clarify and expand on each category:

1) Primitive Data Types and Their Return Types:
Number: Represents numeric values.
Return Type: number

String: Represents sequences of characters.
Return Type: string

Boolean: Represents true or false values.
Return Type: boolean

null: Represents the intentional absence of any object value.
Return Type: object (This is a historical mistake in JavaScript; null should ideally have its own type.)

undefined: Represents uninitialized variables or missing properties.
Return Type: undefined

Symbol: Represents unique identifiers.
Return Type: symbol

BigInt: Represents arbitrary-precision integers.
Return Type: bigint


2) Non-Primitive (Reference) Data Types and Their Return Types:
Arrays: Special type of object for storing ordered collections of data.
Return Type: object

Function: A callable object.
Return Type: function

Object: Generic objects containing key-value pairs.
Return Type: object

Additional Notes:
null: Although historically reported as object by typeof null, it is not an object but rather a primitive value. This is a mistake in the implementation of typeof in JavaScript.

typeof vs instanceof: typeof is used to determine the type of a variable or expression at runtime, while instanceof is used to check if an object is an instance of a particular class or constructor.

Type Coercion: JavaScript performs automatic type conversion (coercion) when applying operators to different types. This can sometimes lead to unexpected results and requires careful handling.

let arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"

function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // Output: "function"

let obj = { key: "value" };
console.log(typeof obj); // Output: "object"


*/