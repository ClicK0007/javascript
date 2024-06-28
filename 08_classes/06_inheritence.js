class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
// new is mandotary or TypeError: cannot invoked without new
const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

// masalaChai.addCourse() // ERROR: not a function // don't have access  
masalaChai.logMe()
console.log(chai === Teacher) // false
console.log(chai instanceof User); // True
console.log(chai instanceof Teacher); // True