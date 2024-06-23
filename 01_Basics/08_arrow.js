// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage() 
// user.username = "sam" 
// user.welcomeMessage()
/* 
hitesh , welcome to website
{
  username: 'hitesh', // this refer to current context so hitesh
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam , welcome to website
{
  username: 'sam', // this refer to current context so sam
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/


// console.log(this); // {} // IN NODE ENVIRONMENT IT GIVES EMPTY OBJECT BUT IN BROWSER IT RETURNS WINDOW OBJECT
// // Window refers to browser's current window '#'

// ------------------------------------------------------------------------------------------------------

// function chai(){
//     let username = "hitesh"
//     console.log(this) // give Object with different values
//     console.log(this.username); // undefined
// }
// chai()



// const chai = function () {
//     let username = "hitesh"
// //      console.log(this) // give Object with different values
// //      console.log(this.username); // undefined
// }
// chai()




// const chai =  () => {
//     let username = "hitesh"
//     console.log(this); // {} // Gives empty object
// } 
// chai()
/*
Arrow Functions: Arrow functions do not bind their own this context. Instead, they inherit this from the surrounding lexical context (i.e., the context in which they are defined). If an arrow function is defined in the global scope, it will capture the this value of the global object (window in browsers, or global in Node.js).

Global Context: When you define an arrow function directly in the global scope (outside any other function or object), its this context will be the global object (window in browsers). However, since arrow functions do not have their own this binding, this remains unchanged from its surrounding context, which in this case is an empty object {}.
*/

// const person = {
//     name: "Alice",
//     greet: function() {
//       console.log("Hello, my name is", this.name); // this refers to person object
//     },
//     greetArrow: () => {
//       console.log("Hello, my name is", this.name); // this refers to the global object (unexpected!)
//     }
//   };
  
//   person.greet(); // Output: Hello, my name is Alice
//   person.greetArrow(); // Output: Hello, my name is undefined (because arrow inherits from global scope)
  



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
//// const addTwo = num1, num2 => ( num1 + num2 ) // ERROR
// const addTwo = (num1, num2) => ( num1 + num2 ) // (in parenthesis no need of return)

// const addTwo = (num1, num2) => ({username: "hitesh"}) // To return object has to be inside parenthesis

// console.log(addTwo(3, 4))

/* 
#
In the context of JavaScript running in a web browser, the window object has several important child objects and properties. Some of the key children of the window object include:

1. document
Description: Represents the HTML or XML document loaded in the window.
Functionality: Provides the primary interface for interacting with the content of the web page.
Example: Accessing elements, modifying the DOM, handling events.

2. navigator
Description: Provides information about the user's browser and operating system.
Functionality: Contains details such as the user agent, platform, and geolocation services.
Example: Detecting the browser type or getting the user's current location.

3. location
Description: Contains information about the current URL of the window.
Functionality: Allows you to get or set the URL, reload the page, and navigate to different URLs.
Example: Redirecting to another page or reloading the current page.

4. history
Description: Provides access to the browser's session history.
Functionality: Allows you to navigate back and forward through the user's browsing history.
Example: Going back to the previous page or moving forward to the next page.

5. screen
Description: Provides information about the user's screen.
Functionality: Contains properties such as screen width, height, and color depth.
Example: Determining the screen size to adjust the layout of a web page.

6. console
Description: Provides access to the browser's debugging console.
Functionality: Allows you to log information, warnings, and errors for debugging purposes.
Example: Logging messages to the console for development and debugging.

7. localStorage and sessionStorage
Description: Provide mechanisms for storing data locally within the user's browser.
Functionality: localStorage persists data even after the browser is closed, while sessionStorage persists data only for the duration of the page session.
Example: Storing user preferences or session data.
*/