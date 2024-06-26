// // Program to check sum of all digits in array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for(let i = 0; i < array.length; i++) {
//     sum += array[i]; // In reduce, ACCUMULATE acts like SUM and CURRENT ELEMENT acts like 'i'
//     }
// console.log(sum);

// // acc = accumulator and cur = current element
// const result = array.reduce((acc, cur) => acc + cur, 0); // 0 is initial value to the accumulator
// // looping
// // 0+1=1
// // 1+2=3
// // 3+3=6
// // 6+4=10
// // 10+5=15
// // 15+6=21
// // 21+7=28
// // 28+8=36
// // 36+9=45
// // 45+10=55
// console.log(result);

// // To get explaination in more detail

// const output = array.reduce((acc,cur)=>{
//     console.log(`accumulator: ${acc} , current value: ${cur}`);
//     return acc + cur;
// },0) // 0 initial value

// accumulator: 0 , current value: 1
// accumulator: 1 , current value: 2
// accumulator: 3 , current value: 3
// accumulator: 6 , current value: 4
// accumulator: 10 , current value: 5
// accumulator: 15 , current value: 6
// accumulator: 21 , current value: 7
// accumulator: 28 , current value: 8
// accumulator: 36 , current value: 9
// accumulator: 45 , current value: 10

// ((((((((((((((((((( TO REDUCE ARRAY OF OBJECTS )))))))))))))))))))

// const items = [
//   {
//     name: "Book",
//     price: 15.99,
//     author: "Jane Doe",
//     genre: "Fantasy",
//   },
//   {
//     name: "Headphones",
//     price: 79.95,
//     brand: "TechCo",
//     color: "Black",
//   },
//   {
//     name: "Shirt",
//     price: 24.5,
//     size: "M",
//     material: "Cotton",
//   },
//   {
//     name: "Coffee",
//     price: 3.99,
//     roast: "Medium",
//     origin: "Brazil",
//   },
//   {
//     name: "Movie Ticket",
//     price: 12.0,
//     title: "The New Adventure",
//     genre: "Action",
//   },
//   {
//     name: "Laptop",
//     price: 899.99,
//     brand: "MegaCorp",
//     processor: "i7",
//   },
//   {
//     name: "Desk Lamp",
//     price: 29.99,
//     adjustable: true,
//     style: "Modern",
//   },
//   {
//     name: "Notebook",
//     price: 7.5,
//     size: "A5",
//     lined: true,
//   },
//   {
//     name: "Water Bottle",
//     price: 19.99,
//     capacity: "500ml",
//     insulated: true,
//   },
//   {
//     name: "Plant",
//     price: 12.99,
//     type: "Monstera",
//     size: "Small",
//   },
// ];

// // Determine the price of all the items

// const priceSum = items.reduce((sum, i) => sum + i.price, 0);
// console.log(priceSum);

