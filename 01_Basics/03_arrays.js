const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // makes changes in same array
// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc_heros) // returns new array
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros] // spreads each element and then do operation
// console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // to get all values of array within array
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // INTERESTING 
/* 
Array.from({name: "hitesh"}) attempts to create an array from the object {name: "hitesh"}.
Since the input is not iterable (an array-like object or iterable object), Array.from() returns an empty array ([]).
*/ 

// // Example OBJECT TO ARRAY
// const obj = { name: "hitesh", age: 30, city: "New York" };

// // Convert object values into an array of values
// const valuesArray = Object.values(obj);
// console.log("Values array:", valuesArray); // Output: ["hitesh", 30, "New York"]

// // Convert object keys into an array of keys
// const keysArray = Object.keys(obj);
// console.log("Keys array:", keysArray); // Output: ["name", "age", "city"]

// // Convert object entries into an array of key-value pairs
// const entriesArray = Object.entries(obj);
// console.log("Entries array:", entriesArray); // Output: [["name", "hitesh"], ["age", 30], ["city", "New York"]]

// --------------------------------------------------------------------------------------------------------

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]