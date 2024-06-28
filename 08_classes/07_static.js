class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    // The createId method is a static method, which means it can be called on the class itself, not on instances of the class. It returns the string "123".

    static createId(){
        return `123`
    }
    //  call by directly class name
    // can't access by object or inherited object
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) // TypeError: not a function

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); // TypeError

// Call the static method createId
const id = User.createId();
console.log(id);  // Output: 123