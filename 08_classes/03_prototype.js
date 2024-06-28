// let myHeros = ["thor", "spiderman"]
// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",
//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.newPower = function(){ // These is accessible to every one as Object is parent of all 
//     console.log(`New Power is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// // myHeros is array and heroPower is object
// heroPower.newPower() // As newPower is injected in Object(Parent of all) so it is available to all array and object also
// myHeros.newPower()
// myHeros.heyHitesh() // heyHitesh is injected in ONLY ARRAY so object cannot access it
// heroPower.heyHitesh() // TypeError: heroPower.heyHitesh is not a function



// // inheritance

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport // Inherit Teaching Support
// }

// Teacher.__proto__ = User // You can write outside also

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher) // same working just modern syntax


// // -----------------------------------------------------------------

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){ // injecting trueLength property in all string
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength() 