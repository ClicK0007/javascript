/*
Q. WHAT IF STATUS CODE IS 400 OR 404 WHERE WILL BE THE EXECUTION GO IN .then OR in .catch BLOCK?????????
IN .then BLOCK SAME WITH ASYNC AWAIT TRY CATCH BLOCK
The Fetch API considers these status codes as successful fetch operations from a network perspective, so the response will go to the .then block. However, you'll likely want to handle these status codes as errors, which is why it's common practice to check the response.ok property in the .then block and throw an error if it's false.
*/

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// Promise One
const promiseOne = new Promise(function(resolve, reject){ // takes 2 arguments
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // VERY IMPORTANT TO CALL .then
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})


// Promise Two
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// Promise Three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) // Passing value to .then function
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

// Promise Four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) // These is going to execute anyway


// Promise Five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
async function consumePromiseFive(){
    try { // try catch is neccessary if there is chances of reject
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// // Getting Data from API

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // response.json() will return promise
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()

/// CONSOLE LOG THESE API DATA IS COMING FIRST
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
/*
The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.
*/

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// output: Array [3, 42, "foo"]

/* 
Return value
A Promise that is:
-   Already fulfilled, if the iterable passed is empty. 
    const promises = []; // An empty array
    Promise.all(promises)
    .then(result => {
        console.log('Promise is already fulfilled:', result); 
        // Output: Promise is already fulfilled: []
    })
    .catch(error => {
        console.error('This will not be called because the promise is already fulfilled.');
    });

-   Asynchronously fulfilled, when all the promises in the given iterable fulfill. The      fulfillment value is an array of fulfillment values, in the order of the PROMISES passed, regardless of COMPLETION ORDER. If the iterable passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) fulfilled.
-    Asynchronously rejected, when any of the promises in the given iterable rejects. The rejection reason is the rejection reason of the FIRST promise that was rejected.
*/