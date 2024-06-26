// for of

// Syntax
// for (const iterator of object) { // HERE OBJECT IS USED AS BROADER TERM FOR ARRAY, OBJECTS AND STRINGS NOT FOR JS OBJECT.
// }


// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num); // 1 2 3 4 5
// }





// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`) // Prints each char of string
// }




// ERROR: myObject is not iterable
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key of myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// -------------------------------------------------------------------------------------------

// To loop through array of objects we use for of loop 

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

// for (const product of products) {
//     console.log(product); // It will give each object in the array

//     console.log(product.id); // To get value of object's key
//     console.log(product.name);
//     console.log(product.price);
//     console.log(product.inStock);
//     console.log('------------------');
// }

