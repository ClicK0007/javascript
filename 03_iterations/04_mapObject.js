// // Maps
/* 
In JavaScript, the Map object is a collection of key-value pairs where both keys and values can be of any data type. Unlike plain objects, Map keeps the order of the entries consistent with their insertion order and allows keys of any type (including functions, objects, and primitives).

Unique Values and Order matters
*/

let map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

// // To get keys
// for (const key of map) {
//     console.log(key);
// }
/* 
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

// // To get Values
// for (const [key] of map) {
//     console.log(key);
// }
/* 
IN
USA
Fr
*/

//// To get Key and value
// for (const [key,value] of map) {
//     console.log(key +':-' + value);
// }
/* 
IN:-India
USA:-United States of America
Fr:-France
*/




// // Create a new Map
// map = new Map();

// // Add some key-value pairs
// map.set("name", "Alice");
// map.set("age", 30);
// map.set(true, "boolean key");
// map.set({ key: "objectKey" }, "value for object key");

// // Get values by key
// console.log(map.get("name")); // Output: Alice
// console.log(map.get("age")); // Output: 30
// console.log(map.get(true)); // Output: boolean key

// // Check for keys
// console.log(map.has("name")); // Output: true
// console.log(map.has("unknownKey")); // Output: false

// // Get the size of the map
// console.log(map.size); // Output: 4

// // Iterate over the map
// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// for (const [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }

// // Output:
// // name: Alice
// // age: 30
// // true: boolean key
// // [object Object]: value for object key

// // Get all keys
// for (const key of map.keys()) {
//   console.log(key);
// }

// // Get all values
// for (const value of map.values()) {
//   console.log(value);
// }

// // Get all entries (key-value pairs)
// for (const [key, value] of map.entries()) {
//   console.log(`${key}: ${value}`);
// }

// // Remove a key-value pair
// map.delete("age");
// console.log(map.size); // Output: 3

// // Clear all key-value pairs
// map.clear();
// console.log(map.size); // Output: 0




// ---------- Interesting -------------

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// // TypeError: myObject is not iterable
// for (const [key, value] of myObject) {
//     // console.log(key, ':-', value); // TypeError: myObject is not iterable
// }
