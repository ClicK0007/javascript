// Immediately Invoked Function Expressions (IIFE)
// Why IIFE - 
/*
Encapsulation and Scope Isolation:

Private Scope: Variables and functions declared inside an IIFE are scoped locally to the function itself. They do not pollute the global scope, which helps prevent naming conflicts and unintended modifications of global variables.
Encapsulation: By wrapping code within an IIFE, you can create modules or components that encapsulate their own logic, keeping internal implementation details hidden and only exposing necessary interfaces.
Execution Control:

Immediate Execution: IIFEs allow you to execute code immediately after its definition. This is useful for initializing variables, setting up configuration, or executing a block of code once without the need for a separate function call.
*/


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // SEMICOLON IS MUST FOR SECOND IIFE. IF NOT GIVEN JS CAN'T KNOW WHERE TO END THE CONTEXT 
// If a semicolon is omitted before an IIFE, JavaScript may interpret it as a continuation of the previous statement, potentially leading to syntax errors or unexpected behavior.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // passing argument to IIFE