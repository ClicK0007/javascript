// // One code three cases comment each one and execute one by one

// function SetUsername(username){
//     this.username = username
//     console.log("called"); // called
// }

// function createUser(username, email, password){
//     SetUsername(username)
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai); // createUser { email: 'chai@fb.com', password: '123' }
// But username is not set because setUsername context will be out of stack when its execution over so all the set variable will be deleted

////  -----------------------------------------------------------

// function SetUsername(username){
//     this.username = username
//     console.log("called"); // These will execute
// }

// function createUser(username, email, password){
//     SetUsername.call( username)
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai); //createUser { email: 'chai@fb.com', password: '123' }
// // same problem as earlier here just reference is there
// // You also have to pass these reference

////  -----------------------------------------------------------

// function SetUsername(username){
//     //complex DB calls
//     this.username = username // by passing this reference also it will set username for createUser and goes out of stack
//     console.log("called"); // These will execute
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username) // passing this reference
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);
// // createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

/*=========================================================================================*/

/* 
In JavaScript, a call is a method that allows you to invoke a function with a specified this value and arguments provided one by one. It's a method available on all JavaScript functions and is part of the Function.prototype.
*/

// Let consider you have one object

// const student = {
//     name: "amey",
//     age: 24,
//     email : function (){
//         return `${this.name}@example.com`
//     }
// }

// const teacher = {
//     name: "Peter",
//     age: 44,
//     email : function (){
//         return `${this.name}@example.com`
//     }
// }

// console.log(student.email())
// console.log(teacher.email())

// ///////////////// Instead of making two function for email you can make use of call

// const student = {
//     name: "amey",
//     age: 24,
//     email : function (){
//         return `${this.name}@example.com`
//     }
// }

// const teacher = {
//     name: "Peter",
//     age: 44
// }

// console.log(student.email())
// console.log(student.email.call(teacher))

// ///////////////// Many times you make these function outside

// // One code three cases comment each one and execute one by one

// function SetUsername(username){
//     this.username = username
//     console.log("called"); // called
// }

// function createUser(username, email, password){
//     SetUsername(username)
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai); // createUser { email: 'chai@fb.com', password: '123' }
// But username is not set because setUsername context will be out of stack when its execution over so all the set variable will be deleted

////  -----------------------------------------------------------

// function SetUsername(username){
//     this.username = username
//     console.log("called"); // These will execute
// }

// function createUser(username, email, password){
//     SetUsername.call( username)
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai); //createUser { email: 'chai@fb.com', password: '123' }
// // same problem as earlier here just reference is there
// // You also have to pass these reference

////  -----------------------------------------------------------

// function SetUsername(username){
//     //complex DB calls
//     this.username = username // by passing this reference also it will set username for createUser and goes out of stack
//     console.log("called"); // These will execute
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username) // passing this reference
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);
// // createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

/*=========================================================================================*/

/* 
In JavaScript, a call is a method that allows you to invoke a function with a specified this value and arguments provided one by one. It's a method available on all JavaScript functions and is part of the Function.prototype.
*/

// Let consider you have one object

// const student = {
//     name: "amey",
//     age: 24,
//     email : function (){
//         return `${this.name}@example.com`
//     }
// }

// const teacher = {
//     name: "Peter",
//     age: 44,
//     email : function (){
//         return `${this.name}@example.com`
//     }
// }

// console.log(student.email())
// console.log(teacher.email())

// ///////////////// Instead of making two function for email you can make use of call


// const student = {
//     name: "amey",
//     age: 24,
//     email : function (){
//         return `${this.name}@example.com`
//     }
// }

// const teacher = {
//     name: "Peter",
//     age: 44
// }

// console.log(student.email()) // amey@example.com
// // console.log(teacher.email()) // TypeError
// console.log(student.email.call(teacher)) // Peter@example.com

// ///////////////// It's better to make common function outside

// function email() {
//   return `${this.name}@example.com`;
// }

// const student = {
//   name: "amey",
//   age: 24,
// };

// const teacher = {
//   name: "Peter",
//   age: 44,
// };

// console.log(email(student)); // undefined@example.com
// /*
// when you call email(student) or email(teacher), JavaScript sets this inside the function to the global object (window in browsers). Since the global object likely doesn't have a name property, the function returns "undefined@example.com".
// */
// console.log(email.call(student)); // amey@example.com
// console.log(email.call(teacher)); // Peter@example.com
// /* 
// The call method allows you to explicitly set the context (this) for a function call. It takes two arguments:
// The first argument (student or teacher in this case) specifies the object that will act as this inside the function.
// Any subsequent arguments (undefined in this example) are passed as regular arguments to the function.
// */


// //////////////////// What if function accepts arguments

/ ///////////////// It's better to make common function outside

// function email(lastname,domainName) {
//   return `${this.name} ${lastname} @ ${domainName} .com`;
// }

// const student = {
//   name: "amey",
//   age: 24,
// };

// const teacher = {
//   name: "Peter",
//   age: 44,
// };

// console.log(email.call(student, "korde", "gmail")); // ameykorde@gmail.com
// console.log(email.call(teacher, "parker")); // Peterparker@undefined.com

// // You can give as many parameter's as you want but what if you want to pass an array then apply is used


// ////////// /////////////////////////Apply//////////////////////////////////////////

// function email(lastname, domainName) {
//     return `${this.name}${lastname}@${domainName}.com`;
//   }
  
//   const student = {
//     name: "amey",
//     age: 24,
//   };
  
//   const teacher = {
//     name: "Peter",
//     age: 44,
//   };
// //   // console.log(email.apply(student, "korde", "gmail")); // ameykorde@gmail.com
//   // TypeError: CreateListFromArrayLike called on non-object at Object.<anonymous>

//   console.log(email.apply(student, ["korde", "gmail"])); // ameykorde@gmail.com
//   console.log(email.apply(teacher, ["parker", "outlook"])); // Peterparker@outlook.com
  

// /// You have to call email.apply(student, ["korde", "gmail"]) to get email

// // What if you want to call these method many times


function getEmail(lastname, domainName) {
    return this.email = `${this.name}${lastname}@${domainName}.com`;
    // Sets new field in object same for APPLY AND BIND
  }
  
  const student = {
    name: "amey",
    age: 24,
  };
  
  const teacher = {
    name: "Peter",
    age: 44,
  };

  console.log(getEmail.call(student, "korde", "gmail")) // ameykorde@gmail.com
  console.log(student) // { name: 'amey', age: 24, email: 'ameykorde@gmail.com' }