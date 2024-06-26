// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }



// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log([key]);
// }
/* 
[ '0' ]
[ '1' ]
[ '2' ]
[ '3' ]
[ '4' ]
*/






// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);  // Output: [1, 2, 3, 4, 5]

// for (const i in numbers) {
//     // console.log(i); // It will give index 0,1,2,3,4,5
//     console.log(numbers[i]) // It will give value at index 1,2,3,4,5
// }





// ------------------------------------------------------------------------------------------------
// // To loop through array of objects we can for in loop

// const products = [
//     {
//         id: 1,
//         name: "Shirt",
//         price: 25.99,
//         size: "M",
//         inStock: true,
//         arr: [1,2,3]
//     },
//     {
//         id: 2,
//         name: "Jeans",
//         price: 49.95,
//         size: "32",
//         inStock: false,
//         arr: [1,2,3]
//     },
//     {
//         id: 3,
//         name: "Hat",
//         price: 19.99,
//         color: "blue",
//         inStock: true,
//         arr: [1,2,3]
//     }
// ];


// for (const product in products) {
//     console.log(product); // It will give index of each object in the array
//     const currentProduct = products[product]; // Access the current object
//     console.log(products[product]);
//     console.log("ID:", currentProduct.id);
//     console.log("Name:", currentProduct.name);
//     console.log("Price:", currentProduct.price);
//     console.log("In Stock:", currentProduct.inStock);
//     console.log("In Stock:", currentProduct.arr[0]);
//     console.log("In Stock:", currentProduct.arr[1]);
//     console.log("In Stock:", currentProduct.arr[2]);

// console.log("----------"); // Separator for readability
// }

// ----------------------INTERESTING-------------------------------------------------------
/* 
The for...in loop in JavaScript is designed to iterate over the enumerable properties of an object, not the keys of a Map. The Map object in JavaScript is not an object in the traditional sense; it's a collection of key-value pairs that maintains the insertion order of the keys and allows any type of value to be used as a key.
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // MAP CONTAINS ONLY UNIQUE VALUES SO JS INTERPRETER WILL NOT THROW AN ERROR IT WILL JUST IGNORE THESE


for (const key in map) {
    console.log(key);
}