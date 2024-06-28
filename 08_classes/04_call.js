// // One code three cases comment each one and execute one by one

function SetUsername(username){
    this.username = username
    console.log("called"); // called
}

function createUser(username, email, password){
    SetUsername(username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); // createUser { email: 'chai@fb.com', password: '123' }  
// But username is not set because setUsername context will be out of stack when its execution over so all the set variable will be deleted


////  -----------------------------------------------------------

// function SetUsername(username){
//     this.username = username
//     console.log("called"); // These will execute
// }

// function createUser(username, email, password){
//     SetUsername.call( username)
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai); //createUser { email: 'chai@fb.com', password: '123' }
// // same problem as earlier here just reference is there 
// // You also have to pass these reference

////  -----------------------------------------------------------

// function SetUsername(username){
//     //complex DB calls
//     this.username = username // by passing this reference also it will set username for createUser and goes out of stack
//     console.log("called"); // These will execute 
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username) // passing this reference
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);
// // createUser { username: 'chai', email: 'chai@fb.com', password: '123' }