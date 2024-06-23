// var c = 300
// let a = 300 // global scope 
// if (true) { // inside curly braces block scope
//     let a = 10
//     const b = 20
//     c = 30 // c value gets updated to 30
//     var c =40 // c value gets update to 40
//     console.log("INNER: ", a); // INNER:  10 
// }

// console.log(a); //300 // from global scope
// // console.log(b); // ERROR: b is not defined
// console.log(c); //40





// let x = 300 // global scope 
// const y = 20
// if (true) { 
//     x = 10.5
//     console.log("INNER: ", x); // INNER:  10.5 
//     console.log("INNER: ", y); // INNER:  20
// }

// console.log(x); // 10.5 
// console.log(y); // 20





// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website); // ERROR

//      two() // two can access one()'s variable BUT ONE CAN'T ACCESS THE TWO'S VARIABLES

// }

// // // one()







// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website); // ERROR
// }

// console.log(username); // ERROR


// // ++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(addone(5)) // THESE WILL RUN BECAUSE OF HOISTING

// function addone(num){
//     return num + 1
// }



// addTwo(5) // ERROR: Cannot access 'addTwo' before initialization
// const addTwo = function(num){ // addTwo is expression // in Js expression can hold anything array, objects, functions
//     return num + 2
// }