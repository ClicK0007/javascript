// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database"); 
//         // console.log(`Username: ${username}`); // ERROR: username not defined
//         console.log(`Username: ${this.username}`); // To print username of CURRENT CONTEXT
//         console.log(this); // To print CURRENT CONTEXT
//     }
// }
// console.log(user.username) // hitesh
// console.log(user.getUserDetails()); // calls function
// console.log(this); // {} // prints empty object in node js


  
// Constructor Function to give copy to instance to prevent overwrite 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        // console.log(`Welcome ${this.username}`);
    }

    return this // You can comment out these when using 'new' keyword because it is implicitely there
}
// Does not create instance // works as normal function
const user1 = User("hitesh", 12, true)
const user2 = User("ChaiAurCode", 11, false)
// PROBLEM // Because of call by reference // create only one instance
console.log(user1)
console.log(user2) // These will overwrite user1 also

// SOLUTION // create new instance
const userOne = new User("hitesh", 12, true) // new will give copy so changes will not reflect in User the changes will only in copy of User.
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); // [Function: User]
console.log(userTwo);

// instanceof to check whether the object is instance or not
console.log(user1 instanceof User) // false
console.log(userOne instanceof User) // true