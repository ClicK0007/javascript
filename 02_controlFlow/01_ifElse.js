// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);



// // ------------------Interesting-------------------------
const balance = 1000
// // if (balance > 500) console.log("test") ,console.log("test2"); // VALID

// if (balance > 500) console.log("test") ,
//             console.log("test2"); // VALID

// if (balance > 500) console.log("test"), console.log("test2") // Giving semicolon Recommended



// simple and both are same
// if (balance > 500) 
//     console.log("test")
// console.log("test2")

// if (balance > 5000) console.log("test")
//     console.log("test2")








const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // These will print
}