class User {
    // Define private fields with #
    #email;
    #password;

    constructor(email, password){
        this.#email = email;
        this.#password = password;
    }

    // Public getter for email
    getEmail(){
        return this.#email.toUpperCase();
    }

    // Public setter for email
    setEmail(value){
        this.#email = value;
    }

    // Public getter for password
    getPassword(){
        return `${this.#password}hitesh`;
    }

    // Public setter for password
    setPassword(value){
        this.#password = value;
    }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.getEmail()); // H@HITESH.AI
console.log(hitesh.getPassword()); // abchitesh

// Trying to access private fields directly will result in an error
// console.log(hitesh.#email); // SyntaxError: Private field '#email' must be declared in an enclosing class
// console.log(hitesh.#password); // SyntaxError: Private field '#password' must be declared in an enclosing class
