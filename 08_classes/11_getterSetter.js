/* 
if you are writing get then you also have to write the set method
else TypeError: Cannot set property email of #<User> which has only a getter

if you are writing set but constructor is also setting the value then race condition happens and both constructor and setter tries to set the value 
RangeError: Maximum call stack size exceeded

solution to change the name 
*/

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    
    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email); // You can also call by property name as value is inside it

// ------------------------- Getter Setter by defineProperty ---------------------------
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}
const chai = new User("chai@chai.com", "chai")
console.log(chai.email);

// ----------------------------- Getter Setter on object --------------------------------------

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);