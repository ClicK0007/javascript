const userName = ["Rohit", "Sharma"];
// const firstName = userName[0];
// const lastName = userName[1];

// Instead of above code you can also write 
// const [firstName, lastName] = ["Rohit", "Sharma"];
// console.log(firstName); // Rohit
// console.log(lastName); // Sharma

// ##########################################################################################

// // For objects:

// const user ={
//     name: "Max",
//     age: 27
// }

// name = user.name;
// age= user.age;

// Instead of above code u can also write

// const {name, age}={ // These name has to be same as the key in object
//     name: "Max",
//     age:27
// }

// if u want use aliasname 

// const {name: userName, age } = {
//     name: "Max",
//     age: 27
// }

// ########################### SPREAD OPERATOR ##########################

// Suppose u have two arrays
const arr1 = ['reading', 'travelling'];
const arr2 = ['coding', 'playing'];

// arr1.push(arr2) // it consider arr2 as element as pushes whole array
// console.log(arr1); // [ 'reading', 'travelling', [ 'coding', 'playing' ] ] // NESTED ARRAY PROBLEM

// let arr3 = [arr1, arr2] // THESE WILL RESULT IN NESTED ARRAY
// console.log(arr3); 
/*
 [
    [ 'reading', 'travelling', [ 'coding', 'playing' ] ],
    [ 'coding', 'playing' ]
  ]
*/


// Now u want to combine these two arrays into one array

// let arr3 = arr1.concat(arr2); // Combine two arrays and returns a array // Limitation : takes only 1 array as argument
// console.log(arr3); // ["reading", "travelling", "coding", "playing"]

arr3 = [...arr1, ...arr2]; // To combine two arrays. The spread operator takes the values inside the arrays and makes new array
let arr4 = [...arr1, 'new item', ...arr2]; // To combine two arrays

// console.log(arr3); // [ 'reading', 'travelling', 'coding', 'playing' ]
// console.log(arr4); // [ 'reading', 'travelling', 'new item', 'coding', 'playing' ]






// // Spread Operator for object

// const user = {
//     name: "Max",
//     age: 27
// }

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }

// console.log(extendedUser) // { isAdmin: true, name: 'Max', age: 27 }

