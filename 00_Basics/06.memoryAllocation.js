/*
In JS, primitive datatype is allocated memory in stack and 
for non-primitive datatype memory is allocated in heap.

Primitive (Stored in Stack)
    returns a copy so changes made is done on the copy

Non Primitive (Stored in Heap)
    returns a reference so changes made is done on originary value
*/

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-    

// Primitive type
let greet = "hi"
let anotherGreet = greet // copy of greet is returned to anotherGreet so changes will not reflected to greet
anotherGreet = "hello" // changes will not be reflected on greet 
console.log(greet); // hi
console.log(anotherGreet); // hello


// Non-Primitive type
let userOne = {
    name: "amey",
    email: 'amey@gmail.com'
}

let userTwo = userOne // returns reference // Both pointing to same memory location
userTwo.email = "amey@hotmail.com" // changes will also be done in userOne object

console.log(userOne.email) // amey@hotmail.com
console.log(userTwo.email) // amey@hotmail.com


userTwo = { // New object gets created on reassignment
    name: "amey",
    email: 'amey@yahoo.com' 
}

/*
Reference vs. Value: In JavaScript, objects (including arrays and functions) are reference types. When you assign an object to another variable, you're assigning a reference to the same object in memory, not a new copy of the object itself.
Reassignment: When you reassign userTwo to a new object ({ name: "amey", email: 'amey@yahoo.com' }), you're not modifying the original object (userOne). Instead, you're creating a new object and updating userTwo to reference this new object.
*/