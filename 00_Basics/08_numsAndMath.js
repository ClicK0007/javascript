// const score = 400
// console.log(score); // 400

// const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3 // toString to convert into toString
// console.log(balance.toFixed(1)); // 100.0 // toFixed to fixed number after decimal

// // To precision use carefully only when you know the exact number of digits u r going to use
// const n1 = 123.8966 
// console.log(n1.toPrecision(2)); // 1.2e+2
// console.log(n1.toPrecision(3)); // 124
// console.log(n1.toPrecision(4)); // 123.9
// console.log(n1.toPrecision(5)); // 123.90

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000



// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4   // To convert to positive number ONLY
// console.log(Math.round(4.5)); // 5  // To round the number
// console.log(Math.ceil(4.2)); // 5  // upper value
// console.log(Math.floor(4.9)); // 4  // lower value 
// console.log(Math.min(4, 3, 6, 8)); // 3  // To find the min value 
// console.log(Math.max(4, 3, 6, 8)); // 8  // To find the max value

// console.log(Math.random()); // To get random value between 0-1
// console.log((Math.random()*10) + 1); // To get random between 1-10
// console.log(Math.floor(Math.random()*10) + 1); // To get integer random value between 1-10


// // Formula to get random value between MAX and MIN range 
// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)