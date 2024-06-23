// const tinderUser = new Object() // gives empty object but SINGLETON
const tinderUser = {} // empty object literal

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }


// console.log(Object.keys(tinderUser)); // to get all the keys
// console.log(Object.values(tinderUser)); // to get all the values
// console.log(Object.entries(tinderUser)); // to get key + values

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if there is property named isLoggedIn




// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname); // hitesh




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 } 
// console.log(obj3); // Nested object problem


// Can be solved by Object.assign(target, source) 
// const obj4 = {5: "a", 6: "b"}
// const obj5 = Object.assign(obj1, obj2, obj4) // obj1 becomes target so changes REFLECTED on obj1 also
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj1); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj6 = Object.assign({},obj1, obj2, obj4) // {} IS TARGET // RECOMMENDED to give empty object as target so no object can get changed


// const obj3 = {...obj1, ...obj2} // By using spread operator




//-------Object Destructuring---------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


const {courseInstructor} = course // courseInstructor is variable where value getting stored from course object
// but key has to be ma

console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]