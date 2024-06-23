// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName // Its not gonna execute as it is just a reference
// sayMyName()



// const result = function addTwoNumbers(number1, number2){ // PARAMETERS
//     console.log(number1 + number2);
// }
// console.log(result) // [Function: addTwoNumbers]
// console.log(result(1,2)) // 3 // ARGUMENTS





// function addTwoNumbers(number1, number2){
//     console.log( number1 + number2 ) // 8
// }
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); // undefined // function doesn't return anything





/* 
THESE VALUES IS CONSIDERED AS FALSE IN JS
false — The Boolean value false.
0 — The number zero.
-0 — The number negative zero.
0n — The BigInt zero.
"" — An empty string.
null — The absence of any value.
undefined — A variable that has been declared but not assigned a value.
NaN — The special "Not-a-Number" value.
*/
function loginUserMessage(username = "sam"){ // provided with a default value of sam
    if(!username){ // undefined is considered as false that's why it will work
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))











// function calculateCartPrice(val1, val2, ...num1){  // ... Rest Parameter
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000)) // any numbers of arguments can be passed



// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({ // object can be passed directly
//     username: "sam",
//     price: 399
// })




// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray)); 
// console.log(returnSecondValue([200, 400, 500, 1000])); // array can be passed directly


// //function () {} // ERROR: Identifier Expected
//// () => {} // ERROR