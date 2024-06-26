const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )


// // You can pass function in for each loop also
// function printMe(item){
//     console.log(item); // prints each item in coding
// }

// coding.forEach(printMe) // Send reference of function don't execute it [printMe()]



// // For each has three arguments element, index, array itself
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )







// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// } )



// --------------------------------------------------------------------------------------
// // To loop through objects we CANNOT use for each loop
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     hobbies: ["reading", "coding", "music"] // Array as a value
// };
// // ERROR: person.forEach is not a function
// person.forEach(element => {
//     console.log(element);
// });

////  -----------------------------------------------------------------------------




// // To loop through array of objects we use for each loop 

// const products = [
//     {
//         id: 1,
//         name: "Shirt",
//         price: 25.99,
//         size: "M",
//         inStock: true
//     },
//     {
//         id: 2,
//         name: "Jeans",
//         price: 49.95,
//         size: "32",
//         inStock: false
//     },
//     {
//         id: 3,
//         name: "Hat",
//         price: 19.99,
//         color: "blue",
//         inStock: true
//     }
// ];

// products.forEach(product => {
//     console.log(product);

//         console.log(product.id); // To get value of object's key
//         console.log(product.name);
//         console.log(product.price);
//         console.log(product.inStock);
//         console.log('------------------');
// });