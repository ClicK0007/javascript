// // Map returns new array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // if u have to add 10 in every numbers

// const newNums = myNums.map((num) => num + 10);
// console.log(newNums);

// const newNums1 = myNums.map((num) => { return num + 10 }) // if block scope opened then use return statement
// console.log(newNums1);

// // Chaining of these functions
// const newNums2 = myNums.map(num => num * 10).map(num => num + 10).filter(num => num > 50);
// console.log(newNums2); // [ 60, 70, 80, 90, 100, 110 ]

/* 
first map will multiply by 10 then result will pass to second map
then map will add by 10 then result will pass to filter
then filter will filter the number whose value is above 50
*/