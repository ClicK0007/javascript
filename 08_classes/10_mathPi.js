// // getOwnPropertyDescriptor DEFAULT METHOD TO GET PROPERTIES
// const descripter = Object.getOwnPropertyDescriptor(Math, "PI") 
// console.log(descripter);
// /* 
// {
//   value: 3.141592653589793,
//   writable: false, // YOU CANNOT CHANGE THE PI VALUE
//   enumerable: false, // YOU CANNOT ITERATE THROUGH IT 
//   configurable: false
// }
// */

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5 // TRYING TO WRITE/ CHANGE PI VALUE 
// console.log(Math.PI); // 3.141592653589793 // DON'T GIVE ERROR AND VALUE NOT CHANGED

/////------------------------------------------------------------------------
// Making our own writable false and enumerable false 

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* 
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai, 'name', { //1.  name property is not iterable
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* 
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`); // 1. you cannot iterate through name
        // price : 250 isAvailable : true
    }
}