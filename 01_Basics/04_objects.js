// Object.create creates singleton object

// another way is object literals

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(JsUser.email) // hitesh@google.com // To access key value
// console.log(JsUser["email"]) // hitesh@google.com // Another way to access key value
// console.log(JsUser["full name"]) // Hitesh Choudhary // ||It can't be accessed by . you have to accessed it by []||

// To access symbol [] is the only way
const mySym = Symbol("key1")
const sym = Symbol("key")

const JsUser1 = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    sym: "mykey1", // NOT BE TREATED AS SYMBOL
    [mySym]: "mykey1", // USE [] to treat as symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser1[sym]) // undefined
// console.log(JsUser1[mySym]) // mykey1
// console.log(typeof JsUser1[sym]) // undefined
// console.log(typeof JsUser1[mySym]) // string

// JsUser1.email = "hitesh@chatgpt.com" // to change value of key email
// // Object.freeze(JsUser) // to freeze the object // NO VALUE WILL CHANGE, DON'T THROW ERROR

// console.log(JsUser1);
/* 
// {
//   name: 'Hitesh',
//   'full name': 'Hitesh Choudhary',
//   sym: 'mykey1',
//   age: 18,
//   location: 'Jaipur',
//   email: 'hitesh@chatgpt.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'    // Symbol logged like these
// }
*/


// JsUser1.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser1.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`); // refers to this object keys
// }

// console.log(JsUser1.greeting); // [Function (anonymous)]
// console.log(JsUser1.greeting()); // Hello JS user
// console.log(JsUser1.greetingTwo()); // Hello JS user, Hitesh 