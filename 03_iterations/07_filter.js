// // INTERESTING

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values); // undefined
// // ------------------------------------------------------------------------------------------------
// // FOR LOOPS CANNOT RETURN ELEMENTS SO THAT'S WHY WE USE MAP FILTER REDUCE
// // ------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = numbers.filter((num)=>num>4); // filter's takes one callback function and returns array of filtered numbers
// const newNums = numbers.filter(num=>num>4);


// // MISTAKE // if not return then empty array
// const newNums1 = numbers.filter((num)=>{num>4}); // No return statement
// console.log(newNums1); // It will return empty array BECAUSE WHEN U APPLIED CURLY BRACKETS THEN THEIR IS BLOCK SCOPE AND TO RETURN ELEMENTS U HAVE TO EXPLICITLY MENTION THE RETURN STATEMENT



// // HOW TO FILTER THE ABOVE USING FOR EACH LOOP    (lengthy process)

// let newNums2=[];
// numbers.forEach((num)=>{
//     if(num>4){
//         newNums2.push(num);
//         }
// })
// console.log(newNums2);




// ((((((((((((((((((( TO FILTER ARRAY OF OBJECTS )))))))))))))))))))

// const items = [
//     {
//         name: "Book",
//         price: 15.99,
//         author: "Jane Doe",
//         genre: "Fantasy"
//     },
//     {
//         name: "Headphones",
//         price: 79.95,
//         brand: "TechCo",
//         color: "Black"
//     },
//     {
//         name: "Shirt",
//         price: 24.50,
//         size: "M",
//         material: "Cotton"
//     },
//     {
//         name: "Coffee",
//         price: 3.99,
//         roast: "Medium",
//         origin: "Brazil"
//     },
//     {
//         name: "Movie Ticket",
//         price: 12.00,
//         title: "The New Adventure",
//         genre: "Action"
//     },
//     {
//         name: "Laptop",
//         price: 899.99,
//         brand: "MegaCorp",
//         processor: "i7"
//     },
//     {
//         name: "Desk Lamp",
//         price: 29.99,
//         adjustable: true,
//         style: "Modern"
//     },
//     {
//         name: "Notebook",
//         price: 7.50,
//         size: "A5",
//         lined: true
//     },
//     {
//         name: "Water Bottle",
//         price: 19.99,
//         capacity: "500ml",
//         insulated: true
//     },
//     {
//         name: "Plant",
//         price: 12.99,
//         type: "Monstera",
//         size: "Small"
//     }
// ];

// // Filter out objects whose price is more than 50 and name equal to laptop

// itemsPriceMoreThan50 = items.filter((item)=>item.price>50 && item.name==='Laptop'); // returns array of objects with price more than 50 and name laptop
// console.log(itemsPriceMoreThan50); 
/* 
[
  { name: 'Laptop', price: 899.99, brand: 'MegaCorp', processor: 'i7' }
]
*/

