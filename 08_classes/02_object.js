/* 
Prototye Behaviour of JS
Core Concepts:

Prototype Chain: Every object in JavaScript has a hidden internal property called [[Prototype]] (denoted by double square brackets). This property points to another object, which acts as the prototype for the first object. This prototype object can also have its own [[Prototype]], and so on, forming a chain that ultimately leads to an object with a null [[Prototype]].

Property Lookup: When you try to access a property on an object (object.property), JavaScript first checks if the property exists directly on the object itself. If not found, it then walks up the prototype chain, looking for the property on the object's [[Prototype]], then its [[Prototype]]'s [[Prototype]], and so on, until it either finds the property or reaches the end of the chain (null [[Prototype]]).
*/

/* 
Is function is object in JS?
Yes, in JavaScript, functions are indeed objects. This is one of the unique and powerful aspects of JavaScript as a language. Here’s what it means for functions to be objects:

First-Class Citizens: In JavaScript, functions are treated as first-class citizens, which means they can be:

Assigned to variables and properties.
Passed as arguments to other functions.
Returned as values from other functions.
Function as an Object: When you define a function in JavaScript, like function myFunction() { ... }, it creates a function object. This object is an instance of the built-in Function constructor and inherits properties and methods from Function.prototype.

Function Properties: Functions in JavaScript can have properties and methods. For example:
Properties like name (the name of the function) and length (the number of arguments expected by the function).

Methods like call(), apply(), and bind(), which are inherited from Function.prototype.
Function Constructors: Besides regular functions, JavaScript also allows creating functions using the Function constructor. 
For example:
const add = new Function('a', 'b', 'return a + b;');
console.log(add(2, 3)); // Outputs: 5

Object-like Behavior: Functions can be passed around, stored in variables, and manipulated like any other object in JavaScript. This flexibility enables functional programming paradigms and advanced patterns like higher-order functions.

*/

/*
Arrow functions in JavaScript behave slightly differently compared to regular functions in terms of their object-oriented properties:

Arrow Function Basics:
Arrow functions were introduced in ES6 as a concise way to write functions.
They have a more compact syntax compared to traditional function expressions.

No prototype Property:
Unlike regular functions, arrow functions do not have their own prototype property. This means they do not have the typical behavior of being constructors and cannot be used with new to create instances.
Attempting to access prototype on an arrow function will result in a TypeError.

this Binding:
Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding lexical context (the context in which the arrow function is defined, often referred to as its enclosing scope).
This behavior is different from regular functions, where this is determined by how the function is called (this is bound dynamically).

Instance Creation:
Since arrow functions lack a prototype and do not have their own this binding, they cannot be used to create instances of objects in the same way as regular functions.
If you attempt to call an arrow function with new, it will throw an error (TypeError: (...) is not a constructor).
Here’s an example illustrating these differences:

// Regular function
function RegularFunction() {
  this.name = 'Regular Function';
}
RegularFunction.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const obj1 = new RegularFunction();
obj1.sayHello(); // Outputs: Hello, I'm Regular Function

// Arrow function
const ArrowFunction = () => {
  this.name = 'Arrow Function'; // Error: Cannot assign to read only property 'name' of object '#<Object>'
};
ArrowFunction.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};
const obj2 = new ArrowFunction(); // TypeError: ArrowFunction is not a constructor

In summary, while arrow functions are powerful for their concise syntax and lexical this binding, they lack the traditional object-oriented capabilities associated with regular functions, such as having a prototype for inheritance and the ability to be used with new to create instances.
*/

// //--------------------------------------------------------------------
// function multipleBy5(num){
//     return num*5
// }

// multipleBy5.greet = 'hi'  // Assigning property 

// console.log(multipleBy5(5)); // 25
// console.log(multipleBy5.greet); // hi
// console.log(multipleBy5.prototype); // {}


// //--------------------------------------------------------------------
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){ // injecting our function in prototype
    // // score++ //111111111111111
    // // Solution use this but still there is a problem
    this.score++ 
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

// Problem 111111111111111: create user don't know whose score has to be incremented whether its chai score or tea scores.
const chai = createUser("chai", 25) // TYPEERROR: Cannot read the property of undefined
const tea = createUser("tea", 250) // TYPEERROR: Cannot read the property of undefined

const chai1 = new createUser("chai", 25) // new keyword linked the prototype
const tea1 = new createUser("tea", 250) // more details below '#'

chai.printMe()

/*
You not write array.prototype.map you simply write array.map because JS automatically looks into parent's prototype is there method available or not until it gets null
*/ 


/*
'#'
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/