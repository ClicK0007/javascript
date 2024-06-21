const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"

accountCity = "Jaipur" 
/*
JavaScript will implicitly create a global variable accountCity and assign it the value "Jaipur".
It doesnot declared under any keyword like var, let or const
'#'
*/ 

let accountState; // If not intialize then undefined



// accountId = 2 // not allowed // Error: Assignment to constant variable



accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// To print value in tabular form
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
#
In JavaScript, if you declare a variable without using let, var, or const, it behaves differently depending on where you place the assignment:

1. Outside of any function (global scope):

Assigning a value to an undeclared variable in the global scope creates a property on the global object. This essentially creates a global variable.
This is generally bad practice because:
It can lead to naming conflicts with other scripts or libraries using the same global variable name.
It makes your code less predictable and harder to maintain.

2. Inside a function (without keywords):
This behaves similarly to the global scope scenario in pre-strict mode JavaScript (older versions). It also creates a property on a hidden object associated with the function.
In strict mode (the default mode in most modern browsers), this will throw an error because the variable is not declared.
*/ 